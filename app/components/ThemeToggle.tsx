import MoonIcon from "~/icons/moon.svg?react";
import SunIcon from "~/icons/sun.svg?react";
import { toggleTheme } from "~/theming";

export default function ThemeToggle() {
  return (
    <button type="button" onClick={toggleTheme} title="Toggle theme" className="theme-toggle">
      <MoonIcon data-theme-scope="dark" />
      <SunIcon data-theme-scope="light" />
    </button>
  );
}
