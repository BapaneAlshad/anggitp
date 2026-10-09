import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui";
import { getProject } from "@/data/projects";
import type { CaseStudySection } from "@/types/content";

type CaseStudySectionProps = {
  content: CaseStudySection;
  id: string;
  number: string;
  title: string;
};

export function CaseStudySectionBlock({
  content,
  id,
  number,
  title,
}: CaseStudySectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="grid gap-8 border-t border-ink py-10 md:grid-cols-8 md:gap-10 md:py-14 lg:grid-cols-10 lg:py-16"
    >
      <div className="md:col-span-2">
        <span className="text-label font-semibold text-accent">{number}</span>
      </div>

      <div className="md:col-span-6 lg:col-span-7">
        <h2 id={`${id}-title`} className="text-h3 font-semibold text-ink">
          {title}
        </h2>

        {content.status === "todo" ? (
          <div className="mt-7 border-l border-accent bg-accent-soft/45 px-5 py-6 md:px-7">
            <Badge variant="accent">TODO / Development</Badge>
            <p className="mt-5 max-w-2xl text-body text-ink">
              {content.note}
            </p>
            <p className="mt-3 text-small text-muted">
              Informasi ini belum ditampilkan sebagai fakta publik.
            </p>
          </div>
        ) : (
          <div className="mt-7 space-y-6">
            {content.paragraphs?.map((paragraph) => (
              <p key={paragraph} className="max-w-3xl text-body-lg text-muted">
                {paragraph}
              </p>
            ))}

            {content.items ? (
              <ul className="grid gap-3 sm:grid-cols-2">
                {content.items.map((item) => (
                  <li
                    key={item}
                    className="border-t border-line py-4 text-body font-semibold text-ink"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            ) : null}

            {content.visuals ? (
              <div className="grid gap-6 md:grid-cols-2">
                {content.visuals.map((visual) => (
                  <figure key={visual.src}>
                    <div className="relative aspect-[4/3] overflow-hidden border border-ink bg-surface">
                      <Image
                        fill
                        src={visual.src}
                        alt={visual.alt}
                        sizes="(max-width: 767px) calc(100vw - 40px), 40vw"
                        className="object-cover"
                      />
                    </div>
                    <figcaption className="border-x border-b border-ink px-4 py-3 text-small text-muted">
                      {visual.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            ) : null}

            {content.relatedProjectSlugs ? (
              <ul className="grid gap-4 sm:grid-cols-2">
                {content.relatedProjectSlugs.map((slug) => {
                  const project = getProject(slug);

                  if (!project) return null;

                  return (
                    <li key={project.slug}>
                      <Link
                        href={`/portofolio/${project.slug}`}
                        data-analytics-event="case_study_click"
                        data-analytics-source="related_work"
                        data-analytics-label={project.slug}
                        className="flex min-h-20 items-center justify-between gap-5 border-y border-ink py-4 text-body-lg font-semibold text-ink transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                      >
                        <span>{project.name}</span>
                        <span aria-hidden="true" className="text-accent">
                          →
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            ) : null}
          </div>
        )}
      </div>
    </section>
  );
}
