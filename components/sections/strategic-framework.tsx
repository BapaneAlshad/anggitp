import { Container, SectionGrid } from "@/components/layout";
import { SectionHeader } from "@/components/ui";
import { homepageSections } from "@/data/homepage";
import { strategicFramework } from "@/data/strategic-framework";
import { cn } from "@/lib/utils";

export function StrategicFramework() {
  const content = homepageSections.framework;

  return (
    <section
      id="strategic-framework"
      aria-labelledby="strategic-framework-title"
      className="border-b border-line py-section"
    >
      <Container>
        <SectionHeader
          eyebrow={content.eyebrow}
          number={content.number}
          titleId="strategic-framework-title"
          title={content.title}
          description={content.description}
        />

        <SectionGrid>
          <div className="col-span-4 md:col-span-8 md:col-start-1 lg:col-span-11 lg:col-start-2">
            <ol className="flex flex-col border-t border-ink lg:flex-row lg:items-stretch">
              {strategicFramework.map((step, index) => (
                <li
                  key={step}
                  className="flex min-w-0 flex-col lg:flex-1 lg:flex-row"
                >
                  <div
                    className={cn(
                      "group flex min-h-28 min-w-0 flex-1 basis-0 flex-col justify-between border-b border-ink py-5 transition-colors duration-200 hover:bg-accent-soft lg:min-h-52 lg:border-b-0 lg:border-r lg:px-5 lg:hover:bg-accent-soft",
                      index === 0 && "lg:pl-0",
                      index === strategicFramework.length - 1 &&
                        "lg:border-r-0 lg:pr-0",
                    )}
                  >
                    <span className="text-label font-semibold text-accent">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>
                    <span className="mt-8 break-words font-display text-body-lg font-semibold tracking-[-0.025em] text-ink transition-colors duration-200 group-hover:text-accent xl:text-h3">
                      {step}
                    </span>
                  </div>
                  {index < strategicFramework.length - 1 ? (
                    <span
                      aria-hidden="true"
                      className="flex h-10 shrink-0 items-center justify-start border-b border-ink pl-5 text-2xl text-accent lg:h-auto lg:w-9 lg:justify-center lg:border-b-0 lg:pl-0"
                    >
                      <span className="rotate-90 lg:rotate-0">→</span>
                    </span>
                  ) : null}
                </li>
              ))}
            </ol>

            <p className="mt-8 max-w-xl border-l border-accent pl-5 text-small text-muted md:ml-[12.5%] md:pl-6">
              Dari memahami bisnis sampai menentukan promosi, setiap langkah
              membantu menjaga strategi tetap terhubung dengan kebutuhan nyata.
            </p>
          </div>
        </SectionGrid>
      </Container>
    </section>
  );
}
