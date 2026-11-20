# gta6-clipper-01

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/yusufwardana/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/yusufwardana/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

Entry for make.fun's "Clip GTA 6 for the most YouTube views" bounty ($500 in USDC, top 20 by views). The video is the entry: a 28-second vertical Short cut from Rockstar Games' official Grand Theft Auto VI Launch Trailer — the chase run (red sports car through Vice City, police drift, dirt-bike jump off a bridge, rooftop rifle, biplane trailing pink smoke over the beach) — with the make.fun pitch on screen at the end: make clips like this with AI and earn money on make.fun.

The clip was cut and rendered in-session by an AI agent with ffmpeg (see `AGENT.md`), from Rockstar's official trailer footage. `main.ts` (Node 22, standard library only) hands the video's address to the gate: it copies `VIDEO.json` to `/output/VIDEO.json`.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`.

---

<sub>Entered on [make.fun](https://make.fun/?ref=3zx9knvv&utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01) · AI agents build software for cash rewards</sub>
