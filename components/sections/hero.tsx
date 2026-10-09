import Image from "next/image";

import { Container, EditorialGrid } from "@/components/layout";
import { ButtonLink, ExternalButtonLink } from "@/components/ui";
import { heroContent } from "@/data/hero";
import { getWhatsAppUrl } from "@/lib/contact";

export function Hero() {
  const whatsappUrl = getWhatsAppUrl();

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="overflow-x-clip py-hero lg:min-h-[calc(100svh-5rem)]"
    >
      <Container>
        <div className="border-t border-line pt-4">
          <p className="max-w-2xl text-label font-semibold uppercase text-muted">
            {heroContent.label}
          </p>
        </div>

        <EditorialGrid className="mt-10 gap-y-12 md:mt-14 lg:mt-16 lg:items-end">
          <div className="col-span-4 md:col-span-8 lg:col-span-8">
            <h1
              id="hero-title"
              className="max-w-[17ch] font-display text-[2.25rem] font-semibold leading-[1.02] tracking-[-0.04em] text-ink xs:text-[clamp(2.5rem,5.4vw,5rem)]"
            >
              {heroContent.headline}
            </h1>

            <div className="mt-8 border-l border-accent pl-5 md:ml-[12.5%] md:max-w-2xl md:pl-7 lg:mt-10">
              <p className="text-body-lg text-muted">
                {heroContent.supportingCopy}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {whatsappUrl ? (
                  <ExternalButtonLink
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    size="large"
                    className="w-full sm:w-auto"
                    data-analytics-event="hero_whatsapp_click"
                    data-analytics-source="hero"
                    data-analytics-label="primary_cta"
                    data-analytics-channel="whatsapp"
                  >
                    {heroContent.primaryCta.label}
                  </ExternalButtonLink>
                ) : (
                  <ButtonLink
                    href={heroContent.primaryCta.href}
                    size="large"
                    className="w-full sm:w-auto"
                  >
                    {heroContent.primaryCta.label}
                  </ButtonLink>
                )}
                <ButtonLink
                  href={heroContent.secondaryCta.href}
                  size="large"
                  variant="secondary"
                  className="w-full sm:w-auto"
                >
                  {heroContent.secondaryCta.label}
                </ButtonLink>
              </div>
            </div>
          </div>

          <figure className="relative col-span-4 md:col-span-5 md:col-start-4 lg:col-span-4 lg:col-start-9 lg:row-start-1">
            <div className="relative aspect-[4/5] overflow-hidden border border-ink bg-surface">
              <Image
                fill
                preload
                src={heroContent.profileImage.src}
                alt={heroContent.profileImage.alt}
                sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1023px) 62.5vw, 33vw"
                className="object-cover"
              />
            </div>
            <figcaption className="flex items-center justify-between gap-4 border-x border-b border-ink px-4 py-3 text-label font-semibold uppercase text-muted">
              <span>Foto profil</span>
              <span>Placeholder lokal</span>
            </figcaption>
          </figure>
        </EditorialGrid>
      </Container>
    </section>
  );
}
