export const whatsappMessage = `Halo Mas Anggit, saya ingin konsultasi mengenai bisnis saya.

Nama:
Nama bisnis:
Jenis bisnis:
Lokasi bisnis:
Instagram / website:
Masalah atau kebutuhan utama:`;

function normalizeWhatsAppNumber(value: string | undefined) {
  if (!value) return null;

  const digits = value.replace(/\D/g, "");
  return /^\d{8,15}$/.test(digits) ? digits : null;
}

export function getWhatsAppUrl(message = whatsappMessage) {
  const number = normalizeWhatsAppNumber(
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER,
  );

  if (!number) return null;

  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function getContactEmailUrl() {
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return null;

  return `mailto:${email}`;
}

export function getPublicContactEmail() {
  return process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || null;
}
