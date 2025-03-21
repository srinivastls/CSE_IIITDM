import type { Metadata } from "next"
import type React from "react"
import "./globals.css"
import "./overview.css"
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: "IIITDM Kancheepuram - CSE Department",
  description: "Department of Computer Science & Engineering at IIITDM Kancheepuram",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background font-sans antialiased" suppressHydrationWarning>
        {children}
      </body>
      <Analytics/>
    </html>
  )
}

