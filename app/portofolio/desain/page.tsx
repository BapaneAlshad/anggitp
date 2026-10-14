import Link from "next/link";

import { Container } from "@/components/layout";
import { DesignPortfolioGrid } from "@/components/portfolio";
import { ButtonLink, SectionNumber } from "@/components/ui";
import {
  designPortfolioCategories,
  designPortfolioItems,
  isDesignPortfolioCategorySlug,
} from "@/data/design-portfolio";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Portfolio Desain — Anggit Prakoso",
  description:
    "Kumpulan karya desain dalam konteks brand, marketing, campaign, website, dan digital growth Anggit Prakoso.",
  path: "/portofolio/desain",
});

type DesignPortfolioPageProps = {
  searchParams: Promise<{ kategori?: string }>;
};

export default async function DesignPortfolioPage({
  searchParams,
}: DesignPortfolioPageProps) {
  const { kategori } = await searchParams;
  const activeCategory = isDesignPortfolioCategorySlug(kategori)
    ? kategori
    : null;
  const activeCategoryLabel = activeCategory
    ? designPortfolioCategories.find(
        (category) => category.slug === activeCategory,
      )?.label
    : "Semua karya";
  const filteredItems = activeCategory
    ? designPortfolioItems.filter((item) =>
        item.categories.includes(activeCategory),
      )
    : designPortfolioItems;

  return (
    <main id="konten-utama" tabIndex={-1} className="focus:outline-none">
      <section className="border-b border-line py-section">
        <Container>
          <div className="border-t border-line pt-5">
            <p className="text-label font-semibold uppercase text-accent">
              Portfolio Desain — Visual Archive
            </p>
          </div>

          <div className="mt-10 grid gap-10 md:grid-cols-8 lg:grid-cols-12 lg:items-end">
            <div className="md:col-span-8 lg:col-span-8">
              <h1 className="max-w-5xl font-display text-h1 font-semibold text-ink">
                Kumpulan karya desain dalam konteks brand, marketing, dan digital.
              </h1>
            </div>
            <div className="md:col-span-6 md:col-start-3 lg:col-span-4 lg:col-start-9">
              <p className="text-body-lg text-muted">
                Halaman ini disiapkan sebagai visual archive dengan kategori yang
                mudah ditelusuri. Aset desain final akan ditambahkan setelah
                materi dan detail kontribusi siap dipublikasikan.
              </p>
              <ButtonLink href="/#kontak" className="mt-8">
                Diskusikan project
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <section
        aria-labelledby="design-portfolio-list-title"
        className="py-section"
      >
        <Container>
          <div className="border-t border-line pt-5">
            <div className="flex flex-wrap items-start justify-between gap-6">
              <div>
                <SectionNumber value="01" />
                <p className="mt-5 text-label font-semibold uppercase text-muted">
                  Browse by category
                </p>
              </div>
              <p className="max-w-sm text-small text-muted">
                {activeCategoryLabel} · {filteredItems.length} project
                {filteredItems.length === 1 ? "" : "s"}
              </p>
            </div>

            <h2
              id="design-portfolio-list-title"
              className="mt-8 max-w-4xl font-display text-h2 font-semibold text-ink"
            >
              Pilih area desain untuk melihat koleksi yang relevan.
            </h2>

            <nav
              aria-label="Filter kategori portfolio desain"
              className="mt-10 flex flex-wrap gap-2 border-y border-line py-4"
            >
              <Link
                href="/portofolio/desain"
                aria-current={activeCategory === null ? "page" : undefined}
                className={`inline-flex min-h-11 items-center border px-4 py-2 text-small font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${
                  activeCategory === null
                    ? "border-ink bg-ink text-canvas"
                    : "border-line text-ink hover:border-ink"
                }`}
              >
                Semua karya
              </Link>
              {designPortfolioCategories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/portofolio/desain?kategori=${category.slug}`}
                  aria-current={
                    activeCategory === category.slug ? "page" : undefined
                  }
                  className={`inline-flex min-h-11 items-center border px-4 py-2 text-small font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${
                    activeCategory === category.slug
                      ? "border-ink bg-ink text-canvas"
                      : "border-line text-ink hover:border-ink"
                  }`}
                >
                  {category.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="mt-14 lg:mt-20">
            <DesignPortfolioGrid items={filteredItems} />
          </div>
        </Container>
      </section>
    </main>
  );
}
