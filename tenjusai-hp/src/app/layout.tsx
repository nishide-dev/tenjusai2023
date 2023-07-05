import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Supporters from '@/components/Supporters'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '天樹祭 2023',
  description: '豊田工業大学 第40回大学祭',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={`${inter.className} scrollbar-hide`}>
        <Header />
        <main>
          {children}
        </main>
        <Supporters />
        <Footer />
      </body>
    </html>
  )
}
