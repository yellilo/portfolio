import ProjectSection from "~/components/ProjectSection";

import about from "content:about";
import contributions from "content:contributions";

const title = `${about.name} / Contributions`;

export default function Contributions() {
  return (
    <article>
      <title>{title}</title>
      <meta name="robots" content="noindex" />
      <header>
        <h1>Contributions</h1>
        <hr />
      </header>
      <p>On this page you'll find a list of contributions that I've made to other open-source projects.</p>
      {contributions.map((project) => (
        <ProjectSection key={project.id} {...project} />
      ))}
    </article>
  );
}
