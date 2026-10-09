import type { Metadata } from "next";
import type { ReactNode } from "react";

import { AnalyticsListener } from "@/components/analytics";
import { siteConfig } from "@/lib/seo";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: siteConfig.url,
  title: {
    default: siteConfig.defaultTitle,
    template: "%s",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: "/" }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
    url: "/",
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="id">
      <body>
        {children}
        <AnalyticsListener />
      </body>
    </html>
  );
}
