import Image from "next/image";

import { Container, SectionGrid } from "@/components/layout";
import { Badge, SectionHeader } from "@/components/ui";
import { homepageSections } from "@/data/homepage";
import { profile } from "@/data/profile";

export function About() {
  const content = homepageSections.about;

  return (
    <section
      id="tentang"
      aria-labelledby="about-title"
      className="border-b border-line bg-surface py-section"
    >
      <Container>
        <SectionHeader
          eyebrow={content.eyebrow}
          number={content.number}
          titleId="about-title"
          title={content.title}
          description={profile.positioning}
        />

        <SectionGrid className="gap-y-12 lg:items-start">
          <figure className="col-span-4 md:col-span-4 lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden border border-ink bg-canvas">
              <Image
                fill
                src={profile.image.src}
                alt={profile.image.alt}
                sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1023px) 50vw, 40vw"
                className="object-cover"
              />
            </div>
            <figcaption className="flex items-center justify-between gap-4 border-x border-b border-ink px-4 py-3 text-label font-semibold uppercase text-muted">
              <span>Foto personal</span>
              <span>Placeholder lokal</span>
            </figcaption>
          </figure>

          <div className="col-span-4 md:col-span-4 lg:col-span-6 lg:col-start-7">
            <p className="text-label font-semibold uppercase text-accent">
              {profile.role}
            </p>
            <p className="mt-6 max-w-2xl text-h3 font-semibold text-ink">
              {profile.experience}
            </p>

            <div className="mt-10 border-l border-accent pl-5 md:pl-7">
              <p className="text-body-lg text-muted">{profile.thinking}</p>
            </div>

            <div className="mt-12 border-t border-line pt-6">
              <p className="text-label font-semibold uppercase text-muted">
                Area expertise
              </p>
              <ul className="mt-5 flex flex-wrap gap-2" aria-label="Area expertise">
                {profile.expertise.map((item) => (
                  <li key={item}>
                    <Badge variant="outline">{item}</Badge>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </SectionGrid>
      </Container>
    </section>
  );
}
