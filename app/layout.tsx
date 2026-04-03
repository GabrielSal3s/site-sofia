import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://seusite.vercel.app"),

  title: "Sofia Silva | Tatuadora em São Paulo",

  description:
    "Tatuagens fine line, blackwork e minimalistas em São Paulo. Atendimento personalizado com arte autoral e traço delicado.",

  keywords: [
    "tatuadora em São Paulo",
    "tatuagem fine line",
    "blackwork SP",
    "tatuagem minimalista",
    "tatuagem delicada feminina",
  ],

  openGraph: {
    title: "Sofia Silva | Tatuadora em São Paulo",
    description:
      "Tatuagens fine line, blackwork e minimalistas em São Paulo. Atendimento personalizado.",
    url: "https://seusite.vercel.app",
    siteName: "Sofia Silva Tattoo",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // coloque essa imagem na pasta public
        width: 1200,
        height: 630,
        alt: "Tatuagem fine line por Sofia Silva",
      },
    ],
  },

  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}