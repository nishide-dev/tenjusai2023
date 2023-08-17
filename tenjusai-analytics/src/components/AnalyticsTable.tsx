'use client';
import { useEffect, useState } from 'react';

import useAnalytics from '@/utils/useAnalytics';
import { Analytics } from '@/utils/types';
import Link from 'next/link';
import TableGrid from './TableGrid';
import { URL } from '@/utils/api';

// async function getData() {
//     const res = await fetch(URL, {cache: "no-cache"});
   
//     if (!res.ok) {
//       throw new Error('Failed to fetch data')
//     }
   
//     return res.json();
// }

const AnalyticsTable: React.FC = () => {

    // const analytics = await getData() as Analytics;
    // console.log('fetched');

    const [analytics, setAnalytics] = useState<Analytics | null>(null);
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(URL, {cache: "no-cache"});
            if (!res.ok) {
                throw new Error('Failed to fetch data')
            }
            const data = await res.json();
            setAnalytics(data);
        };
        fetchData();
    }
    , []);


    return (
        <div className="">
            <TableGrid analytics={analytics} />
        </div>
    );
};

export default AnalyticsTable;