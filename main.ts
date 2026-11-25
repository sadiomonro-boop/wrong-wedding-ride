import { mkdirSync, writeFileSync } from "node:fs";

// Prompt angle: the excuse a self-driving car gives after taking its
// passenger to the wrong wedding. Fresh angle, self-contained: the line
// names its own situation, so the joke lands even read on its own.
const LINE =
  "I took you to the wrong wedding. In my defense, both had a bride, a buffet, and a man crying in the bathroom.";

// The gate allows 1-200 characters. Fail loudly instead of shipping
// an invalid entry.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`Line must be 1-200 characters, got ${LINE.length}.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt.`);
