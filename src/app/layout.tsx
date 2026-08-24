import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "../components/Providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cordeiro-distribuidora.vercel.app"),
  title: "Cordeiro Distribuidora - Catálogo e Delivery",
  description: "Catálogo digital e delivery de bebidas. Peça suas cervejas, destilados, combos e refrigerantes direto no WhatsApp!",
  openGraph: {
    title: "Cordeiro Distribuidora - Catálogo e Delivery",
    description: "Sua bebida gelada onde você estiver. Cervejas, destilados, combos e entrega rápida!",
    url: "https://cordeiro-distribuidora.vercel.app",
    siteName: "Cordeiro Distribuidora",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 800,
        alt: "Cordeiro Distribuidora Logo",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cordeiro Distribuidora - Catálogo e Delivery",
    description: "Sua bebida gelada onde você estiver. Faça seu pedido!",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <Providers>
          <div className="container">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
