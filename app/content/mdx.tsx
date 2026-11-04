import type { MDXComponents } from "mdx/types";
import * as React from "react";
import { Link } from "react-router";

declare module "mdx/types" {
  export import JSX = React.JSX;
}

export const components: MDXComponents = {
  a: ({ href = "", ...rest }) => <Link to={href} {...rest} />,
};
