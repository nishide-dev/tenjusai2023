import useAnalytics from '@/utils/useAnalytics';
import { Analytics } from '@/utils/types';
import Link from 'next/link';
import TableGrid from './TableGrid';

async function getData() {
    const res = await fetch(`http${process.env.BASE_URL}/api/v1/analytics`, {cache: "no-cache"});
   
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json();
}

const AnalyticsTable: React.FC = async () => {

    const analytics = await getData() as Analytics;
    console.log('fetched');

    return (
        <div className="">
            <TableGrid analytics={analytics} />
        </div>
    );
};

export default AnalyticsTable;