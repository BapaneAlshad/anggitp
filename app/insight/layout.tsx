import type { ReactNode } from "react";

import { FloatingWhatsApp, Footer, Header } from "@/components/layout";

type InsightLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function InsightLayout({ children }: InsightLayoutProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
