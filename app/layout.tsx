import type React from "react"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import "./globals.css"
import { Footer } from "@/components/footer"
import GlobalToaster from "@/components/GlobalToaster"

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "Thamosa Stays - Your Home Away From Home",
  description:
    "Experience comfort and warmth at Thamosa Stays. Choose from our diverse range of homestays and farm villas for an unforgettable stay.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className="font-sans antialiased">
        {children}
         <GlobalToaster />
        <Footer />
      </body>
    </html>
  )
}
