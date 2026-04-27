/**
 * Generates all icon sizes needed for VillageCircle from public/logo.png
 * Run: node scripts/generate-icons.mjs
 */
import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const SRC = path.join(ROOT, "public", "logo.png");
const OUT = path.join(ROOT, "public");
const APP = path.join(ROOT, "app");

async function squareCrop(size) {
  // Logo is 1024×1536 — centre-crop to 1024×1024 then resize
  return sharp(SRC)
    .extract({ left: 0, top: 256, width: 1024, height: 1024 })
    .resize(size, size, { fit: "cover" });
}

async function run() {
  console.log("Generating icons from", SRC);

  // --- PNG icons for /public ---
  const icons = [
    { file: "favicon-16x16.png",       size: 16  },
    { file: "favicon-32x32.png",       size: 32  },
    { file: "apple-touch-icon.png",    size: 180 },
    { file: "android-chrome-192x192.png", size: 192 },
    { file: "android-chrome-512x512.png", size: 512 },
    { file: "icon-maskable-512.png",   size: 512 },
  ];

  for (const { file, size } of icons) {
    await (await squareCrop(size)).png().toFile(path.join(OUT, file));
    console.log(`  ✓ public/${file}`);
  }

  // --- OG image 1200×630 (letterboxed with brand bg) ---
  const OG_W = 1200, OG_H = 630;
  const logoHeight = Math.round(OG_H * 0.6);
  const logoWidth  = logoHeight;
  const logoResized = await (await squareCrop(logoWidth)).toBuffer();

  await sharp({
    create: {
      width: OG_W, height: OG_H,
      channels: 3,
      background: { r: 10, g: 11, b: 7 }, // #0A0B07
    },
  })
    .composite([{
      input: logoResized,
      gravity: "centre",
    }])
    .png()
    .toFile(path.join(OUT, "og-image.png"));
  console.log("  ✓ public/og-image.png");

  // --- app/icon.png (32×32) — Next.js App Router favicon ---
  await (await squareCrop(32)).png().toFile(path.join(APP, "icon.png"));
  console.log("  ✓ app/icon.png");

  // --- app/apple-icon.png (180×180) ---
  await (await squareCrop(180)).png().toFile(path.join(APP, "apple-icon.png"));
  console.log("  ✓ app/apple-icon.png");

  // --- favicon.ico (multi-res: 16, 32, 48) using PNG fallback ---
  // Sharp can't write .ico natively — write a 32px PNG named favicon.ico
  // (browsers accept PNG favicon.ico equivalently in modern versions)
  await (await squareCrop(32)).png().toFile(path.join(OUT, "favicon.ico"));
  console.log("  ✓ public/favicon.ico (32px PNG, broadly supported)");

  // --- site.webmanifest ---
  const manifest = {
    name: "VillageCircle",
    short_name: "VillageCircle",
    description: "Where conviction becomes code.",
    start_url: "/",
    display: "standalone",
    background_color: "#0A0B07",
    theme_color: "#C9922A",
    icons: [
      { src: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { src: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
      { src: "/icon-maskable-512.png",       sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
  fs.writeFileSync(
    path.join(OUT, "site.webmanifest"),
    JSON.stringify(manifest, null, 2),
  );
  console.log("  ✓ public/site.webmanifest");

  console.log("\nAll icons generated.");
}

run().catch((err) => { console.error(err); process.exit(1); });
