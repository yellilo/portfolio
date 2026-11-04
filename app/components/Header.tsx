import { NavLink } from "react-router";
import ThemeToggle from "./ThemeToggle";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="header" data-glowing>
      <Logo />
      <nav className="header__links">
        <NavLink to="/">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contributions">Contributions</NavLink>
      </nav>
      <ThemeToggle />
    </header>
  );
}
