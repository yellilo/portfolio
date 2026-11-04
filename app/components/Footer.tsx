import about from "content:about";

const firstYear = 2026;
const currentYear = new Date().getFullYear();

const copyright = `Copyright © ${firstYear === currentYear ? currentYear : `${firstYear}–${currentYear}`} ${about.name}`;

export default function Footer() {
  return (
    <footer>
      <p>{copyright}</p>
    </footer>
  );
}
