import type { Metadata } from "next";

const fallbackSiteUrl = "http://localhost:3000";

function getConfiguredSiteUrl() {
  const explicitUrl = process.env.NEXT_PUBLIC_SITE_URL;

  if (explicitUrl) {
    try {
      return new URL(explicitUrl);
    } catch {
      return new URL(fallbackSiteUrl);
    }
  }

  const vercelUrl =
    process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;

  if (vercelUrl) {
    return new URL(`https://${vercelUrl}`);
  }

  return new URL(fallbackSiteUrl);
}

export const siteConfig = {
  name: "Anggit Prakoso",
  defaultTitle: "Anggit Prakoso — Marketing, Branding & Digital Growth",
  description:
    "Anggit Prakoso membantu UMKM dan bisnis F&B membangun brand, marketing, dan digital presence yang lebih profesional, terarah, dan siap bertumbuh.",
  locale: "id_ID",
  url: getConfiguredSiteUrl(),
} as const;

export function absoluteUrl(path: string) {
  return new URL(path, siteConfig.url).toString();
}

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  noIndex?: boolean;
  authorName?: string;
  category?: string;
  publishedTime?: string;
};

export function createPageMetadata({
  title,
  description,
  path,
  type = "website",
  noIndex = false,
  authorName,
  category,
  publishedTime,
}: PageMetadataOptions): Metadata {
  const canonicalUrl = absoluteUrl(path);
  const openGraph =
    type === "article"
      ? {
          title,
          description,
          url: canonicalUrl,
          siteName: siteConfig.name,
          locale: siteConfig.locale,
          type: "article" as const,
          ...(authorName ? { authors: [authorName] } : {}),
          ...(category ? { section: category } : {}),
          ...(publishedTime ? { publishedTime } : {}),
        }
      : {
          title,
          description,
          url: canonicalUrl,
          siteName: siteConfig.name,
          locale: siteConfig.locale,
          type: "website" as const,
        };

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    ...(authorName
      ? {
          authors: [{ name: authorName, url: absoluteUrl("/") }],
        }
      : {}),
    ...(category ? { category } : {}),
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    openGraph,
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}
