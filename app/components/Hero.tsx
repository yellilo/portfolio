import { LinkButton } from "./LinkButton";

import about from "content:about";
const { name, alias, Content } = about;

export default function Hero() {
  return (
    <div className="hero">
      <h1>{name}</h1>
      <small>{"@" + alias}</small>
      <Content />
      <div className="hero__buttons">
        <LinkButton to="/projects">Programming Projects</LinkButton>
        <LinkButton to="/contributions">Open-Source Contributions</LinkButton>
      </div>
    </div>
  );
}
