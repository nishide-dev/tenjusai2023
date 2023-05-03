import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h2>Home</h2>
      </div>
  )
}
