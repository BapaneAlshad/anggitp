import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ArticleContent } from "@/components/insights";
import { Container, EditorialGrid } from "@/components/layout";
import { ArrowLink, Badge, ButtonLink } from "@/components/ui";
import { getInsight, getRelatedInsights, insights } from "@/data/insights";
import { createPageMetadata } from "@/lib/seo";

type InsightPageProps = {
  params: Promise<{ slug: string }>;
};

function formatPublishedDate(value: string) {
  return new Intl.DateTimeFormat("id-ID", {
    dateStyle: "long",
    timeZone: "Asia/Jakarta",
  }).format(new Date(`${value}T00:00:00+07:00`));
}

export const dynamicParams = false;

export function generateStaticParams() {
  return insights.map((insight) => ({ slug: insight.slug }));
}

export async function generateMetadata({
  params,
}: InsightPageProps): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsight(slug);

  if (!insight) return {};

  const title = `${insight.title} — Insight Anggit Prakoso`;
  const isPublished =
    insight.status === "published" && insight.publishedAt !== null;

  return createPageMetadata({
    title,
    description: insight.description,
    path: `/insight/${insight.slug}`,
    type: "article",
    noIndex: !isPublished,
    authorName: "Anggit Prakoso",
    category: insight.category,
    publishedTime: isPublished
      ? `${insight.publishedAt}T00:00:00+07:00`
      : undefined,
  });
}

export default async function InsightPage({ params }: InsightPageProps) {
  const { slug } = await params;
  const insight = getInsight(slug);

  if (!insight) notFound();

  const relatedInsights = getRelatedInsights(insight.relatedSlugs);

  return (
    <main
      id="konten-utama"
      tabIndex={-1}
      className="min-h-screen focus:outline-none"
    >
      <section className="border-b border-line py-section">
        <Container>
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-3 text-small text-muted">
              <li>
                <Link
                  href="/"
                  className="inline-flex min-h-11 min-w-11 items-center justify-center transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  Beranda
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link
                  href="/insight"
                  className="inline-flex min-h-11 min-w-11 items-center justify-center transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  Insight
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="font-semibold text-ink">
                {insight.category}
              </li>
            </ol>
          </nav>

          <EditorialGrid className="mt-10 gap-y-10 border-t border-ink pt-6 lg:mt-14">
            <div className="col-span-4 md:col-span-2 lg:col-span-3">
              <p className="text-label font-semibold uppercase text-accent">
                {insight.category}
              </p>
              <div className="mt-4">
                <Badge
                  variant={
                    insight.status === "published" ? "accent" : "neutral"
                  }
                >
                  {insight.status === "published" ? "Terbit" : "Draft"}
                </Badge>
              </div>
            </div>

            <div className="col-span-4 md:col-span-6 lg:col-span-8 lg:col-start-5">
              <h1 className="max-w-5xl font-display text-h1 font-semibold text-ink">
                {insight.title}
              </h1>
              <p className="mt-7 max-w-3xl text-body-lg text-muted">
                {insight.description}
              </p>

              <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-5 border-t border-line pt-5">
                <div>
                  <dt className="text-label font-semibold uppercase text-muted">
                    Diterbitkan
                  </dt>
                  <dd className="mt-2 text-small font-semibold text-ink">
                    {insight.publishedAt
                      ? formatPublishedDate(insight.publishedAt)
                      : "Belum dipublikasikan"}
                  </dd>
                </div>
                {insight.readingTime ? (
                  <div>
                    <dt className="text-label font-semibold uppercase text-muted">
                      Waktu Baca
                    </dt>
                    <dd className="mt-2 text-small font-semibold text-ink">
                      {insight.readingTime}
                    </dd>
                  </div>
                ) : null}
              </dl>
            </div>
          </EditorialGrid>

          <div
            aria-hidden="true"
            className="relative mt-14 aspect-[4/3] min-h-64 overflow-hidden bg-ink p-6 text-canvas sm:aspect-[16/7] sm:p-9 lg:mt-20 lg:p-12"
          >
            <div className="absolute right-0 top-0 size-20 bg-accent sm:size-28 lg:size-36" />
            <div className="flex h-full flex-col justify-between">
              <p className="text-label font-semibold uppercase text-canvas/55">
                Anggit Prakoso / Insight
              </p>
              <p className="max-w-3xl font-display text-h2 font-semibold">
                {insight.category}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <article aria-label={`Artikel ${insight.title}`} className="py-section">
        <Container>
          <EditorialGrid className="gap-y-10">
            <aside className="col-span-4 md:col-span-2 lg:col-span-3">
              <p className="text-label font-semibold uppercase text-muted">
                Isi Artikel
              </p>
              <div className="mt-5 h-px w-full bg-line" />
            </aside>
            <div className="col-span-4 md:col-span-6 lg:col-span-7 lg:col-start-5">
              <ArticleContent blocks={insight.content} />
            </div>
          </EditorialGrid>
        </Container>
      </article>

      {relatedInsights.length > 0 ? (
        <section
          aria-labelledby="related-insight-title"
          className="border-t border-line bg-surface py-section"
        >
          <Container>
            <EditorialGrid className="gap-y-10">
              <div className="col-span-4 md:col-span-3 lg:col-span-4">
                <p className="text-label font-semibold uppercase text-accent">
                  Bacaan Selanjutnya
                </p>
                <h2
                  id="related-insight-title"
                  className="mt-6 font-display text-h2 font-semibold text-ink"
                >
                  Artikel Terkait
                </h2>
              </div>

              <div className="col-span-4 md:col-span-5 lg:col-span-7 lg:col-start-6">
                {relatedInsights.map((related, index) => (
                  <article
                    key={related.slug}
                    className="border-t border-line py-7 first:border-ink"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-label font-semibold uppercase text-accent">
                        {(index + 1).toString().padStart(2, "0")} / {related.category}
                      </p>
                      <Badge
                        variant={
                          related.status === "published" ? "accent" : "neutral"
                        }
                      >
                        {related.status === "draft" ? "Draft" : "Terbit"}
                      </Badge>
                    </div>
                    <h3 className="mt-5 font-display text-h3 font-semibold text-ink">
                      {related.title}
                    </h3>
                    <p className="mt-4 max-w-2xl text-small text-muted">
                      {related.description}
                    </p>
                    <ArrowLink
                      href={`/insight/${related.slug}`}
                      className="mt-6"
                    >
                      {related.status === "published"
                        ? "Baca Artikel"
                        : "Lihat Draft"}
                    </ArrowLink>
                  </article>
                ))}
              </div>
            </EditorialGrid>
          </Container>
        </section>
      ) : null}

      <section
        id="konsultasi"
        aria-labelledby="insight-cta-title"
        className="bg-accent py-section text-white"
      >
        <Container>
          <EditorialGrid className="gap-y-9">
            <div className="col-span-4 md:col-span-8 lg:col-span-8">
              <p className="text-label font-semibold uppercase text-white/75">
                Konsultasi
              </p>
              <h2
                id="insight-cta-title"
                className="mt-7 max-w-5xl font-display text-h2 font-semibold text-white"
              >
                Ingin melihat bagian bisnis mana yang perlu dibenahi lebih
                dahulu?
              </h2>
            </div>
            <div className="col-span-4 md:col-span-6 md:col-start-3 lg:col-span-4 lg:col-start-9">
              <p className="text-body-lg text-white/85">
                Ceritakan kondisi bisnis Anda. Kita petakan prioritas yang
                realistis untuk dijalankan.
              </p>
              <ButtonLink
                href="/#kontak"
                size="large"
                variant="inverse"
                className="mt-8 w-full focus-visible:outline-white sm:w-auto"
              >
                Ceritakan Bisnis Anda
              </ButtonLink>
            </div>
          </EditorialGrid>
        </Container>
      </section>
    </main>
  );
}
