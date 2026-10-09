import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

import { SectionNumber } from "./section-number";

type HeadingLevel = "h1" | "h2" | "h3";

type SectionHeaderProps = ComponentPropsWithoutRef<"header"> & {
  description?: string;
  eyebrow?: string;
  headingLevel?: HeadingLevel;
  layout?: "stacked" | "split";
  number?: number | string;
  titleId?: string;
  title: string;
};

const headingClasses: Record<HeadingLevel, string> = {
  h1: "text-h1",
  h2: "text-h2",
  h3: "text-h3",
};

export function SectionHeader({
  className,
  description,
  eyebrow,
  headingLevel = "h2",
  layout = "split",
  number,
  titleId,
  title,
  ...props
}: SectionHeaderProps) {
  const Heading = headingLevel;
  const isSplit = layout === "split";

  return (
    <header
      {...props}
      className={cn(
        "border-t border-line pt-5",
        isSplit && "grid gap-8 md:grid-cols-8 lg:grid-cols-12",
        className,
      )}
    >
      <div
        className={cn(
          "flex flex-wrap items-center gap-x-4 gap-y-2",
          isSplit && "md:col-span-2 lg:col-span-3",
        )}
      >
        {number !== undefined ? <SectionNumber value={number} /> : null}
        {eyebrow ? (
          <span className="text-label font-semibold uppercase text-muted">
            {eyebrow}
          </span>
        ) : null}
      </div>

      <div
        className={cn(
          !isSplit && "mt-8",
          isSplit && "md:col-span-6 lg:col-span-9",
        )}
      >
        <Heading
          id={titleId}
          className={cn(
            "max-w-5xl font-display font-semibold text-ink",
            headingClasses[headingLevel],
          )}
        >
          {title}
        </Heading>
        {description ? (
          <p className="mt-6 max-w-2xl text-body-lg text-muted">
            {description}
          </p>
        ) : null}
      </div>
    </header>
  );
}
