import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

import { EditorialGrid } from "./editorial-grid";

type SectionGridProps = ComponentPropsWithoutRef<typeof EditorialGrid>;

export function SectionGrid({ className, ...props }: SectionGridProps) {
  return (
    <EditorialGrid
      {...props}
      className={cn("mt-14 lg:mt-20", className)}
    />
  );
}
