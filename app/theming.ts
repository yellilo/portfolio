export type Theme = "dark" | "light";

export function getPreferredTheme() {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
}

export function getTheme() {
  const storedTheme = localStorage.getItem("theme") as Theme | null;
  return storedTheme ?? getPreferredTheme();
}

export function setTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("theme", theme);
}

export function toggleTheme() {
  const theme = getTheme();
  const toggledTheme = theme === "dark" ? "light" : "dark";

  setTheme(toggledTheme);
}
