'use client';
import Router from "next/router";
import { useCallback, useEffect, useState } from "react";
import fetchJson, { FetchError } from "./fetchJson";
import { Info, Supporter } from "./types";

export default function useInfo() {
    const [info, setInfo] = useState<Info | null>(null);

    useEffect(() => {
        const getSupporters = async () => {
            try {
                const supporters = await fetchJson<Supporter[]>("/api/v1/info/supporters");
                setInfo({
                    supporters: supporters,
                });
            } catch (error) {
                if (error instanceof FetchError) {
                    console.error(error.data);
                } else {
                    console.error(error);
                }
            }
        };
        getSupporters();
    }, []);

    return {
        info,
    }
        
}