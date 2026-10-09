import { getWhatsAppUrl } from "@/lib/contact";

export function FloatingWhatsApp() {
  const whatsappUrl = getWhatsAppUrl();

  if (!whatsappUrl) return null;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Hubungi Anggit melalui WhatsApp — buka di tab baru"
      className="fixed bottom-4 right-4 z-40 inline-flex min-h-12 items-center gap-3 border border-ink bg-accent px-4 py-3 text-label font-semibold uppercase text-white shadow-[4px_4px_0_#171717] transition-transform hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink md:bottom-6 md:right-6"
    >
      <span aria-hidden="true">↗</span>
      <span>WhatsApp</span>
    </a>
  );
}
