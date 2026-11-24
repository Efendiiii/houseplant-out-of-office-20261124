import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Out of office. I have been in this pot since March, unwatered and unbothered. I will reply when someone remembers me.";

if (ENTRY.length < 1 || ENTRY.length > 120) {
  throw new Error(`entry must be 1-120 chars, got ${ENTRY.length}`);
}
if (!ENTRY.trim()) {
  throw new Error("entry must not be only whitespace");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to /output/entry.txt`);
