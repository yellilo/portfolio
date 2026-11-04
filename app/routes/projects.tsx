import ProjectSection from "~/components/ProjectSection";

import about from "content:about";
import projects from "content:projects";

const title = `${about.name} / Projects`;

export default function Projects() {
  return (
    <article>
      <title>{title}</title>
      <meta name="robots" content="noindex" />
      <header>
        <h1>Projects</h1>
        <hr />
      </header>
      <p>
        On this page you'll find a list of various programming projects that I've worked on. All of these projects are open-source, so feel
        free to have a look at their source code on GitHub.
      </p>
      {projects.map((project) => (
        <ProjectSection key={project.id} {...project} />
      ))}
    </article>
  );
}
