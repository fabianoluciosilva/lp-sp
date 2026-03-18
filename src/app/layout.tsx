import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Suspense } from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

// Importe o componente de scripts
import { ThirdPartyScripts } from "@/components/ThirdPartyScripts";

const geistSans = Geist({
  variable: "--font-geist-sans",
  display: "swap",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  applicationName: "Simples Solução TI",

  title: "Suporte de TI para Empresas no RJ | Simples Solução TI",

  description:
    "Empresa de TI no Rio de Janeiro especializada em suporte técnico, terceirização de TI e gestão com SLA. Atendimento empresarial rápido e seguro.",

  keywords: [
    "suporte de TI",
    "suporte de TI para empresas",
    "empresa de TI no Rio de Janeiro",
    "terceirização de TI",
    "gestão de TI empresarial",
    "suporte técnico corporativo",
    "TI para empresas RJ",
    "MSP Rio de Janeiro",
  ],

  authors: [{ name: "Simples Solução TI" }],
  creator: "Simples Solução TI",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://rj.simplessolucao.com.br",
    siteName: "Simples Solução TI",
    title: "Suporte de TI para Empresas no RJ | Simples Solução TI",
    description:
      "Especialistas em suporte de TI, terceirização e gestão de tecnologia para empresas no Rio de Janeiro.",
    images: [
      {
        url: "https://rj.simplessolucao.com.br/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Simples Solução TI - Suporte Empresarial",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Suporte de TI para Empresas no RJ | Simples Solução TI",
    description:
      "Suporte técnico empresarial, terceirização de TI e atendimento com SLA no Rio de Janeiro.",
    images: ["https://rj.simplessolucao.com.br/og-image.webp"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        {/* Scripts pesados removidos daqui para performance */}
      </head>

      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-50 dark:bg-black min-h-screen min-w-full`}
      >
        {/* GTM noscript */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
            height="0"
            width="0"
            className="none hidden"
          />
        </noscript>

        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Suspense>{children}</Suspense>
        </ThemeProvider>

        {/* Componente que gerencia o carregamento de scripts externos */}
        <ThirdPartyScripts />

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
