declare module "content:about" {
  import type { About } from "~/types";
  const about: About;

  export default about;
}

declare module "content:projects" {
  import type { Project } from "~/types";
  const projects: Project[];

  export default projects;
}

declare module "content:contributions" {
  import type { Project } from "~/types";
  const contributions: Project[];

  export default contributions;
}
