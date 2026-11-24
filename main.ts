// Two Lines to Your Past Self.
// Writes exactly two lines to /output/entry.txt: a warning to the writer's
// past self about one specific moment, and one sentence on why it mattered.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const FIRST_LINE =
  "On Christmas Eve, when Dad holds out the phone and says Grandma wants to say hi, take it \u2014 don't wave him off and stay at the sink.";
const SECOND_LINE =
  "That was the last time her voice ever came down a phone line, and every Christmas since has been quieter because you chose the dishes over her.";

const text = FIRST_LINE + "\n" + SECOND_LINE + "\n";

// Fail loudly rather than shipping an entry the gate would refuse:
// the gate allows 1-280 characters of UTF-8 text, exactly two lines.
if (text.length > 280 || text.trim().split("\n").length !== 2) {
  throw new Error(`entry.txt must be 2 lines and at most 280 chars, got ${text.length} chars`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
