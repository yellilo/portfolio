import technologies from "~/technologies";
import LinkGrid from "./LinkGrid";

const themedIcons = ["github", "react"];

export default function TechnologyGrid({ technologies: ids }: { technologies: string[] }) {
  return (
    <LinkGrid
      links={ids.map((id) => {
        if (!(id in technologies)) throw new TypeError(`No technology with the ID "${id}" exists.`);

        const technology = technologies[id as keyof typeof technologies];

        let iconName = id;
        if (themedIcons.includes(id)) {
          iconName += ".[theme]";
        }

        return {
          icon: `/assets/images/logos/${iconName}.svg`,
          label: technology.name,
          to: technology.link,
        };
      })}
    />
  );
}
