import TechnologyGrid from "~/components/TechnologyGrid";
import LinkGrid from "~/components/LinkGrid";
import Section from "~/components/Section";
import Hero from "~/components/Hero";

import technologies from "~/technologies";

import about from "content:about";
const { name, alias, socials } = about;

const title = `${name} (${alias})`;

export default function Home() {
  return (
    <article>
      <title>{title}</title>
      <Hero />
      <Section title="Technologies" id="technologies">
        <TechnologyGrid technologies={Object.keys(technologies) as (keyof typeof technologies)[]} />
      </Section>
      <Section title="Find me on…" id="socials">
        <LinkGrid
          links={[
            {
              icon: "/assets/images/logos/bluesky.svg",
              label: "Bluesky",
              to: socials.bluesky,
            },
            {
              icon: "/assets/images/logos/discord.svg",
              label: "Discord",
              to: socials.discord,
            },
            {
              icon: "/assets/images/logos/github.[theme].svg",
              label: "GitHub",
              to: socials.github,
            },
          ]}
        />
      </Section>
    </article>
  );
}
