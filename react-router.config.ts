import type { Config } from "@react-router/dev/config";
import { renameSync } from "fs";

export default {
  prerender: true,
  ssr: false,
  buildEnd() {
    renameSync("build/client/__spa-fallback.html", "build/client/404.html");
  },
} satisfies Config;
