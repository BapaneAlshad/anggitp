import type { Project } from "@/types/content";

import { javaTeaProject } from "./java-tea";
import { javacafeProject } from "./javacafe";
import { newStoryProject } from "./new-story";

export const projects = [
  javacafeProject,
  javaTeaProject,
  newStoryProject,
] as const satisfies readonly Project[];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
