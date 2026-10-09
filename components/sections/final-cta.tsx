import { Container, EditorialGrid } from "@/components/layout";
import { ExternalButtonLink, buttonStyles } from "@/components/ui";
import { finalCtaContent } from "@/data/homepage";
import { getContactEmailUrl, getWhatsAppUrl } from "@/lib/contact";

export function FinalCta() {
  const whatsappUrl = getWhatsAppUrl();
  const emailUrl = getContactEmailUrl();

  return (
    <section
      id="kontak"
      aria-labelledby="contact-title"
      className="bg-accent py-section text-white"
    >
      <Container>
        <EditorialGrid className="gap-y-10">
          <div className="col-span-4 md:col-span-8 lg:col-span-10">
            <p className="text-label font-semibold uppercase text-white/75">
              {finalCtaContent.number} — {finalCtaContent.eyebrow}
            </p>
            <h2
              id="contact-title"
              className="mt-8 max-w-5xl font-display text-h2 font-semibold text-white"
            >
              {finalCtaContent.title}
            </h2>
          </div>

          <div className="col-span-4 md:col-span-6 md:col-start-3 lg:col-span-5 lg:col-start-8">
            <p className="text-body-lg text-white/85">
              {finalCtaContent.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {whatsappUrl ? (
                <ExternalButtonLink
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${finalCtaContent.primaryCta} melalui WhatsApp — buka di tab baru`}
                  size="large"
                  variant="inverse"
                  data-analytics-event="final_cta_click"
                  data-analytics-source="final_cta"
                  data-analytics-label="primary_cta"
                  data-analytics-channel="whatsapp"
                >
                  {finalCtaContent.primaryCta}
                </ExternalButtonLink>
              ) : (
                <span
                  aria-disabled="true"
                  title="Nomor WhatsApp belum dikonfigurasi"
                  className={buttonStyles({
                    size: "large",
                    variant: "inverse-muted",
                  })}
                >
                  {finalCtaContent.primaryCta}
                </span>
              )}

              {emailUrl ? (
                <ExternalButtonLink
                  href={emailUrl}
                  size="large"
                  variant="inverse-outline"
                  data-analytics-event="final_cta_click,email_click"
                  data-analytics-source="final_cta"
                  data-analytics-label="secondary_cta"
                  data-analytics-channel="email"
                >
                  {finalCtaContent.secondaryCta}
                </ExternalButtonLink>
              ) : null}
            </div>
            {!whatsappUrl ? (
              <p className="mt-4 text-small text-white/75">
                Kanal WhatsApp sedang disiapkan.
              </p>
            ) : null}
          </div>
        </EditorialGrid>
      </Container>
    </section>
  );
}
