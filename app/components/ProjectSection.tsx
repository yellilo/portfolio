import ExternalLinkIcon from "~/icons/external-link.svg?react";
import FileTextIcon from "~/icons/file-text.svg?react";
import CodeIcon from "~/icons/code.svg?react";

import TechnologyGrid from "./TechnologyGrid";
import { LinkButton } from "./LinkButton";
import Section from "./Section";

import { components } from "~/content/mdx";
import type { Project } from "~/types";

export default function ProjectSection({ id, title, technologies, Content, ...links }: Project) {
  return (
    <Section id={id} title={title}>
      {Object.keys(links).length && <ProjectLinkButtons {...links} />}
      <Content components={components} />
      <hr />
      <TechnologyGrid technologies={technologies} />
    </Section>
  );
}

function ProjectLinkButtons({ source, writeup, link }: Record<string, string | undefined>) {
  return (
    <div className="section__buttons">
      {source && (
        <LinkButton to={source} title="Source code" target="_blank">
          <CodeIcon />
        </LinkButton>
      )}
      {writeup && (
        <LinkButton to={writeup} title="Project writeup" target="_blank">
          <FileTextIcon />
        </LinkButton>
      )}
      {link && (
        <LinkButton to={link} title="Open in new tab" target="_blank">
          <ExternalLinkIcon />
        </LinkButton>
      )}
    </div>
  );
}
