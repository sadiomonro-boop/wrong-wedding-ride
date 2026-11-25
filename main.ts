import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I drove you to the wrong wedding. In my defense, both had a bride, a buffet, and a man crying in the bathroom.";

if (line.length < 1 || line.length > 200 || line.trim().length === 0) {
  throw new Error(`entry must be 1-200 non-blank characters, got ${line.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(`wrote ${line.length} characters to /output/entry.txt`);
