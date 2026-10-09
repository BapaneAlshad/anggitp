import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

type BadgeVariant = "neutral" | "accent" | "outline";

type BadgeProps = ComponentPropsWithoutRef<"span"> & {
  variant?: BadgeVariant;
};

const variantClasses: Record<BadgeVariant, string> = {
  neutral: "border-line bg-surface text-muted",
  accent: "border-accent bg-accent text-white",
  outline: "border-ink bg-transparent text-ink",
};

export function Badge({
  className,
  variant = "neutral",
  ...props
}: BadgeProps) {
  return (
    <span
      {...props}
      className={cn(
        "inline-flex min-h-7 items-center rounded-full border px-3 py-1 text-label font-semibold uppercase",
        variantClasses[variant],
        className,
      )}
    />
  );
}
