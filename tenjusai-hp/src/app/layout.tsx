import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Supporters from '@/components/Supporters'

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
      <body className="scrollbar-hide">
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
