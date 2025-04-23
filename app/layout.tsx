import type React from "react"
import "@/app/globals.css"
import { Poppins } from "next/font/google"
import { Toaster } from "@/components/ui/toaster"

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
})

export const metadata = {
  title: "Ary Bhalerao Basketball Coaching - EOI",
  description: "Express your interest in basketball coaching services with Ary Bhalerao",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
