import type {
  DesignPortfolioCategory,
  DesignPortfolioItem,
} from "@/types/content";

export const designPortfolioCategories = [
  { slug: "brand-identity", label: "Brand Identity" },
  { slug: "campaign-social", label: "Campaign & Social" },
  { slug: "website-landing-page", label: "Website & Landing Page" },
  { slug: "digital-ads", label: "Digital Ads" },
  { slug: "packaging", label: "Packaging" },
  { slug: "art-direction", label: "Art Direction" },
] as const satisfies readonly DesignPortfolioCategory[];

export const designPortfolioItems: readonly DesignPortfolioItem[] = [
  {
    slug: "javacafe",
    projectSlug: "javacafe",
    number: "01",
    title: "Javacafe",
    categories: ["brand-identity", "campaign-social", "website-landing-page"],
    summary:
      "Dokumentasi visual untuk konteks kerja Javacafe akan dilengkapi setelah aset desain dan detail kontribusi terverifikasi tersedia.",
    image: {
      src: "/images/project-javacafe-placeholder.svg",
      alt: "Placeholder visual portfolio desain Javacafe",
      caption: "Placeholder development — bukan dokumentasi desain final",
    },
    status: "development",
  },
  {
    slug: "java-tea",
    projectSlug: "java-tea",
    number: "02",
    title: "Java Tea",
    categories: [],
    summary:
      "Koleksi visual Java Tea akan ditambahkan setelah materi desain dan kategorinya tersedia untuk publikasi.",
    image: {
      src: "/images/project-java-tea-placeholder.svg",
      alt: "Placeholder visual portfolio desain Java Tea",
      caption: "Placeholder development — bukan dokumentasi desain final",
    },
    status: "development",
  },
  {
    slug: "new-story",
    projectSlug: "new-story",
    number: "03",
    title: "New Story",
    categories: [],
    summary:
      "Koleksi visual New Story akan ditambahkan setelah materi desain dan kategorinya tersedia untuk publikasi.",
    image: {
      src: "/images/project-new-story-placeholder.svg",
      alt: "Placeholder visual portfolio desain New Story",
      caption: "Placeholder development — bukan dokumentasi desain final",
    },
    status: "development",
  },
];

export function isDesignPortfolioCategorySlug(
  value: string | undefined,
): value is DesignPortfolioCategory["slug"] {
  return designPortfolioCategories.some((category) => category.slug === value);
}

export function getDesignPortfolioCategoryLabel(
  slug: DesignPortfolioCategory["slug"],
) {
  return designPortfolioCategories.find((category) => category.slug === slug)
    ?.label;
}
