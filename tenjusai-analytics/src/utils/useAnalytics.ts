'use client';
import Router from "next/router";
import { useCallback, useEffect, useState } from "react";
import fetchJson, { FetchError } from "./fetchJson";
import { Access, Analytics } from "./types";
import { usePathname } from "next/navigation"

interface AnalyticsProps {
    pathname: string;
    count: number;
}

export default function useAnalytics(
    { pathname, count }: AnalyticsProps
) {
    const [analytics, setAnalytics] = useState<Analytics | null>();

    const getAnalytics = async () => {
        try {
            const analytics = await fetchJson<Analytics | null>(pathname, "POST", { count: count });
            setAnalytics(analytics);

        } catch (error) {
            if (error instanceof FetchError) {
                console.error(error.data);
            } else {
                console.error(error);
            }
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            getAnalytics();
        }
        , 2000);
        return () => clearInterval(interval);
    }, [count]);

    return analytics;

}