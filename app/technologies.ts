import type { Technology } from "./types";

export default {
  javascript: {
    name: "JavaScript",
    link: "https://developer.mozilla.org/docs/Web/JavaScript",
  },
  typescript: {
    name: "TypeScript",
    link: "https://www.typescriptlang.org",
  },
  python: {
    name: "Python",
    link: "https://www.python.org",
  },
  csharp: {
    name: "C#",
    link: "https://learn.microsoft.com/dotnet/csharp",
  },
  html: {
    name: "HTML",
    link: "https://developer.mozilla.org/docs/Web/HTML",
  },
  react: {
    name: "React",
    link: "https://react.dev",
  },
  vue: {
    name: "Vue",
    link: "https://vuejs.org",
  },
  winui: {
    name: "WinUI",
    link: "https://learn.microsoft.com/windows/apps/winui",
  },
  css: {
    name: "CSS",
    link: "https://developer.mozilla.org/docs/Web/CSS",
  },
  sass: {
    name: "Sass",
    link: "https://sass-lang.com",
  },
  postgresql: {
    name: "PostgreSQL",
    link: "https://www.postgresql.org",
  },
  git: {
    name: "Git",
    link: "https://git-scm.com",
  },
} satisfies Record<string, Technology>;
