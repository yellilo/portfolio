import { Link } from "react-router";

interface GridLink {
  icon: string;
  label: string;
  to: string;
}

export default function LinkGrid({ links }: { links: GridLink[] }) {
  return (
    <div className="link-grid">
      {links.map((link) => {
        return (
          <Link to={link.to} target="_blank" key={link.to} aria-label={link.label}>
            <LinkIcon src={link.icon} />
            <span>{link.label}</span>
          </Link>
        );
      })}
    </div>
  );
}

function LinkIcon({ src }: { src: string }) {
  if (src.includes("[theme]")) {
    const dark = src.replace("[theme]", "dark");
    const light = src.replace("[theme]", "light");

    return (
      <>
        <img src={dark} alt="" data-theme-scope="dark" />
        <img src={light} alt="" data-theme-scope="light" />
      </>
    );
  }

  return <img src={src} alt="" />;
}
