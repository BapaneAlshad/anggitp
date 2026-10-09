import { Container, EditorialGrid } from "@/components/layout";
import { ArrowLink, Badge } from "@/components/ui";
import {
  getInsightsByCategory,
  insightCategories,
  insights,
} from "@/data/insights";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Insight Marketing, Branding & Business — Anggit Prakoso",
  description:
    "Catatan praktis Anggit Prakoso tentang marketing, branding, business, F&B, website, dan digital ads untuk UMKM.",
  path: "/insight",
});

export default function InsightIndexPage() {
  return (
    <main id="konten-utama" tabIndex={-1} className="focus:outline-none">
      <section className="border-b border-line py-section">
        <Container>
          <div className="border-t border-line pt-5">
            <p className="text-label font-semibold uppercase text-accent">
              Insight System
            </p>
          </div>

          <EditorialGrid className="mt-10 gap-y-10 lg:items-end">
            <div className="col-span-4 md:col-span-8 lg:col-span-8">
              <h1 className="max-w-6xl font-display text-h1 font-semibold text-ink">
                Catatan praktis untuk melihat bisnis, marketing, brand, dan
                digital dengan lebih jelas.
              </h1>
            </div>
            <div className="col-span-4 md:col-span-6 md:col-start-3 lg:col-span-4 lg:col-start-9">
              <p className="text-body-lg text-muted">
                Pembahasan disusun agar tetap strategis, realistis, dan mudah
                dipahami oleh pemilik UMKM maupun bisnis F&amp;B.
              </p>
            </div>
          </EditorialGrid>
        </Container>
      </section>

      <section
        aria-labelledby="insight-category-title"
        className="border-b border-line bg-surface py-section"
      >
        <Container>
          <EditorialGrid className="gap-y-10">
            <div className="col-span-4 md:col-span-3 lg:col-span-4">
              <p className="text-label font-semibold uppercase text-accent">
                Directory
              </p>
              <h2
                id="insight-category-title"
                className="mt-6 font-display text-h2 font-semibold text-ink"
              >
                Kategori Insight
              </h2>
            </div>

            <ul className="col-span-4 md:col-span-5 lg:col-span-7 lg:col-start-6">
              {insightCategories.map((category, index) => {
                const count = getInsightsByCategory(category).length;

                return (
                  <li
                    key={category}
                    className="grid min-h-20 grid-cols-[2.5rem_1fr_auto] items-center gap-3 border-t border-line py-4"
                  >
                    <span className="text-label font-semibold text-accent">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>
                    <span className="text-body-lg font-semibold text-ink">
                      {category}
                    </span>
                    <span className="text-label uppercase text-muted">
                      {count > 0 ? `${count} artikel` : "Belum ada"}
                    </span>
                  </li>
                );
              })}
            </ul>
          </EditorialGrid>
        </Container>
      </section>

      <section aria-labelledby="insight-list-title" className="py-section">
        <Container>
          <div className="border-t border-ink pt-5">
            <p className="text-label font-semibold uppercase text-muted">
              Artikel
            </p>
            <h2
              id="insight-list-title"
              className="mt-7 max-w-4xl font-display text-h2 font-semibold text-ink"
            >
              Catatan yang sedang dikembangkan.
            </h2>
          </div>

          <div className="mt-14 lg:mt-20">
            {insights.map((insight, index) => (
              <article
                key={insight.slug}
                className="border-t border-line py-8 first:border-ink lg:py-12"
              >
                <EditorialGrid className="gap-y-7">
                  <div className="col-span-4 flex items-start justify-between gap-4 md:col-span-2 lg:col-span-2">
                    <span className="text-label font-semibold text-accent">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>
                    <Badge
                      variant={
                        insight.status === "published" ? "accent" : "neutral"
                      }
                    >
                      {insight.status === "published" ? "Terbit" : "Draft"}
                    </Badge>
                  </div>

                  <div className="col-span-4 md:col-span-6 lg:col-span-7 lg:col-start-4">
                    <p className="text-label font-semibold uppercase text-muted">
                      {insight.category}
                    </p>
                    <h3 className="mt-4 max-w-4xl font-display text-h3 font-semibold text-ink">
                      {insight.title}
                    </h3>
                    <p className="mt-5 max-w-3xl text-body text-muted">
                      {insight.description}
                    </p>
                  </div>

                  <div className="col-span-4 md:col-span-6 md:col-start-3 lg:col-span-2 lg:col-start-11">
                    <p className="text-label uppercase text-muted">
                      {insight.publishedAt
                        ? new Intl.DateTimeFormat("id-ID", {
                            dateStyle: "long",
                            timeZone: "Asia/Jakarta",
                          }).format(
                            new Date(`${insight.publishedAt}T00:00:00+07:00`),
                          )
                        : "Belum dipublikasikan"}
                    </p>
                    {insight.readingTime ? (
                      <p className="mt-2 text-label uppercase text-muted">
                        {insight.readingTime}
                      </p>
                    ) : null}
                    <ArrowLink
                      href={`/insight/${insight.slug}`}
                      className="mt-6"
                    >
                      {insight.status === "published"
                        ? "Baca Artikel"
                        : "Lihat Draft"}
                    </ArrowLink>
                  </div>
                </EditorialGrid>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
