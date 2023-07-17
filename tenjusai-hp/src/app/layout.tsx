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
  // return (
  //   <html lang="ja">
  //     <body className={`${inter.className} scrollbar-hide`}>
  //       <Header />
  //       <main>
  //         {children}
  //       </main>
  //       <Supporters />
  //       <Footer />
  //     </body>
  //   </html>
  // )
  return (
    <html lang="ja">
      <body className={`${inter.className} scrollbar-hide`}>
        <main>
          <div className="h-screen bg-tenjusaiHero">
            <div className="flex flex-col items-center justify-center h-screen">
              <div className="text-white text-4xl font-extrabold md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl animate-fade-in-up">
                <span className="text-tenjusaiGreen">C</span>OMING <span className="text-tenjusaiGreen">S</span>OON
              </div>
            </div>
          </div>
        </main>
      </body>
    </html>
  )
}
