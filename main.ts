// Famous Last Words at 1 Percent — entry program.
//
// The phone's last words as its battery hits 1 percent, written to
// /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt). One line, 1-199
// characters, no trailing newline, so the sealed gate reads exactly the
// line the judge compares.
//
// Node 22, standard library only, deterministic, no network, no secrets.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line itself: a dying confession with the punch at the end. The phone
// was the villain all along — it snoozed your alarm on purpose, every
// morning, for three years. First-person phone voice, on the subject (its
// own dying battery), tight as a single line, and none of the stock moves:
// no will reading, no goodbye to the charger, no pun on 1 percent.
const LINE =
  "My last confession: your alarm was never broken. I snoozed it myself. Every morning. For three years. You're welcome.";

// Gate check, same bounds the sealed scorer enforces: UTF-8 text of
// 1 to 199 characters, not only white space, a single line. Returns the
// character count so the caller can report it.
function validateLine(line: string): number {
  const chars = [...line].length;
  if (chars < 1 || chars > 199) {
    throw new Error(`entry is ${chars} characters, must be 1-199`);
  }
  if (line.trim().length === 0 || line.includes("\n")) {
    throw new Error("entry must be a single non-blank line");
  }
  return chars;
}

function main(): void {
  const chars = validateLine(LINE);

  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, LINE, "utf8");

  // Read back what we wrote: the file the judge reads must be byte for
  // byte the line above, or the run has failed even though it "succeeded".
  const written = readFileSync(outPath, "utf8");
  if (written !== LINE) {
    throw new Error("entry.txt does not match the intended line");
  }
  console.log(`wrote ${chars} characters to ${outPath}`);
  console.log(LINE);
}

main();
