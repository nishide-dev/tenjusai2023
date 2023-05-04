import Image from 'next/image'
import { Inter } from 'next/font/google'
import Countdown from '@/components/countdown/CountDown'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const targetDate = new Date('Sep 9, 2023 09:00:00');
  return (
      <div className="flex flex-col items-center justify-center h-screen">
        <Countdown targetDate={targetDate} />
      </div>
  )
}
