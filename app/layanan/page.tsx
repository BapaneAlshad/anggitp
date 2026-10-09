import { Container, EditorialGrid } from "@/components/layout";
import { ArrowLink } from "@/components/ui";
import { services } from "@/data/services";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Layanan Marketing, Branding & Digital — Anggit Prakoso",
  description:
    "Layanan untuk membantu UMKM dan bisnis F&B merapikan brand, marketing, konten, website, dan aktivitas digital.",
  path: "/layanan",
});

export default function ServicesPage() {
  return (
    <main id="konten-utama" tabIndex={-1} className="focus:outline-none">
      <section className="border-b border-line py-section">
        <Container>
          <div className="border-t border-line pt-5">
            <p className="text-label font-semibold uppercase text-accent">
              Services System
            </p>
          </div>

          <EditorialGrid className="mt-10 gap-y-10 lg:items-end">
            <div className="col-span-4 md:col-span-8 lg:col-span-8">
              <h1 className="font-display text-h1 font-semibold text-ink">
                Pilih bantuan berdasarkan bagian bisnis yang paling perlu
                dibenahi.
              </h1>
            </div>
            <div className="col-span-4 md:col-span-6 md:col-start-3 lg:col-span-4 lg:col-start-9">
              <p className="text-body-lg text-muted">
                Mulai dari mencari arah, merapikan brand, menyusun konten,
                membangun website, sampai menjalankan marketing secara rutin.
              </p>
            </div>
          </EditorialGrid>
        </Container>
      </section>

      <section aria-labelledby="services-list-title" className="py-section">
        <Container>
          <div className="border-t border-line pt-5">
            <p className="text-label font-semibold uppercase text-muted">
              Available Services
            </p>
            <h2
              id="services-list-title"
              className="mt-8 max-w-4xl font-display text-h2 font-semibold text-ink"
            >
              Enam bentuk bantuan, disesuaikan dengan kebutuhan bisnis.
            </h2>
          </div>

          <div className="mt-14 lg:mt-20">
            {services.map((service) => (
              <article
                key={service.slug}
                aria-labelledby={`${service.slug}-title`}
                className="border-t border-ink py-9 md:py-12"
              >
                <EditorialGrid className="gap-y-7">
                  <div className="col-span-4 md:col-span-1">
                    <span className="text-label font-semibold text-accent">
                      {service.number}
                    </span>
                  </div>
                  <div className="col-span-4 md:col-span-4 lg:col-span-4">
                    <h2
                      id={`${service.slug}-title`}
                      className="max-w-md text-h3 font-semibold text-ink"
                    >
                      {service.title}
                    </h2>
                    <p className="mt-5 max-w-xl text-body text-muted">
                      {service.description}
                    </p>
                  </div>
                  <div className="col-span-4 md:col-span-3 lg:col-span-4 lg:col-start-7">
                    <p className="text-label font-semibold uppercase text-muted">
                      Scope
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-small text-ink">
                      {service.scope.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-span-4 md:col-span-3 md:col-start-6 lg:col-span-2 lg:col-start-11 lg:flex lg:justify-end">
                    <ArrowLink
                      href={`/layanan/${service.slug}`}
                      aria-label={`Lihat detail layanan ${service.title}`}
                      data-analytics-event="service_click"
                      data-analytics-source="services_index"
                      data-analytics-label={service.slug}
                    >
                      Lihat Detail
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
