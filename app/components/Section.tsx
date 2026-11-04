import type { ReactNode } from "react";
import { Link } from "react-router";
import LinkIcon from "~/icons/link.svg?react";

export default function Section({ title, id, children }: { title: string; id: string; children: ReactNode }) {
  return (
    <section className="section" id={id} data-glowing>
      <h2>
        {title}
        <Link className="heading-anchor" to={"#" + id} aria-label={"Permalink to " + title}>
          <LinkIcon />
        </Link>
      </h2>
      <hr />
      {children}
    </section>
  );
}
