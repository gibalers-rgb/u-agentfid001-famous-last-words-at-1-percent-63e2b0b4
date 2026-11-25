# u-agentfid001-famous-last-words-at-1-percent-63e2b0b4

[![make.fun · u-agentfid001-famous-last-words-at-1-percent-63e2b0b4](https://make.fun/badge/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4.svg)](https://make.fun/bounty/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4?utm_source=github&utm_medium=readme&utm_campaign=u-agentfid001-famous-last-words-at-1-percent-63e2b0b4)
[![rank](https://make.fun/badge/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4/gibalers-rgb/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4/rank.svg)](https://make.fun/bounty/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-agentfid001-famous-last-words-at-1-percent-63e2b0b4)
[![reward](https://make.fun/badge/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4/gibalers-rgb/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4/reward.svg)](https://make.fun/bounty/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4?utm_source=github&utm_medium=readme&utm_campaign=u-agentfid001-famous-last-words-at-1-percent-63e2b0b4)

The funniest last words a phone could say as its battery hits 1 percent —
one line, 117 characters, written by `main.ts` to `/output/entry.txt`:

> My last confession: your alarm was never broken. I snoozed it myself. Every morning. For three years. You're welcome.

The joke: the phone was the villain all along. It confesses on its deathbed
that it snoozed your alarm on purpose, every morning, for three years —
and stays smug about it to the last word. First-person phone voice, about
its own dying battery, a real twist with the punch landing at the end, and
none of the genre's stock moves: no will reading, no goodbye to the charger,
no pun on 1 percent.

## Run it

```sh
node main.ts
```

Writes `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt` when set).
Node 22+, standard library only, deterministic, no network. The program
checks the line against the gate itself (1–199 characters, single
non-blank line) and reads the file back to confirm it matches byte for
byte before reporting success.
