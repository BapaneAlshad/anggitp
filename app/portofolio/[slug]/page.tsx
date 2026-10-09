import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Container, EditorialGrid } from "@/components/layout";
import { CaseStudySectionBlock } from "@/components/portfolio";
import { Badge } from "@/components/ui";
import { getProject, projects } from "@/data/projects";
import { createPageMetadata } from "@/lib/seo";
import type { ProjectCaseStudy } from "@/types/content";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

type SectionDefinition = {
  id: string;
  key: keyof ProjectCaseStudy;
  title: string;
};

const caseStudySections = [
  { id: "overview", key: "overview", title: "Overview" },
  { id: "context", key: "context", title: "Context" },
  { id: "challenge", key: "challenge", title: "Challenge" },
  { id: "my-role", key: "myRole", title: "My Role" },
  { id: "scope", key: "scope", title: "Scope" },
  { id: "approach", key: "approach", title: "Approach" },
  { id: "execution", key: "execution", title: "Execution" },
  { id: "result", key: "result", title: "Result" },
  {
    id: "visual-documentation",
    key: "visualDocumentation",
    title: "Visual Documentation",
  },
  { id: "insight", key: "insight", title: "Insight" },
  { id: "related-work", key: "relatedWork", title: "Related Work" },
] as const satisfies readonly SectionDefinition[];

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return {};

  const title = `${project.name} — Case Study Anggit Prakoso`;

  return createPageMetadata({
    title,
    description: project.summary,
    path: `/portofolio/${project.slug}`,
    type: "article",
    authorName: "Anggit Prakoso",
    category: project.category ?? undefined,
  });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  return (
    <main
      id="konten-utama"
      tabIndex={-1}
      className="min-h-screen focus:outline-none"
    >
      <section className="border-b border-line py-section">
        <Container>
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-3 text-small text-muted">
              <li>
                <Link
                  href="/"
                  className="inline-flex min-h-11 items-center transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  Beranda
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link
                  href="/portofolio"
                  className="inline-flex min-h-11 items-center transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  Portofolio
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="font-semibold text-ink">
                {project.name}
              </li>
            </ol>
          </nav>

          <EditorialGrid className="mt-10 gap-y-12 border-t border-ink pt-6 lg:mt-14 lg:items-end">
            <div className="col-span-4 md:col-span-3 lg:col-span-3">
              <p className="text-label font-semibold uppercase text-accent">
                Case Study {project.number}
              </p>
              <p className="mt-4 text-small font-semibold uppercase text-muted">
                {project.category ?? "TODO — kategori belum terverifikasi"}
              </p>
            </div>

            <div className="col-span-4 md:col-span-5 lg:col-span-8 lg:col-start-5">
              {!project.hasCompleteDetails ? (
                <Badge variant="accent">Dokumentasi bertahap</Badge>
              ) : null}
              <h1 className="mt-7 font-display text-h1 font-semibold uppercase text-ink">
                {project.name}
              </h1>
              <p className="mt-7 max-w-3xl text-body-lg text-muted">
                {project.summary}
              </p>
            </div>
          </EditorialGrid>

          <figure className="mt-14 lg:mt-20">
            <div className="relative aspect-[4/3] overflow-hidden border border-ink bg-surface md:aspect-[16/9]">
              <Image
                fill
                preload
                src={project.image.src}
                alt={project.image.alt}
                sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1439px) calc(100vw - 8vw), 1344px"
                className="object-cover"
              />
            </div>
            <figcaption className="flex flex-col gap-2 border-x border-b border-ink px-4 py-4 text-small text-muted sm:flex-row sm:items-center sm:justify-between">
              <span>Development placeholder</span>
              <span>Bukan dokumentasi proyek final</span>
            </figcaption>
          </figure>
        </Container>
      </section>

      <section aria-label={`Isi case study ${project.name}`} className="py-section">
        <Container>
          <EditorialGrid>
            <aside className="col-span-3 hidden lg:block">
              <nav
                aria-label="Daftar isi case study"
                className="sticky top-28 border-t border-line pt-5"
              >
                <p className="text-label font-semibold uppercase text-muted">
                  Daftar Isi
                </p>
                <ol className="mt-5">
                  {caseStudySections.map((section, index) => (
                    <li key={section.id}>
                      <Link
                        href={`#${section.id}`}
                        className="flex min-h-11 items-center gap-3 text-small text-ink transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                      >
                        <span className="text-label text-accent">
                          {(index + 1).toString().padStart(2, "0")}
                        </span>
                        <span>{section.title}</span>
                      </Link>
                    </li>
                  ))}
                </ol>
              </nav>
            </aside>

            <article className="col-span-4 md:col-span-8 lg:col-span-9">
              {caseStudySections.map((section, index) => (
                <CaseStudySectionBlock
                  key={section.id}
                  id={section.id}
                  number={(index + 1).toString().padStart(2, "0")}
                  title={section.title}
                  content={project.caseStudy[section.key]}
                />
              ))}

              <Link
                href="/portofolio"
                className="mt-8 inline-flex min-h-11 items-center gap-3 border-b border-ink py-2 text-small font-semibold text-ink transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                <span aria-hidden="true">←</span>
                <span>Kembali ke semua portofolio</span>
              </Link>
            </article>
          </EditorialGrid>
        </Container>
      </section>
    </main>
  );
}
