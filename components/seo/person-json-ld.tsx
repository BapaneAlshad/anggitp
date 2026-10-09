import { profile } from "@/data/profile";
import { socialLinks } from "@/data/social";
import { absoluteUrl } from "@/lib/seo";

export function PersonJsonLd() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": absoluteUrl("/#person"),
    name: profile.name,
    url: absoluteUrl("/"),
    jobTitle: profile.role,
    description: profile.positioning,
    knowsAbout: profile.expertise,
    ...(socialLinks.length > 0
      ? { sameAs: socialLinks.map((link) => link.href) }
      : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(person).replace(/</g, "\\u003c"),
      }}
    />
  );
}
