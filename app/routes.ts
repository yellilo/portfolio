import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/about.tsx"),
  route("/projects", "routes/projects.tsx"),
  route("/contributions", "routes/contributions.tsx"),
] satisfies RouteConfig;
