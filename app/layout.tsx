import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "USA Africa Chamber of Commerce | Unity First Summit",
  description:
    "Empowering African diaspora communities through business development, workforce training, and unity-building initiatives.",
  keywords: "USA Africa Chamber, Unity First Summit, African diaspora, business development, workforce training",
  openGraph: {
    title: "USA Africa Chamber of Commerce",
    description: "Empowering African diaspora communities through business development and unity initiatives.",
    url: "https://usa-africa-chamber.vercel.app",
    siteName: "USA Africa Chamber",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "USA Africa Chamber of Commerce",
    description: "Empowering African diaspora communities through business development and unity initiatives.",
    images: ["/og-image.jpg"],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
