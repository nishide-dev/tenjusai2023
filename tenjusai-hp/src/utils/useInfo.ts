'use client';
import Router from "next/router";
import { useCallback, useEffect, useState } from "react";
import fetchJson, { FetchError } from "./fetchJson";
import { Info, Supporter, Banner, Dispatcher } from "./types";

export default function useInfo() {
    const [info, setInfo] = useState<Info | null>({
        supporters: [],
        banners: [],
        dispatchers: [],
    });

    useEffect(() => {
        const getSupporters = async () => {
            try {
                const supporters = await fetchJson<Supporter[]>("/api/v1/info/supporters");
                // infoにsupportersを追加
                setInfo((prev) => {
                    if (prev) {
                        return {
                            ...prev,
                            supporters: supporters,
                        };
                    }
                    return null;
                });

            } catch (error) {
                if (error instanceof FetchError) {
                    console.error(error.data);
                } else {
                    console.error(error);
                }
            }
        };
        const getBanners = async () => {
            try {
                const banners = await fetchJson<Banner[]>("/api/v1/info/banners");
                // infoにbannersを追加
                setInfo((prev) => {
                    if (prev) {
                        return {
                            ...prev,
                            banners: banners,
                        };
                    }
                    return null;
                });

            } catch (error) {
                if (error instanceof FetchError) {
                    console.error(error.data);
                } else {
                    console.error(error);
                }
            }
        };
        const getDispatchers = async () => {
            try {
                const dispatchers = await fetchJson<Dispatcher[]>("/api/v1/info/dispatchers");
                // infoにdispatchersを追加
                setInfo((prev) => {
                    if (prev) {
                        return {
                            ...prev,
                            dispatchers: dispatchers,
                        };
                    }
                    return null;
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
        getBanners();
        getDispatchers();
    }, []);

    return {
        info,
    }
        
}