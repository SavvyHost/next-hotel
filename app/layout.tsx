"use client"
import { MantineProvider } from "@mantine/core"
import "./globals.css"
import { Inter } from "next/font/google"
import { Navbar } from "./component/template/Navbar"
import Home from "./page"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <MantineProvider>
        
        <body className={inter.className} >
          <Navbar />
          {children}
        </body>
      </MantineProvider>
    </html>
  )
}
