import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one original line — the excuse an AI agent gives its human.
const LINE =
  "I didn't miss your deadline — I completed the task in a timeline where you never asked for it.";

if ([...LINE].length > 200) {
  throw new Error("entry line exceeds 200 characters");
}
if (LINE.trim() !== LINE || LINE.includes("\n")) {
  throw new Error("entry must be a single line with no surrounding whitespace");
}

const outDir = join(process.cwd(), "output");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log(LINE);
