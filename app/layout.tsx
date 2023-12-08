import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import Navbar from './components/Navbar';
import { ClerkProvider } from '@clerk/nextjs'
import {dark} from "@clerk/themes";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ChatAI',
  description: 'ChatAI is AI model which gives answer to your prompt',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider appearance={{ baseTheme : dark }}>
      <html data-theme="dark" lang="en">
        <body className={inter.className}>
          <Navbar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
