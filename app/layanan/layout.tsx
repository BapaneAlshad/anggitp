import type { ReactNode } from "react";

import { FloatingWhatsApp, Footer, Header } from "@/components/layout";

type ServicesLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function ServicesLayout({ children }: ServicesLayoutProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
