import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Container, EditorialGrid } from "@/components/layout";
import { ServiceDetailSection } from "@/components/services";
import { ButtonLink } from "@/components/ui";
import {
  getService,
  services,
  serviceWorkingProcess,
} from "@/data/services";
import { createPageMetadata } from "@/lib/seo";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

type EditorialListProps = {
  items: readonly string[];
};

function EditorialList({ items }: EditorialListProps) {
  return (
    <ul className="grid gap-x-8 sm:grid-cols-2">
      {items.map((item, index) => (
        <li
          key={item}
          className="flex min-h-20 items-start gap-4 border-t border-line py-5 text-body text-ink"
        >
          <span
            aria-hidden="true"
            className="pt-1 text-label font-semibold text-accent"
          >
            {(index + 1).toString().padStart(2, "0")}
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) return {};

  const title = `${service.title} — Layanan Anggit Prakoso`;

  return createPageMetadata({
    title,
    description: service.description,
    path: `/layanan/${service.slug}`,
  });
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) notFound();

  return (
    <main
      id="konten-utama"
      tabIndex={-1}
      className="min-h-screen focus:outline-none"
    >
      <section className="border-b border-line py-section">
        <Container>
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-3 text-small text-muted">
              <li>
                <Link
                  href="/"
                  className="inline-flex min-h-11 items-center transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  Beranda
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link
                  href="/layanan"
                  className="inline-flex min-h-11 items-center transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  Layanan
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="font-semibold text-ink">
                {service.title}
              </li>
            </ol>
          </nav>

          <EditorialGrid className="mt-10 gap-y-12 border-t border-ink pt-6 lg:mt-14 lg:items-end">
            <div className="col-span-4 md:col-span-2 lg:col-span-3">
              <p className="text-label font-semibold uppercase text-accent">
                Layanan {service.number}
              </p>
              <p className="mt-4 text-label font-semibold uppercase text-muted">
                Marketing, Brand & Digital
              </p>
            </div>

            <div className="col-span-4 md:col-span-6 lg:col-span-8 lg:col-start-5">
              <h1 className="max-w-5xl font-display text-h1 font-semibold text-ink">
                {service.title}
              </h1>
              <p className="mt-7 max-w-3xl text-body-lg text-muted">
                {service.description}
              </p>
              <ButtonLink href="#konsultasi" size="large" className="mt-9">
                Konsultasikan Layanan Ini
              </ButtonLink>
            </div>
          </EditorialGrid>
        </Container>
      </section>

      <section aria-label={`Detail layanan ${service.title}`} className="py-section">
        <Container>
          <ServiceDetailSection
            id="untuk-siapa"
            number="01"
            title="Untuk Siapa"
          >
            <p className="max-w-3xl text-body-lg text-muted">
              {service.audience}
            </p>
          </ServiceDetailSection>

          <ServiceDetailSection
            id="masalah"
            number="02"
            title="Masalah yang Dibantu"
          >
            <EditorialList items={service.problems} />
          </ServiceDetailSection>

          <ServiceDetailSection id="scope" number="03" title="Scope">
            <EditorialList items={service.scope} />
          </ServiceDetailSection>

          <ServiceDetailSection id="output" number="04" title="Output">
            <EditorialList items={service.outputs} />
          </ServiceDetailSection>

          <ServiceDetailSection
            id="cara-kerja"
            number="05"
            title="Cara Kerja"
          >
            <ol className="grid gap-0 md:grid-cols-2">
              {serviceWorkingProcess.map((step) => (
                <li
                  key={step.number}
                  className="flex min-h-56 flex-col border-t border-line py-6 md:min-h-64 md:border-r md:px-6 md:even:border-r-0"
                >
                  <span className="text-label font-semibold text-accent">
                    {step.number}
                  </span>
                  <div className="mt-auto pt-10">
                    <h3 className="text-body-lg font-semibold text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-3 max-w-sm text-small text-muted">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </ServiceDetailSection>
        </Container>
      </section>

      <section
        id="konsultasi"
        aria-labelledby="service-cta-title"
        className="bg-accent py-section text-white"
      >
        <Container>
          <EditorialGrid className="gap-y-9">
            <div className="col-span-4 md:col-span-8 lg:col-span-9">
              <p className="text-label font-semibold uppercase text-white/75">
                CTA Konsultasi
              </p>
              <h2
                id="service-cta-title"
                className="mt-7 max-w-5xl font-display text-h2 font-semibold text-white"
              >
                Ingin membahas {service.title} untuk bisnis Anda?
              </h2>
            </div>
            <div className="col-span-4 md:col-span-6 md:col-start-3 lg:col-span-4 lg:col-start-9">
              <p className="text-body-lg text-white/85">
                Ceritakan kondisi bisnis Anda. Kita tentukan apakah layanan ini
                sesuai dengan prioritas yang perlu dibenahi.
              </p>
              <ButtonLink
                href="/#kontak"
                size="large"
                variant="inverse"
                className="mt-8 w-full focus-visible:outline-white sm:w-auto"
              >
                Mulai Konsultasi
              </ButtonLink>
            </div>
          </EditorialGrid>
        </Container>
      </section>
    </main>
  );
}
