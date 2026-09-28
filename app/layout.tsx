import type React from "react"
import "./globals.css"
import { Inter, JetBrains_Mono } from "next/font/google"
import type { Metadata } from "next"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Fishnet - Interactive Live Streaming & Parasocial Media Platform",
  description:
    "Revolutionizing entertainment by merging live streaming with interactive gameplay - viewers DIRECTLY influence content by paying.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-white text-black`}>{children}</body>
    </html>
  )
}
