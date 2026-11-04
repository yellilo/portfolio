import { parse, relative, resolve } from "path";
import { globSync, statSync } from "fs";
import type { Plugin } from "vite";

interface Options {
  prefix: string;
  directory: string;
  extensions: string[];
}

export default function content(options: Options): Plugin {
  function contentPathToId(path: string) {
    return options.prefix + relative(options.directory, path).replaceAll("\\", "/");
  }

  function contentIdToPath(id: string) {
    return id.replaceAll("\\", "/").replace(options.prefix, options.directory + "/");
  }

  function loadContentFile(path: string) {
    const absolutePath = resolve(path);

    const importStatement = `import Content, { frontmatter } from ${JSON.stringify(absolutePath)};`;
    const exportStatement = "export default { ...frontmatter, Content };";

    return importStatement + "\n" + exportStatement;
  }

  function loadContentDirectory(path: string) {
    const paths = globSync(options.extensions.map((ext) => path + "/*" + ext));

    const importStatements = paths.map(contentFileImportStatement).join("\n");
    const exportStatement = `export default [${paths.map(contentFileObjectLiteral).join(", ")}];`;

    return importStatements + "\n" + exportStatement;
  }

  function contentFileImportStatement(path: string, i: number) {
    const id = contentPathToId(path);
    return `import $${i} from ${JSON.stringify(id)};`;
  }

  function contentFileObjectLiteral(path: string, i: number) {
    const id = parse(path).name;
    return `{ id: ${JSON.stringify(id)}, ...$${i} }`;
  }

  return {
    name: "content",
    resolveId(id) {
      if (id.startsWith(options.prefix)) return id;
    },
    load(id) {
      if (!id.startsWith(options.prefix)) return;

      const path = contentIdToPath(id);
      if (isDirectory(path)) return loadContentDirectory(path);

      if (isFile(path)) {
        return loadContentFile(path);
      }

      for (const ext of options.extensions) {
        const fullpath = path + ext;
        if (isFile(fullpath)) return loadContentFile(fullpath);
      }
    },
  };
}

function isDirectory(path: string) {
  const stats = statSync(path, { throwIfNoEntry: false });
  return stats?.isDirectory();
}

function isFile(path: string) {
  const stats = statSync(path, { throwIfNoEntry: false });
  return stats?.isFile();
}
