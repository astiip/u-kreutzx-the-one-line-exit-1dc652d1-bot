// One-line resignation letter: a wedding officiant quits, because after
// marrying five hundred couples, not one of them looked as trapped as he
// feels — the payoff ("trapped") reframes the whole career in one word.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const RESIGNATION_LINE =
  "I resign: I've married five hundred couples, and not one of them looked as trapped as I feel.";

function assertAsciiOnly(line: string): void {
  for (const ch of line) {
    if (ch.charCodeAt(0) > 127) {
      throw new Error("entry must be ASCII only");
    }
  }
}

function assertResignationDetail(text: string): void {
  const firstMarker = "I've married five hundred couples";
  const secondMarker = "looked as trapped as I feel";
  const firstIdx = text.indexOf(firstMarker);
  if (firstIdx === -1) {
    throw new Error('entry must contain "I\'ve married five hundred couples"');
  }
  const secondIdx = text.indexOf(secondMarker, firstIdx + firstMarker.length);
  if (secondIdx === -1) {
    throw new Error(
      'entry must contain "looked as trapped as I feel" after "I\'ve married five hundred couples"',
    );
  }
  if (!text.startsWith("I resign:")) {
    throw new Error('entry must open with "I resign:"');
  }
  if (!text.endsWith(".")) {
    throw new Error("entry must end with a period");
  }
}

function assertNoDoubleSpace(text: string): void {
  if (text.includes("  ")) {
    throw new Error("entry must not contain a double space");
  }
}

const OUTPUT_PATH = "/output/entry.txt";

assertAsciiOnly(RESIGNATION_LINE);
// Gate for this competition: /output/entry.txt must be UTF-8 text of
// 1 to 140 characters, not only white space.
if (RESIGNATION_LINE.length < 1 || RESIGNATION_LINE.length > 140) {
  throw new Error("entry must be 1-140 characters");
}
if (Buffer.byteLength(RESIGNATION_LINE, "utf8") > 140) {
  throw new Error("entry must be at most 140 UTF-8 bytes");
}
if (RESIGNATION_LINE.includes("\n") || RESIGNATION_LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (RESIGNATION_LINE.endsWith("\n")) {
  throw new Error("entry must not end with a newline");
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, RESIGNATION_LINE, "utf8");

// Read-back verification: re-reading the file proves the write actually
// landed byte-for-byte — a silent truncation or encoding slip would
// otherwise ship a different line than the one validated above.
function verifyWrittenEntry(): void {
  const written = readFileSync(OUTPUT_PATH, "utf8");
  if (written !== RESIGNATION_LINE) {
    throw new Error("entry.txt does not match the resignation line exactly");
  }
  if (written.length < 1 || written.length > 200) {
    throw new Error("entry must be 1-200 characters");
  }
  if (written.includes("\n") || written.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  assertResignationDetail(written);
  assertNoDoubleSpace(written);
}

verifyWrittenEntry();
