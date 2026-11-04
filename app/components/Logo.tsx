import { Link } from "react-router";

import about from "content:about";
const { name } = about;

const startChars = name.substring(0, 3).split("");
const midChars = name.substring(3, 9).split("");
const endChars = name.substring(9).split("");

export default function Logo() {
  return (
    <Link className="header__logo" to="/" style={{ width: name.length + "ch" }} aria-label={name}>
      <div className="name-swap">
        {startChars.map((c, i) => (
          <span key={i}>{c}</span>
        ))}
        <span className="name-swap__omit">
          {midChars.map((c, i) => (
            <span key={i}>{c}</span>
          ))}
        </span>
        {endChars.map((c, i) => (
          <span key={i}>{c}</span>
        ))}
      </div>
    </Link>
  );
}
