// Generates the PWA icon set: a blue gas-flame on a soft pink field.
// Run with: npm run icons
import { mkdir } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";

const root = join(import.meta.dirname, "..");
const outDir = join(root, "public/icons");

const PINK = "#fce4ec";

// Candle flame: slim rounded body, tip leaning left into a curl.
const FLAME =
  "M236 60 C296 108 340 224 336 330 C336 398 302 456 256 456 C210 456 176 398 176 330 C192 224 276 150 236 60 Z";

function svg({ scale = 1 } = {}) {
  const transform =
    scale === 1
      ? ""
      : ` transform="translate(256 256) scale(${scale}) translate(-256 -256)"`;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <linearGradient id="flame" x1="0" y1="1" x2="0" y2="0">
      <stop offset="0" stop-color="#1e3a8a"/>
      <stop offset="0.55" stop-color="#3b5bdb"/>
      <stop offset="1" stop-color="#74c0fc"/>
    </linearGradient>
  </defs>
  <rect width="512" height="512" fill="${PINK}"/>
  <path d="${FLAME}" fill="url(#flame)"${transform}/>
</svg>`;
}

const standard = Buffer.from(svg());
// Maskable: shrink the flame into the central safe zone.
const maskable = Buffer.from(svg({ scale: 0.72 }));

await mkdir(outDir, { recursive: true });

await Promise.all([
  sharp(standard).resize(192, 192).png().toFile(join(outDir, "icon-192.png")),
  sharp(standard).resize(512, 512).png().toFile(join(outDir, "icon-512.png")),
  sharp(maskable)
    .resize(512, 512)
    .png()
    .toFile(join(outDir, "icon-maskable.png")),
  sharp(standard)
    .resize(180, 180)
    .png()
    .toFile(join(outDir, "apple-touch-icon.png")),
  sharp(standard).resize(32, 32).png().toFile(join(outDir, "favicon-32.png")),
]);

console.log("Generated PWA icons in public/icons/.");
