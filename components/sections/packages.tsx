import { Container, SectionGrid } from "@/components/layout";
import { ArrowLink, SectionHeader } from "@/components/ui";
import { homepageSections } from "@/data/homepage";
import { packages } from "@/data/packages";

export function Packages() {
  const content = homepageSections.packages;

  return (
    <section
      id="paket"
      aria-labelledby="packages-title"
      className="border-b border-line bg-surface py-section"
    >
      <Container>
        <SectionHeader
          eyebrow={content.eyebrow}
          number={content.number}
          titleId="packages-title"
          title={content.title}
          description={content.description}
        />

        <SectionGrid>
          <div className="col-span-4 md:col-span-8 lg:col-span-10 lg:col-start-3">
            {packages.map((item, index) => (
              <article
                key={item.title}
                className="grid gap-5 border-t border-ink py-7 md:grid-cols-8 md:items-center md:gap-8 md:py-9 lg:grid-cols-10"
              >
                <span className="text-label font-semibold text-accent md:col-span-1">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                <h3 className="text-h3 font-semibold text-ink md:col-span-3 lg:col-span-3">
                  {item.title}
                </h3>
                <div className="md:col-span-2 lg:col-span-4">
                  <p className="font-semibold text-ink">{item.price}</p>
                  <p className="mt-2 text-small text-muted">{item.audience}</p>
                </div>
                <div className="md:col-span-2 lg:col-span-2 lg:text-right">
                  <ArrowLink
                    href="#kontak"
                    aria-label={`Diskusikan paket ${item.title}`}
                    data-analytics-event="package_click"
                    data-analytics-source="homepage_packages"
                    data-analytics-label={item.title}
                  >
                    Diskusikan
                  </ArrowLink>
                </div>
              </article>
            ))}

            <p className="border-t border-line pt-6 text-small font-semibold text-muted">
              Harga dapat menyesuaikan scope dan kebutuhan bisnis.
            </p>
          </div>
        </SectionGrid>
      </Container>
    </section>
  );
}
