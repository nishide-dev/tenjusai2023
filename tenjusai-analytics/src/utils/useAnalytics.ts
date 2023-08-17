'use client';
import Router from "next/router";
import { useCallback, useEffect, useState } from "react";
import fetchJson, { FetchError } from "./fetchJson";
import { Access, Analytics } from "./types";

export default function useAnalytics() {
    const [analytics, setAnalytics] = useState<Analytics>();

    useEffect(() => {
        const getAnalytics = async () => {
            try {
                const analytics = await fetchJson<Analytics>("/api/v1/analytics");
                setAnalytics(analytics);

            } catch (error) {
                if (error instanceof FetchError) {
                    console.error(error.data);
                } else {
                    console.error(error);
                }
            }
        };
        getAnalytics();
    }, []);

    return {
        analytics,
    }
        
}