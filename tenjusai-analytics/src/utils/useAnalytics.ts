'use client';
import Router from "next/router";
import { useCallback, useEffect, useState } from "react";
import fetchJson, { FetchError } from "./fetchJson";
import { Access, Analytics } from "./types";
import { usePathname } from "next/navigation"


export default function useAnalytics() {
    const [analytics, setAnalytics] = useState<Analytics | null>();

    // useEffect(() => {
    //     const getAnalytics = async () => {
    //         try {
    //             const analytics = await fetchJson<Analytics | null>("/api/v1/analytics");
    //             setAnalytics(analytics);

    //         } catch (error) {
    //             if (error instanceof FetchError) {
    //                 console.error(error.data);
    //             } else {
    //                 console.error(error);
    //             }
    //         }
    //     };
    //     getAnalytics();
    // }, []);

    // 2秒ごとにアナリティクスを更新
    useEffect(() => {
        const interval = setInterval(async () => {
            try {
                const analytics = await fetchJson<Analytics | null>("/api/v1/analytics");
                setAnalytics(analytics);
                
            } catch (error) {
                if (error instanceof FetchError) {
                    console.error(error.data);
                } else {
                    console.error(error);
                }
            }
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return {
        analytics,
    }
        
}