import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { type PropsWithChildren } from 'react'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'SupportMe',
  description: 'The best dashboard to manage customer support',
}

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en" className="dark">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}

export default RootLayout
