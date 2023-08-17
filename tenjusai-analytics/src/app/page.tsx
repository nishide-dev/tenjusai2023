// import useAnalytics from '@/utils/useAnalytics';
import { Analytics } from '@/utils/types';
import Link from 'next/link';
import AnalyticsTable from '@/components/AnalyticsTable';
import useAnalytics from '@/utils/useAnalytics';

export default async function Home() {

  return (
    <div className="flex min-h-screen flex-col items-start justify-start gap-10 pt-16 p-4 xl:p-24">
      <div className="text-2xl">TENJUSAI 2023 ANALYTICS</div>
      <AnalyticsTable />
    </div>
  )
}
