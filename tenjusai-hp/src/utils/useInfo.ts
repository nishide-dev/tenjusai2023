'use client';
import Router from "next/router";
import { useCallback, useEffect, useState } from "react";
import fetchJson, { FetchError } from "./fetchJson";
import { Info, Supporter, Banner, Dispatcher, Stage, Food, Lab, Event, ImageLink } from "./types";

export default function useInfo() {
    const [info, setInfo] = useState<Info | null>({
        supporters: [],
        banners: [],
        dispatchers: [],
        stages: [],
        foods: [],
        labs: [],
        events: [],
        image_links: [],
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
        const getStages = async () => {
            try {
                const stages = await fetchJson<Stage[]>("/api/v1/info/stages");
                // infoにstagesを追加
                setInfo((prev) => {
                    if (prev) {
                        return {
                            ...prev,
                            stages: stages,
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
        const getFoods = async () => {
            try {
                const foods = await fetchJson<Food[]>("/api/v1/info/foods");
                // infoにfoodsを追加
                setInfo((prev) => {
                    if (prev) {
                        return {
                            ...prev,
                            foods: foods,
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
        const getLabs = async () => {
            try {
                const labs = await fetchJson<Lab[]>("/api/v1/info/labs");
                // infoにlabsを追加
                setInfo((prev) => {
                    if (prev) {
                        return {
                            ...prev,
                            labs: labs,
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
        const getEvents = async () => {
            try {
                const events = await fetchJson<Event[]>("/api/v1/info/events");
                // infoにeventsを追加
                setInfo((prev) => {
                    if (prev) {
                        return {
                            ...prev,
                            events: events,
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
        const getImageLinks = async () => {
            try {
                const image_links = await fetchJson<ImageLink[]>("/api/v1/info/images");
                // infoにimage_linksを追加
                setInfo((prev) => {
                    if (prev) {
                        return {
                            ...prev,
                            image_links: image_links,
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
        getStages();
        getFoods();
        getLabs();
        getEvents();
        getImageLinks();
    }, []);

    return {
        info,
    }
        
}