"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";

import { ButtonLink } from "@/components/ui";
import type { NavigationItem } from "@/types/navigation";

import { Container } from "./container";

type MobileNavigationProps = {
  items: readonly NavigationItem[];
};

export function MobileNavigation({ items }: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        triggerRef.current?.focus();
        return;
      }

      if (event.key === "Tab" && triggerRef.current && menuRef.current) {
        const menuControls = Array.from(
          menuRef.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled])"),
        );
        const focusableControls = [triggerRef.current, ...menuControls];
        const firstControl = focusableControls[0];
        const lastControl = focusableControls.at(-1);

        if (event.shiftKey && document.activeElement === firstControl) {
          event.preventDefault();
          lastControl?.focus();
        } else if (!event.shiftKey && document.activeElement === lastControl) {
          event.preventDefault();
          firstControl.focus();
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 64rem)");

    function closeOnDesktop(event: MediaQueryListEvent) {
      if (event.matches) {
        setIsOpen(false);
      }
    }

    desktopQuery.addEventListener("change", closeOnDesktop);

    return () => {
      desktopQuery.removeEventListener("change", closeOnDesktop);
    };
  }, []);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <div className="lg:hidden">
      <button
        ref={triggerRef}
        type="button"
        aria-controls={menuId}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
        onClick={() => setIsOpen((current) => !current)}
        className="grid size-11 place-items-center border border-ink text-ink transition-colors hover:bg-ink hover:text-canvas focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
      >
        <span aria-hidden="true" className="relative block h-4 w-5">
          <span
            className={`absolute left-0 top-1 block h-px w-5 bg-current transition-transform ${
              isOpen ? "translate-y-[3px] rotate-45" : ""
            }`}
          />
          <span
            className={`absolute bottom-1 left-0 block h-px w-5 bg-current transition-transform ${
              isOpen ? "-translate-y-[3px] -rotate-45" : ""
            }`}
          />
        </span>
      </button>

      {isOpen ? (
        <div
          ref={menuRef}
          id={menuId}
          className="absolute inset-x-0 top-full h-[calc(100svh-4.5rem)] overflow-y-auto border-b border-line bg-canvas"
        >
          <Container>
            <nav aria-label="Navigasi seluler" className="py-8">
              <ol className="border-t border-line">
                {items.map((item, index) => (
                  <li key={item.href} className="border-b border-line">
                    <Link
                      ref={index === 0 ? firstLinkRef : undefined}
                      href={item.href}
                      onClick={closeMenu}
                      className="flex min-h-16 items-center justify-between gap-4 py-4 text-h3 font-semibold text-ink transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent"
                    >
                      <span>{item.label}</span>
                      <span
                        aria-hidden="true"
                        className="text-label font-semibold text-accent"
                      >
                        {(index + 1).toString().padStart(2, "0")}
                      </span>
                    </Link>
                  </li>
                ))}
              </ol>

              <ButtonLink
                href="/#kontak"
                onClick={closeMenu}
                className="mt-8 w-full"
              >
                Konsultasi
              </ButtonLink>
            </nav>
          </Container>
        </div>
      ) : null}
    </div>
  );
}
