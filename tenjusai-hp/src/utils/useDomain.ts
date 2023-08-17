'use client';
import Router from "next/router";
import { useCallback, useEffect, useState } from "react";
import fetchJson, { FetchError } from "./fetchJson";
import { Domain } from "./types";

export default function useDomain() {
    const [domain, setDomain] = useState<Domain>({
        domain: '',
    });

    useEffect(() => {
        const getDomain = async () => {
            try {
                const domain = await fetchJson<Domain>("/api/v1/domain");
                setDomain(domain);
                const { data, error } = await fetchJson<any>("/api/v1/access", "POST", {
                    domain: domain.domain
                });
                console.log(data);
                console.log(error);

            } catch (error) {
                if (error instanceof FetchError) {
                    console.error(error.data);
                } else {
                    console.error(error);
                }
            }
        };
        getDomain();
    }, []);

    return {
        domain,
    }
        
}