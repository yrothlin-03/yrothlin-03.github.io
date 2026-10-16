import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Yanic Röthlingshöfer | MVA Master's Student",
  description:
    "Portfolio of Yanic Röthlingshöfer, MVA master's student at ENS Paris-Saclay and engineering student at Télécom Paris, specializing in applied mathematics, machine learning, and computer vision.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
