import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

type ContainerSize = "narrow" | "default" | "wide";

type ContainerProps = ComponentPropsWithoutRef<"div"> & {
  size?: ContainerSize;
};

const sizeClasses: Record<ContainerSize, string> = {
  narrow: "max-w-5xl",
  default: "max-w-[90rem]",
  wide: "max-w-[100rem]",
};

export function Container({
  className,
  size = "default",
  ...props
}: ContainerProps) {
  return (
    <div
      {...props}
      className={cn(
        "mx-auto w-full px-page",
        sizeClasses[size],
        className,
      )}
    />
  );
}
