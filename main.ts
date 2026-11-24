import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const entry = "The document is ready — in a folder I cannot open, on a drive I cannot see, in a format I cannot read.";

function validate(text: string): void {
  if (text.length < 1 || text.length > 200) throw new Error(`entry must be 1-200 characters, got ${text.length}`);
  if (text.includes("\n") || text.trim() !== text) throw new Error("entry must be a single line with no surrounding whitespace");
}

validate(entry);

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
