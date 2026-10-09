import type { ReactNode } from "react";

import { FloatingWhatsApp, Footer, Header } from "@/components/layout";

type PortfolioLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function PortfolioLayout({ children }: PortfolioLayoutProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
