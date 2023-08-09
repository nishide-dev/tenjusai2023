import './globals.css'
import Layout from '@/components/Layout'

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
      <Layout>{children}</Layout>
    </html>
  )
}
