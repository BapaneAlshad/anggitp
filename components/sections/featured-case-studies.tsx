import { Container } from "@/components/layout";
import { SectionHeader } from "@/components/ui";
import { homepageSections } from "@/data/homepage";
import { projects } from "@/data/projects";

import { CaseStudyShowcase } from "./case-study-showcase";

export function FeaturedCaseStudies() {
  const content = homepageSections.portfolio;

  return (
    <section
      id="portofolio"
      aria-labelledby="portfolio-title"
      className="border-b border-line py-section"
    >
      <Container>
        <SectionHeader
          eyebrow={content.eyebrow}
          number={content.number}
          titleId="portfolio-title"
          title={content.title}
          description={content.description}
        />

        <div className="mt-14 space-y-section lg:mt-24">
          {projects.map((project, index) => (
            <CaseStudyShowcase
              key={project.slug}
              project={project}
              imageOnLeft={index % 2 === 1}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
