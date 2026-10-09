export type SocialLink = {
  label: string;
  href: string;
};

function isHttpUrl(value: string | undefined): value is string {
  if (!value) return false;

  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

const configuredSocialLinks = [
  { label: "Instagram", href: process.env.NEXT_PUBLIC_INSTAGRAM_URL },
  { label: "TikTok", href: process.env.NEXT_PUBLIC_TIKTOK_URL },
  { label: "Facebook", href: process.env.NEXT_PUBLIC_FACEBOOK_URL },
];

export const socialLinks: readonly SocialLink[] = configuredSocialLinks.filter(
  (item): item is SocialLink => isHttpUrl(item.href),
);
