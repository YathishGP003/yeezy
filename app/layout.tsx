import type { Metadata } from 'next'
import { DM_Mono } from 'next/font/google'
import './globals.css'
import CartProvider from '@/providers/cart-context'

const dmmono = DM_Mono({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'yeezy',
  description: 'Yeezy is a website that sells yeezy shoes.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body className={`${dmmono.className}`}>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  )
}
