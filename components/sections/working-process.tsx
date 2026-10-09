import { Container, SectionGrid } from "@/components/layout";
import { SectionHeader } from "@/components/ui";
import { homepageSections } from "@/data/homepage";
import { workingProcess } from "@/data/process";

export function WorkingProcess() {
  const content = homepageSections.process;

  return (
    <section
      id="proses"
      aria-labelledby="process-title"
      className="border-b border-line py-section"
    >
      <Container>
        <SectionHeader
          eyebrow={content.eyebrow}
          number={content.number}
          titleId="process-title"
          title={content.title}
        />

        <SectionGrid>
          <ol className="col-span-4 grid md:col-span-8 md:grid-cols-2 lg:col-span-12 lg:grid-cols-4">
            {workingProcess.map((step, index) => (
              <li
                key={step.number}
                className="relative flex min-h-64 flex-col border-t border-ink py-6 md:min-h-72 md:border-r md:px-6 md:last:border-r-0 lg:min-h-80 lg:px-8 lg:first:pl-0 lg:last:pr-0"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-label font-semibold text-accent">
                    {step.number}
                  </span>
                  {index < workingProcess.length - 1 ? (
                    <span aria-hidden="true" className="text-xl text-accent">
                      →
                    </span>
                  ) : null}
                </div>
                <div className="mt-auto pt-14">
                  <h3 className="text-h3 font-semibold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-4 max-w-xs text-small text-muted">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </SectionGrid>
      </Container>
    </section>
  );
}
