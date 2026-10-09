import Link from "next/link";

import { navigationItems } from "@/data/navigation";
import { socialLinks } from "@/data/social";
import {
  getContactEmailUrl,
  getPublicContactEmail,
  getWhatsAppUrl,
} from "@/lib/contact";

import { Container } from "./container";
import { EditorialGrid } from "./editorial-grid";

const footerLinkClasses =
  "inline-flex min-h-11 min-w-11 items-center text-canvas transition-colors hover:text-accent-soft focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-soft";

function FooterNavigation() {
  return (
    <nav
      aria-label="Navigasi footer"
      className="col-span-4 md:col-span-2 lg:col-span-2 lg:col-start-7"
    >
      <p className="text-label font-semibold uppercase text-canvas/50">
        Navigasi
      </p>
      <ul className="mt-5 text-small">
        {navigationItems.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className={footerLinkClasses}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function FooterContact() {
  const whatsappUrl = getWhatsAppUrl();
  const emailUrl = getContactEmailUrl();
  const email = getPublicContactEmail();
  const hasContactChannel = Boolean(
    whatsappUrl || emailUrl || socialLinks.length > 0,
  );

  return (
    <div className="col-span-4 md:col-span-2 lg:col-span-3 lg:col-start-10">
      <p className="text-label font-semibold uppercase text-canvas/50">
        Kontak
      </p>
      {hasContactChannel ? (
        <ul className="mt-5 text-small">
          {whatsappUrl ? (
            <li>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp — buka di tab baru"
                className={footerLinkClasses}
              >
                WhatsApp
              </a>
            </li>
          ) : null}
          {emailUrl ? (
            <li>
              <a
                href={emailUrl}
                data-analytics-event="email_click"
                data-analytics-source="footer"
                data-analytics-label="contact_email"
                data-analytics-channel="email"
                className={`${footerLinkClasses} break-all`}
              >
                {email}
              </a>
            </li>
          ) : null}
          {socialLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`${link.label} — buka di tab baru`}
                data-analytics-event="social_click"
                data-analytics-source="footer"
                data-analytics-label={link.label.toLowerCase()}
                data-analytics-channel="social"
                className={footerLinkClasses}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-5 text-small text-canvas/50">
          Kanal kontak belum dikonfigurasi.
        </p>
      )}
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-ink bg-ink py-12 text-canvas lg:py-16">
      <Container>
        <EditorialGrid className="gap-y-12">
          <div className="col-span-4 md:col-span-4 lg:col-span-5">
            <Link
              href="/#top"
              className={`inline-block font-display text-h3 font-semibold ${footerLinkClasses}`}
            >
              Anggit Prakoso
            </Link>
            <p className="mt-4 max-w-md text-small text-canvas/65">
              Marketing, Branding, Business & Digital Growth Partner untuk UMKM
              dan bisnis F&B.
            </p>
          </div>

          <FooterNavigation />
          <FooterContact />
        </EditorialGrid>

        <div className="mt-14 flex flex-col gap-3 border-t border-canvas/20 pt-6 text-label uppercase text-canvas/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Anggit Prakoso</p>
          <p>Built with clarity and purpose.</p>
        </div>
      </Container>
    </footer>
  );
}
