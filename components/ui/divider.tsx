import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

type DividerProps = ComponentPropsWithoutRef<"hr">;

export function Divider({ className, ...props }: DividerProps) {
  return (
    <hr
      {...props}
      className={cn("m-0 w-full border-0 border-t border-line", className)}
    />
  );
}
