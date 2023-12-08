import './globals.css'
import { Inter } from 'next/font/google'
import DefaultLayout from '@/components/layout/default-layout'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <DefaultLayout>{children}</DefaultLayout>
    </html>
  )
}
