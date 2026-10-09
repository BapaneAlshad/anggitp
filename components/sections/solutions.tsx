import { Container, SectionGrid } from "@/components/layout";
import { SectionHeader } from "@/components/ui";
import { homepageSections } from "@/data/homepage";
import { solutionPillars } from "@/data/solutions";

export function Solutions() {
  const content = homepageSections.solutions;

  return (
    <section
      id="solutions"
      aria-labelledby="solutions-title"
      className="border-y border-line bg-surface py-section"
    >
      <Container>
        <SectionHeader
          number={content.number}
          eyebrow={content.eyebrow}
          titleId="solutions-title"
          title={content.title}
          description={content.description}
        />

        <SectionGrid className="gap-y-0">
          <div className="col-span-4 md:col-span-8 md:col-start-2 lg:col-span-10 lg:col-start-3">
            {solutionPillars.map((pillar, index) => (
              <article
                key={pillar.name}
                className="grid gap-6 border-t border-ink py-8 md:grid-cols-8 md:gap-8 md:py-10 lg:grid-cols-10 lg:py-12"
              >
                <div className="flex flex-wrap items-center gap-4 md:col-span-2 lg:col-span-2">
                  <span
                    aria-hidden="true"
                    className="text-label font-semibold text-accent"
                  >
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                  <h3 className="text-h3 font-semibold text-ink">
                    {pillar.name}
                  </h3>
                </div>
                <p className="max-w-2xl text-body-lg text-muted md:col-span-6 lg:col-span-7 lg:col-start-4">
                  {pillar.description}
                </p>
              </article>
            ))}
          </div>
        </SectionGrid>
      </Container>
    </section>
  );
}
