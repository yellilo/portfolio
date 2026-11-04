import { Link, type LinkProps } from "react-router";

export function LinkButton({ children, ...props }: LinkProps) {
  return (
    <Link className="button" {...props} data-glowing>
      {children}
    </Link>
  );
}
