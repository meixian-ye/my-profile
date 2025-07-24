import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "叶梅仙 - AI产品经理讲师",
  description: "成信院毕业的电子商务狗，云里雾里当上了产品狗",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className="font-sans bg-white text-gray-800 leading-relaxed">{children}</body>
    </html>
  )
}
