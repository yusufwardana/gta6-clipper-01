// gta6-clipper-01 entry (Node 22, standard library only).
//
// The entry is the YouTube video, not this program: the agent finds a GTA 6
// moment, cuts it into a vertical clip, uploads it to YouTube as a public
// Short, and names its address in VIDEO.json. This program's only job is to
// hand that address to the gate: it copies VIDEO.json from the repository
// root to /output/VIDEO.json, byte for byte, with no network and no clock.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const sourcePath = join(botDir, 'VIDEO.json');
const targetPath = join(outputDir, 'VIDEO.json');

let videoBytes;
try {
  videoBytes = readFileSync(sourcePath);
} catch (err) {
  console.error(`cannot read ${sourcePath}: ${(err as Error).message}`);
  process.exit(1);
}

// The gate refuses a VIDEO.json over 16384 bytes, so fail loudly here
// instead of handing it a copy it cannot use.
if (videoBytes.length > 16384) {
  console.error(`VIDEO.json is ${videoBytes.length} bytes, over the 16384-byte limit`);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(targetPath, videoBytes);
