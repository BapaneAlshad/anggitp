import Image from "next/image";

import { ArrowLink, Badge } from "@/components/ui";
import {
  getDesignPortfolioCategoryLabel,
} from "@/data/design-portfolio";
import { cn } from "@/lib/utils";
import type { DesignPortfolioItem } from "@/types/content";

type DesignPortfolioGridProps = {
  items: readonly DesignPortfolioItem[];
};

export function DesignPortfolioGrid({ items }: DesignPortfolioGridProps) {
  if (items.length === 0) {
    return (
      <div className="border-y border-ink py-14 text-body-lg text-muted">
        Belum ada karya terverifikasi untuk kategori ini. Materi visual akan
        ditambahkan setelah aset desain tersedia.
      </div>
    );
  }

  return (
    <div className="grid gap-x-gutter gap-y-16 md:grid-cols-8 lg:grid-cols-12 lg:gap-y-24">
      {items.map((item, index) => {
        const isWide = index % 3 === 0;
        const categoryLabels = item.categories.flatMap((category) => {
          const label = getDesignPortfolioCategoryLabel(category);
          return label ? [label] : [];
        });

        return (
          <article
            key={item.slug}
            aria-labelledby={`${item.slug}-design-title`}
            className={cn(
              "group col-span-4 md:col-span-4",
              isWide
                ? "lg:col-span-7"
                : index % 3 === 1
                  ? "lg:col-span-5 lg:mt-24"
                  : "lg:col-span-6 lg:col-start-4",
            )}
          >
            <div
              className={cn(
                "relative overflow-hidden border border-ink bg-surface",
                isWide ? "aspect-[4/3]" : "aspect-[4/5]",
              )}
            >
              <Image
                fill
                src={item.image.src}
                alt={item.image.alt}
                sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1023px) 50vw, 58vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.015]"
              />
            </div>

            <div className="border-x border-b border-ink px-4 py-5 sm:px-6 sm:py-6">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <span className="text-label font-semibold uppercase text-accent">
                  Project {item.number}
                </span>
                {item.status === "development" ? (
                  <Badge>Dokumentasi bertahap</Badge>
                ) : null}
              </div>

              <h2
                id={`${item.slug}-design-title`}
                className="mt-8 font-display text-h2 font-semibold text-ink"
              >
                {item.title}
              </h2>

              <div className="mt-6 border-t border-line pt-5">
                <p className="text-label font-semibold uppercase text-muted">
                  Kategori desain
                </p>
                <p className="mt-2 text-small text-ink">
                  {categoryLabels.length > 0
                    ? categoryLabels.join(" · ")
                    : "TODO — kategori desain belum tersedia"}
                </p>
              </div>

              <p className="mt-6 max-w-2xl text-body text-muted">
                {item.summary}
              </p>

              <p className="mt-5 border-l border-accent pl-4 text-small text-muted">
                {item.image.caption}
              </p>

              <ArrowLink
                href={`/portofolio/${item.projectSlug}`}
                className="mt-8"
                data-analytics-event="case_study_click"
                data-analytics-source="design_portfolio"
                data-analytics-label={item.projectSlug}
              >
                Lihat case study
              </ArrowLink>
            </div>
          </article>
        );
      })}
    </div>
  );
}
