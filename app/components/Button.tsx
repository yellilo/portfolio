import type { JSX } from "react";

export default function Button({ children, ...props }: JSX.IntrinsicElements["button"]) {
  return (
    <button className="button" type="button" {...props} data-glox-box>
      {children}
    </button>
  );
}
