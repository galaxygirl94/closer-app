// Generates the PWA icon set from a single flame mark.
// Run with: npm run icons
import { writeFile } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";

const root = join(import.meta.dirname, "..");

const BG = "#c8674a";
const FLAME = "#f8f1e4";
const CORE = "#5b2a45";

const OUTER =
  "M256 78 C248 156 318 196 340 280 C360 352 332 452 256 452 C180 452 152 352 172 280 C194 196 264 156 256 78 Z";
const INNER =
  "M256 214 C252 256 292 274 300 326 C306 368 286 430 256 430 C226 430 206 368 212 326 C220 274 260 256 256 214 Z";

function icon({ rounded = false, scale = 1 } = {}) {
  const bg = rounded
    ? `<rect width="512" height="512" rx="114" fill="${BG}"/>`
    : `<rect width="512" height="512" fill="${BG}"/>`;
  const transform =
    scale === 1
      ? ""
      : ` transform="translate(256 256) scale(${scale}) translate(-256 -256)"`;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">${bg}<g${transform}><path d="${OUTER}" fill="${FLAME}"/><path d="${INNER}" fill="${CORE}"/></g></svg>`;
}

const standard = Buffer.from(icon());
const maskable = Buffer.from(icon({ scale: 0.72 }));

await Promise.all([
  sharp(standard)
    .resize(192, 192)
    .png()
    .toFile(join(root, "public/icon-192.png")),
  sharp(standard)
    .resize(512, 512)
    .png()
    .toFile(join(root, "public/icon-512.png")),
  sharp(maskable)
    .resize(512, 512)
    .png()
    .toFile(join(root, "public/icon-maskable.png")),
  sharp(standard)
    .resize(180, 180)
    .png()
    .toFile(join(root, "src/app/apple-icon.png")),
  writeFile(join(root, "src/app/icon.svg"), `${icon({ rounded: true })}\n`),
]);

console.log("Generated PWA icons.");
