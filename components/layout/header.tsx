import Link from "next/link";

import { navigationItems } from "@/data/navigation";

import { ButtonLink } from "../ui";
import { Container } from "./container";
import { MobileNavigation } from "./mobile-navigation";

function BrandLink() {
  return (
    <Link
      href="/#top"
      aria-label="Anggit Prakoso — kembali ke atas"
      className="group inline-flex min-h-11 items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
    >
      <span className="grid size-10 place-items-center border border-ink bg-ink text-label font-semibold text-canvas transition-colors group-hover:bg-accent">
        AP
      </span>
      <span className="text-small font-semibold leading-tight text-ink">
        Anggit
        <br />
        Prakoso
      </span>
    </Link>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-canvas">
      <a
        href="#konten-utama"
        className="sr-only absolute left-4 top-4 z-[60] bg-accent px-4 py-3 text-small font-semibold text-white focus:not-sr-only"
      >
        Lewati ke konten utama
      </a>

      <Container>
        <div className="flex h-[4.5rem] items-center justify-between gap-4 lg:h-20">
          <BrandLink />

          <nav
            aria-label="Navigasi utama"
            className="hidden items-center gap-7 lg:flex xl:gap-9"
          >
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="inline-flex min-h-11 min-w-11 items-center justify-center text-small font-semibold text-ink transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <ButtonLink href="/#kontak">
              Konsultasi
            </ButtonLink>
          </div>

          <MobileNavigation items={navigationItems} />
        </div>
      </Container>
    </header>
  );
}
