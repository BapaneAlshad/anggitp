import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

type SectionNumberProps = Omit<
  ComponentPropsWithoutRef<"span">,
  "children"
> & {
  value: number | string;
};

export function SectionNumber({
  className,
  value,
  ...props
}: SectionNumberProps) {
  const label =
    typeof value === "number" ? value.toString().padStart(2, "0") : value;

  return (
    <span
      aria-hidden="true"
      {...props}
      className={cn(
        "inline-flex items-center gap-3 text-label font-semibold uppercase text-accent after:h-px after:w-6 after:bg-accent",
        className,
      )}
    >
      {label}
    </span>
  );
}
