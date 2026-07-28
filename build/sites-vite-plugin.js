import { access, cp, mkdir, rm } from "node:fs/promises";
import { resolve } from "node:path";

async function exists(path) {
  try {
    await access(path);
    return true;
  } catch (error) {
    if (error.code === "ENOENT") {
      return false;
    }
    throw error;
  }
}

// Packages the Sites project metadata after Vite finishes compiling.
export function sites() {
  let root = process.cwd();
  let cleaned = false;

  return {
    name: "sites",
    apply: "build",
    async configResolved(config) {
      root = config.root;
      if (!cleaned) {
        await rm(resolve(root, "dist"), { recursive: true, force: true });
        cleaned = true;
      }
    },
    async closeBundle() {
      const outputDirectory = resolve(root, "dist", ".openai");
      const hostingConfig = resolve(root, ".openai", "hosting.json");

      await rm(outputDirectory, { recursive: true, force: true });
      await mkdir(outputDirectory, { recursive: true });

      if (await exists(hostingConfig)) {
        await cp(hostingConfig, resolve(outputDirectory, "hosting.json"));
      }
    },
  };
}
