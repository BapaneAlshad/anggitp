import { Container, SectionGrid } from "@/components/layout";
import { ArrowLink, SectionHeader } from "@/components/ui";
import { homepageSections } from "@/data/homepage";
import { services } from "@/data/services";

export function Services() {
  const content = homepageSections.services;

  return (
    <section
      id="layanan"
      aria-labelledby="services-title"
      className="border-b border-line bg-surface py-section"
    >
      <Container>
        <SectionHeader
          eyebrow={content.eyebrow}
          number={content.number}
          titleId="services-title"
          title={content.title}
          description={content.description}
        />

        <SectionGrid>
          <div className="col-span-4 md:col-span-8 lg:col-span-10 lg:col-start-3">
            {services.map((service) => (
              <article
                key={service.number}
                className="grid gap-7 border-t border-ink py-8 md:grid-cols-8 md:gap-8 md:py-10 lg:grid-cols-10 lg:py-12"
              >
                <div className="md:col-span-1">
                  <span className="text-label font-semibold text-accent">
                    {service.number}
                  </span>
                </div>
                <div className="md:col-span-3 lg:col-span-3">
                  <h3 className="max-w-sm text-h3 font-semibold text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-5 max-w-xl text-body text-muted">
                    {service.description}
                  </p>
                </div>
                <div className="md:col-span-2 lg:col-span-4">
                  <p className="text-label font-semibold uppercase text-muted">
                    Scope singkat
                  </p>
                  <ul className="mt-4 space-y-2 text-small text-ink">
                    {service.scope.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span aria-hidden="true" className="text-accent">
                          —
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="md:col-span-2 lg:col-span-2 lg:flex lg:justify-end">
                  <ArrowLink
                    href={`/layanan/${service.slug}`}
                    aria-label={`Lihat detail layanan ${service.title}`}
                    data-analytics-event="service_click"
                    data-analytics-source="homepage_services"
                    data-analytics-label={service.slug}
                  >
                    Lihat Detail
                  </ArrowLink>
                </div>
              </article>
            ))}
          </div>
        </SectionGrid>
      </Container>
    </section>
  );
}
