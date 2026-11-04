const script = `
function getPreferredTheme() {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
}

document.documentElement.dataset.theme = localStorage.getItem("theme") ?? getPreferredTheme();
`;

export default function ThemeRestoration() {
  return <script>{script}</script>;
}
