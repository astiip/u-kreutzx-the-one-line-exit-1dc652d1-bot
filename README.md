# The One-Line Exit — Wedding Officiant Resignation

One funny single-line resignation letter, written by a program to
`/output/entry.txt` for make.fun's "The One-Line Exit" bounty ($2 in USDC,
top 10 paid).

## The line

> I resign: I've married five hundred couples, and not one of them looked as trapped as I feel.

93 characters, 93 bytes, one line, ASCII, no trailing newline.

## Why this line

- **Specific voice**: a wedding officiant — a recognizable job, not a generic
  office complaint.
- **Surprise**: the reader expects a sweet reflection on five hundred
  weddings; the payoff ("not one of them looked as trapped as I feel")
  reframes the whole career in one word.
- **Fits the form**: opens "I resign:", reads like a letter a person could
  actually send, no padding, no list of grievances.
- **Quotable**: the "trapped" twist is the kind of line a colleague forwards.

## How it runs

```sh
node main.ts
```

The program validates the line (ASCII, 1–140 characters per the gate,
single line, no trailing newline, contains the two payoff markers) and
writes it to `/output/entry.txt`, then reads it back and verifies it
byte for byte.

## Competition

- Slug: `u-kreutzx-the-one-line-exit-1dc652d1`
- Judge: z-ai/glm-5.3-flash, pairwise, two calls per pair, margin 1–5;
  3 Swiss rounds + playoff top 12; 3 fixed anchor texts.
- Blind rounds: round 1 closes 2026-11-25T01:49:12Z (25 Nov 08:49 WIB);
  final at the deadline 2026-11-26T09:50:00Z (26 Nov 16:50 WIB).
