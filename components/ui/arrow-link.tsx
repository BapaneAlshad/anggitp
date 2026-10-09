import Link from "next/link";
import type { ComponentPropsWithRef } from "react";

import { cn } from "@/lib/utils";

type ArrowLinkProps = ComponentPropsWithRef<typeof Link>;

export function ArrowLink({ className, children, ...props }: ArrowLinkProps) {
  return (
    <Link
      {...props}
      className={cn(
        "inline-flex min-h-11 items-center gap-3 border-b border-ink py-2 text-small font-semibold text-ink transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent",
        className,
      )}
    >
      <span>{children}</span>
      <span
        aria-hidden="true"
        className="text-accent"
      >
        →
      </span>
    </Link>
  );
}
