import Image from "next/image";

import { EditorialGrid } from "@/components/layout";
import { ArrowLink, Badge } from "@/components/ui";
import { cn } from "@/lib/utils";
import type { Project } from "@/types/content";

type CaseStudyShowcaseProps = {
  project: Project;
  imageOnLeft: boolean;
  headingLevel?: "h2" | "h3";
};

export function CaseStudyShowcase({
  project,
  imageOnLeft,
  headingLevel = "h3",
}: CaseStudyShowcaseProps) {
  const Heading = headingLevel;

  return (
    <article aria-labelledby={`${project.slug}-title`}>
      <EditorialGrid className="gap-y-8 lg:items-stretch">
        <div
          className={cn(
            "order-last col-span-4 flex flex-col border-t border-ink pt-5 md:col-span-4 lg:order-none lg:col-span-5",
            imageOnLeft ? "lg:col-start-8" : "lg:col-start-1",
          )}
        >
          <div className="flex items-start justify-between gap-6">
            <span className="text-label font-semibold text-accent">
              PROJECT {project.number}
            </span>
            {!project.hasCompleteDetails ? (
              <Badge>Detail bertahap</Badge>
            ) : null}
          </div>

          <Heading
            id={`${project.slug}-title`}
            className="mt-10 font-display text-h1 font-semibold uppercase text-ink"
          >
            {project.name}
          </Heading>
          <p className="mt-4 text-small font-semibold uppercase text-muted">
            {project.category ?? "TODO — kategori belum terverifikasi"}
          </p>

          <dl className="mt-10 space-y-6 border-t border-line pt-6">
            <div className="grid gap-2 sm:grid-cols-[7rem_1fr]">
              <dt className="text-label font-semibold uppercase text-muted">Role</dt>
              <dd className="text-small text-ink">
                {project.role ?? "TODO — peran belum terverifikasi"}
              </dd>
            </div>
            <div className="grid gap-2 sm:grid-cols-[7rem_1fr]">
              <dt className="text-label font-semibold uppercase text-muted">Scope</dt>
              <dd>
                <ul className="flex flex-wrap gap-x-4 gap-y-1 text-small text-ink">
                  {project.scope.length > 0 ? (
                    project.scope.map((scope) => (
                      <li key={scope}>{scope}</li>
                    ))
                  ) : (
                    <li>TODO — scope belum terverifikasi</li>
                  )}
                </ul>
              </dd>
            </div>
          </dl>

          <p className="mt-8 text-body-lg text-ink">{project.summary}</p>
          <p className="mt-5 max-w-xl border-l border-accent pl-5 text-small text-muted">
            {project.result}
          </p>

          <div className="mt-10 lg:mt-auto lg:pt-12">
            <ArrowLink
              href={`/portofolio/${project.slug}`}
              data-analytics-event="case_study_click"
              data-analytics-source="case_study_showcase"
              data-analytics-label={project.slug}
            >
              Lihat Case Study {project.name}
            </ArrowLink>
          </div>
        </div>

        <div
          className={cn(
            "order-first col-span-4 md:col-span-8 lg:order-none lg:col-span-6",
            imageOnLeft
              ? "lg:col-start-1 lg:row-start-1"
              : "lg:col-start-7 lg:row-start-1",
          )}
        >
          <div className="relative aspect-[4/3] overflow-hidden border border-ink bg-surface">
            <Image
              fill
              src={project.image.src}
              alt={project.image.alt}
              sizes="(max-width: 1023px) calc(100vw - 40px), 50vw"
              className="object-cover transition-transform duration-500 hover:scale-[1.015]"
            />
          </div>
        </div>
      </EditorialGrid>
    </article>
  );
}
