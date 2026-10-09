import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type EditorialGridElement = "div" | "ol" | "ul";

type EditorialGridProps = HTMLAttributes<HTMLElement> & {
  as?: EditorialGridElement;
};

export function EditorialGrid({
  as: Component = "div",
  className,
  ...props
}: EditorialGridProps) {
  return (
    <Component
      {...props}
      className={cn(
        "grid grid-cols-4 gap-x-gutter md:grid-cols-8 lg:grid-cols-12 [&>*]:min-w-0",
        className,
      )}
    />
  );
}
