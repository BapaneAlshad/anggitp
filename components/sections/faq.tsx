import { Container, SectionGrid } from "@/components/layout";
import { SectionHeader } from "@/components/ui";
import { faqs } from "@/data/faqs";
import { homepageSections } from "@/data/homepage";

export function Faq() {
  const content = homepageSections.faq;

  return (
    <section id="faq" aria-labelledby="faq-title" className="py-section">
      <Container>
        <SectionHeader
          eyebrow={content.eyebrow}
          number={content.number}
          titleId="faq-title"
          title={content.title}
        />

        <SectionGrid>
          <div className="col-span-4 md:col-span-8 lg:col-span-9 lg:col-start-4">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group border-t border-ink"
              >
                <summary className="flex min-h-20 cursor-pointer list-none items-center gap-5 py-5 text-left focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent [&::-webkit-details-marker]:hidden">
                  <span className="text-label font-semibold text-accent">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                  <span className="flex-1 text-body-lg font-semibold text-ink">
                    {faq.question}
                  </span>
                  <span
                    aria-hidden="true"
                    className="text-2xl text-accent transition-transform duration-200 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <div className="pb-8 pl-10 pr-8 md:pl-14">
                  <p className="max-w-2xl text-body text-muted">{faq.answer}</p>
                </div>
              </details>
            ))}
            <div className="border-t border-ink" />
          </div>
        </SectionGrid>
      </Container>
    </section>
  );
}
