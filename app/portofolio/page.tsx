import Link from "next/link";

import { Container } from "@/components/layout";
import { CaseStudyShowcase } from "@/components/sections/case-study-showcase";
import { projects } from "@/data/projects";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Portofolio & Case Studies — Anggit Prakoso",
  description:
    "Pilihan konteks kerja dan case study Anggit Prakoso di area marketing, branding, business, dan digital growth.",
  path: "/portofolio",
});

export default function PortfolioPage() {
  return (
    <main id="konten-utama" tabIndex={-1} className="focus:outline-none">
      <section className="border-b border-line py-section">
        <Container>
          <div className="border-t border-line pt-5">
            <p className="text-label font-semibold uppercase text-accent">
              Portfolio System — Phase 2
            </p>
          </div>

          <div className="mt-10 grid gap-10 md:grid-cols-8 lg:grid-cols-12 lg:items-end">
            <div className="md:col-span-8 lg:col-span-8">
              <h1 className="font-display text-h1 font-semibold text-ink">
                Project, proses, dan kontribusi yang terdokumentasi.
              </h1>
            </div>
            <div className="md:col-span-6 md:col-start-3 lg:col-span-4 lg:col-start-9">
              <p className="text-body-lg text-muted">
                Informasi terverifikasi ditampilkan sebagai fakta. Bagian yang
                datanya belum tersedia diberi status TODO / Development secara
                eksplisit.
              </p>
              <Link
                href="/#kontak"
                className="mt-8 inline-flex min-h-11 items-center gap-3 border-b border-ink py-2 text-small font-semibold text-ink transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                <span>Diskusikan Project</span>
                <span aria-hidden="true" className="text-accent">
                  →
                </span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="portfolio-list-title" className="py-section">
        <Container>
          <div className="border-t border-line pt-5">
            <p className="text-label font-semibold uppercase text-muted">
              Selected Work
            </p>
            <h2
              id="portfolio-list-title"
              className="mt-8 max-w-4xl font-display text-h2 font-semibold text-ink"
            >
              Tiga konteks kerja awal dalam portfolio.
            </h2>
          </div>

          <div className="mt-14 space-y-section lg:mt-24">
            {projects.map((project, index) => (
              <CaseStudyShowcase
                key={project.slug}
                project={project}
                imageOnLeft={index % 2 === 1}
                headingLevel="h2"
              />
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
