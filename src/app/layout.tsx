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

  title: "Suporte de TI para Empresas em SP | Simples Solução TI",

  description:
    "Suporte de TI em São Paulo especializado em contabilidade, advocacia e PMEs. Mais de 20 anos de experiência com atendimento técnico rápido e SLA garantido.",

  keywords: [
    "suporte de TI em São Paulo",
    "suporte de TI SP",
    "empresa de TI em São Paulo",
    "TI para escritórios de advocacia SP",
    "TI para contabilidade SP",
    "terceirização de TI SP",
    "gestão de TI Indianópolis",
    "suporte técnico corporativo SP",
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
    url: "https://sp.simplessolucao.com.br",
    siteName: "Simples Solução TI",
    title: "Suporte de TI para Empresas em SP | Simples Solução TI",
    description:
      "Especialistas em suporte de TI, terceirização e gestão de tecnologia para empresas em São Paulo. Atendimento rápido e com SLA.",
    images: [
      {
        url: "https://sp.simplessolucao.com.br/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Simples Solução TI - Suporte Empresarial em São Paulo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Suporte de TI para Empresas em SP | Simples Solução TI",
    description:
      "Suporte técnico empresarial, terceirização de TI e atendimento com SLA em São Paulo.",
    images: ["https://sp.simplessolucao.com.br/og-image.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Configuração do Schema Markup para Local SEO (Google Rich Results)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ITUtility",
    name: "Simples Solução TI",
    url: "https://sp.simplessolucao.com.br",
    logo: "https://sp.simplessolucao.com.br/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Miruna, 168",
      addressLocality: "Indianópolis",
      addressRegion: "SP",
      postalCode: "04084-000",
      addressCountry: "BR",
    },
  };

  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        {/* Schema Markup - Local SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Google Ads Tag - SP */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-2YTH2793WR"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-2YTH2793WR');
            `,
          }}
        />
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
