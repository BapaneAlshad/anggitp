import { Container, SectionGrid } from "@/components/layout";
import { ArrowLink, Badge, SectionHeader } from "@/components/ui";
import { homepageSections } from "@/data/homepage";
import { insights } from "@/data/insights";

export function InsightPreview() {
  const content = homepageSections.insight;

  return (
    <section
      id="insight"
      aria-labelledby="insight-title"
      className="border-b border-line bg-surface py-section"
    >
      <Container>
        <SectionHeader
          eyebrow={content.eyebrow}
          number={content.number}
          titleId="insight-title"
          title={content.title}
          description={content.description}
        />

        <SectionGrid className="gap-y-10">
          {insights.map((insight, index) => (
            <article
              key={insight.slug}
              className="col-span-4 flex min-h-96 flex-col border-t border-ink pt-5 md:col-span-4 lg:col-span-4"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-label font-semibold text-accent">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                <Badge variant={insight.status === "published" ? "accent" : "neutral"}>
                  {insight.status === "published" ? "Terbit" : "Draft"}
                </Badge>
              </div>
              <p className="mt-10 text-label font-semibold uppercase text-muted">
                {insight.category}
              </p>
              <h3 className="mt-4 text-h3 font-semibold text-ink">
                {insight.title}
              </h3>
              <p className="mt-6 text-small text-muted">
                {insight.description}
              </p>
              <div className="mt-auto pt-10">
                <ArrowLink href={`/insight/${insight.slug}`}>
                  {insight.status === "published"
                    ? "Baca Artikel"
                    : "Lihat Draft Artikel"}
                </ArrowLink>
              </div>
            </article>
          ))}
        </SectionGrid>

        <div className="mt-12 border-t border-line pt-6">
          <ArrowLink href="/insight">Lihat Semua Insight</ArrowLink>
        </div>
      </Container>
    </section>
  );
}
