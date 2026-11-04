import type { MDXContent } from "mdx/types";

export interface AboutFrontmatter {
  name: string;
  alias: string;
  description: string;
  socials: Record<"bluesky" | "discord" | "github", string>;
}

export interface About extends AboutFrontmatter {
  Content: MDXContent;
}

export interface ProjectFrontmatter {
  title: string;
  technologies: string[];
}

export interface Project extends ProjectFrontmatter {
  id: string;
  Content: MDXContent;
}

export interface Technology {
  name: string;
  link: string;
}
