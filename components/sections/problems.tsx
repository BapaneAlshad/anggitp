import { Container, SectionGrid } from "@/components/layout";
import { SectionHeader } from "@/components/ui";
import { homepageSections } from "@/data/homepage";
import { businessProblems } from "@/data/problems";

export function Problems() {
  const content = homepageSections.problems;

  return (
    <section
      id="problems"
      aria-labelledby="problems-title"
      className="py-section"
    >
      <Container>
        <SectionHeader
          number={content.number}
          eyebrow={content.eyebrow}
          titleId="problems-title"
          title={content.title}
          description={content.description}
        />

        <SectionGrid className="gap-y-0">
          <ul className="col-span-4 grid grid-cols-1 md:col-span-8 md:grid-cols-2 lg:col-span-10 lg:col-start-3">
            {businessProblems.map((problem, index) => (
              <li
                key={problem}
                className="border-t border-line py-6 md:px-6 md:py-8 lg:py-10"
              >
                <div className="flex items-start gap-5">
                  <span
                    aria-hidden="true"
                    className="pt-1 text-label font-semibold text-accent"
                  >
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                  <p className="max-w-md text-h3 font-semibold leading-[1.08] text-ink">
                    {problem}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </SectionGrid>
      </Container>
    </section>
  );
}
