import Link from "next/link";
import type {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
} from "react";

import { cn } from "@/lib/utils";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "ghost"
  | "inverse"
  | "inverse-outline"
  | "inverse-muted";
type ButtonSize = "small" | "default" | "large";

type ButtonStyleOptions = {
  className?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border-accent bg-accent text-white hover:border-accent-strong hover:bg-accent-strong",
  secondary:
    "border-ink bg-transparent text-ink hover:bg-ink hover:text-canvas",
  ghost:
    "border-transparent bg-transparent text-ink hover:border-line hover:bg-surface",
  inverse:
    "border-white bg-white text-accent hover:border-ink hover:bg-ink hover:text-white",
  "inverse-outline":
    "border-white bg-transparent text-white hover:bg-white hover:text-accent",
  "inverse-muted":
    "cursor-not-allowed border-white/50 bg-white/15 text-white/70",
};

const sizeClasses: Record<ButtonSize, string> = {
  small: "min-h-10 px-4 py-2",
  default: "min-h-12 px-5 py-3",
  large: "min-h-14 px-7 py-4",
};

export function buttonStyles({
  className,
  size = "default",
  variant = "primary",
}: ButtonStyleOptions = {}) {
  return cn(
    "inline-flex items-center justify-center gap-3 rounded-[2px] border text-label font-semibold uppercase tracking-[0.12em] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent disabled:pointer-events-none disabled:opacity-50",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );
}

type ButtonProps = ComponentPropsWithoutRef<"button"> & ButtonStyleOptions;

export function Button({
  className,
  size,
  type = "button",
  variant,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={buttonStyles({ className, size, variant })}
      type={type}
    />
  );
}

type ButtonLinkProps = ComponentPropsWithRef<typeof Link> & ButtonStyleOptions;

export function ButtonLink({
  className,
  size,
  variant,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      {...props}
      className={buttonStyles({ className, size, variant })}
    />
  );
}

type ExternalButtonLinkProps = ComponentPropsWithoutRef<"a"> &
  ButtonStyleOptions;

export function ExternalButtonLink({
  className,
  size,
  variant,
  ...props
}: ExternalButtonLinkProps) {
  return (
    <a
      {...props}
      className={buttonStyles({ className, size, variant })}
    />
  );
}
