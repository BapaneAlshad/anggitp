import { Container, SectionGrid } from "@/components/layout";
import { SectionHeader } from "@/components/ui";
import { homepageSections } from "@/data/homepage";
import { selectedResults } from "@/data/results";

export function SelectedResults() {
  const content = homepageSections.results;

  return (
    <section
      id="selected-results"
      aria-labelledby="selected-results-title"
      className="border-y border-line bg-surface py-section"
    >
      <Container>
        <SectionHeader
          eyebrow={content.eyebrow}
          number={content.number}
          titleId="selected-results-title"
          title={content.title}
          description={content.description}
        />

        <SectionGrid as="ul" className="gap-y-10">
          {selectedResults.map((result) => (
            <li
              key={result.label}
              className="col-span-4 grid grid-cols-[auto_1fr] items-end gap-5 border-t border-ink pt-5 md:col-span-2 md:block lg:col-span-3"
            >
              <p className="font-display text-display font-semibold leading-[0.88] tracking-[-0.06em] text-ink">
                {result.value}
              </p>
              <p className="max-w-none text-right text-h3 font-semibold text-ink md:mt-5 md:max-w-[12ch] md:text-left">
                {result.label}
              </p>
            </li>
          ))}
        </SectionGrid>

        <p className="mt-12 max-w-2xl border-l border-accent pl-5 text-small text-muted md:ml-[12.5%] md:pl-6">
          Konteks angka dapat mencakup kontribusi dalam organisasi, tim, dan
          proses kerja bersama.
        </p>
      </Container>
    </section>
  );
}
