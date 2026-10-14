export type ProjectVisual = {
  src: string;
  alt: string;
  caption: string;
};

export type VerifiedCaseStudySection = {
  status: "verified";
  paragraphs?: readonly string[];
  items?: readonly string[];
  visuals?: readonly ProjectVisual[];
  relatedProjectSlugs?: readonly string[];
};

export type TodoCaseStudySection = {
  status: "todo";
  note: string;
};

export type CaseStudySection =
  | VerifiedCaseStudySection
  | TodoCaseStudySection;

export type ProjectCaseStudy = {
  overview: CaseStudySection;
  context: CaseStudySection;
  challenge: CaseStudySection;
  myRole: CaseStudySection;
  scope: CaseStudySection;
  approach: CaseStudySection;
  execution: CaseStudySection;
  result: CaseStudySection;
  visualDocumentation: CaseStudySection;
  insight: CaseStudySection;
  relatedWork: CaseStudySection;
};

export type Project = {
  slug: string;
  number: string;
  name: string;
  category: string | null;
  role: string | null;
  scope: readonly string[];
  summary: string;
  result: string;
  image: {
    src: string;
    alt: string;
  };
  hasCompleteDetails: boolean;
  caseStudy: ProjectCaseStudy;
};

export type DesignPortfolioCategorySlug =
  | "brand-identity"
  | "campaign-social"
  | "website-landing-page"
  | "digital-ads"
  | "packaging"
  | "art-direction";

export type DesignPortfolioCategory = {
  slug: DesignPortfolioCategorySlug;
  label: string;
};

export type DesignPortfolioItem = {
  slug: string;
  projectSlug: string;
  number: string;
  title: string;
  categories: readonly DesignPortfolioCategorySlug[];
  summary: string;
  image: ProjectVisual;
  status: "development" | "ready";
};

export type InsightCategory =
  | "Marketing"
  | "Branding"
  | "Business"
  | "F&B"
  | "Website"
  | "Digital Ads";

export type ArticleContentBlock =
  | {
      type: "heading";
      text: string;
    }
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "list";
      items: readonly string[];
    }
  | {
      type: "callout";
      title: string;
      text: string;
    };

export type Insight = {
  slug: string;
  title: string;
  description: string;
  category: InsightCategory;
  publishedAt: string | null;
  readingTime: string | null;
  status: "draft" | "published";
  content: readonly ArticleContentBlock[];
  relatedSlugs: readonly string[];
};

export type Service = {
  slug: string;
  number: string;
  title: string;
  description: string;
  audience: string;
  problems: readonly string[];
  scope: readonly string[];
  outputs: readonly string[];
};
