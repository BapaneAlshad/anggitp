import { FloatingWhatsApp, Footer, Header } from "@/components/layout";
import { PersonJsonLd } from "@/components/seo";
import { About } from "@/components/sections/about";
import { Faq } from "@/components/sections/faq";
import { FeaturedCaseStudies } from "@/components/sections/featured-case-studies";
import { FinalCta } from "@/components/sections/final-cta";
import { Hero } from "@/components/sections/hero";
import { InsightPreview } from "@/components/sections/insight-preview";
import { Packages } from "@/components/sections/packages";
import { Problems } from "@/components/sections/problems";
import { SelectedResults } from "@/components/sections/selected-results";
import { Services } from "@/components/sections/services";
import { Solutions } from "@/components/sections/solutions";
import { StrategicFramework } from "@/components/sections/strategic-framework";
import { Testimonials } from "@/components/sections/testimonials";
import { WorkingProcess } from "@/components/sections/working-process";

export default function Home() {
  return (
    <>
      <PersonJsonLd />
      <Header />
      <main id="konten-utama" tabIndex={-1} className="focus:outline-none">
        <Hero />
        <SelectedResults />
        <Problems />
        <Solutions />
        <StrategicFramework />
        <About />
        <FeaturedCaseStudies />
        <Services />
        <WorkingProcess />
        <Packages />
        <Testimonials />
        <InsightPreview />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
