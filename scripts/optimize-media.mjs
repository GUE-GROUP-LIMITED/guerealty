/**
 * Media pipeline for the redesigned site.
 *
 *   node scripts/optimize-media.mjs           -> images + videos
 *   node scripts/optimize-media.mjs --images  -> images only
 *
 * Images: AVIF + WebP + JPEG at 480/768/1280/1920 (capped at source width),
 *         plus a tiny blurred LQIP and dominant colour, written to a manifest
 *         consumed by <Picture/> (src/lib/media-manifest.json).
 * Videos: H.264 MP4 + VP9 WebM, 720p, no audio, ~12s loop, + poster frame.
 *
 * Source files in /public are never modified or deleted.
 */
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const run = promisify(execFile);
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PUB = path.join(ROOT, 'public');
const OUT_IMG = path.join(PUB, 'media', 'img');
const OUT_VID = path.join(PUB, 'media', 'video');
const TMP = path.join(ROOT, 'scripts', '.tmp');
const MANIFEST = path.join(ROOT, 'src', 'lib', 'media-manifest.json');

const WIDTHS = [480, 768, 1280, 1920];
const FORMATS = [
  ['avif', (s) => s.avif({ quality: 50, effort: 4 })],
  ['webp', (s) => s.webp({ quality: 72 })],
  ['jpg', (s) => s.jpeg({ quality: 76, mozjpeg: true, progressive: true })],
];

/** slug -> source file in /public (real-estate inspo.jpg is the design reference, not content) */
const IMAGES = {
  'tower-dusk': 'pexels-ennzo-br-486637611-20891847.jpg',
  'city-dusk': 'pexels-raqeebkhan-13456151.jpg',
  'glass-towers': 'pexels-realcereal-15269604.jpg',
  balconies: 'pexels-tobilobababs-36611315.jpg',
};

const VIDEOS = {
  'film-a': '11807136-uhd_3840_2160_25fps.mp4',
  'film-b': '16996627_3840_2160_30fps.mp4',
};

const onlyImages = process.argv.includes('--images');

async function processImage(slug, file) {
  const input = path.join(PUB, file);
  const base = sharp(input, { failOn: 'none' }).rotate();
  const meta = await base.metadata();
  const width = meta.width;
  const height = meta.height;
  const widths = WIDTHS.filter((w) => w < width).concat(width > 1920 ? [] : [width]);
  const uniq = [...new Set(widths.map((w) => Math.min(w, 1920)))].sort((a, b) => a - b);

  const sources = {};
  for (const [fmt, encode] of FORMATS) {
    sources[fmt] = [];
    for (const w of uniq) {
      const name = `${slug}-${w}.${fmt}`;
      const dest = path.join(OUT_IMG, name);
      try {
        await fs.access(dest);
      } catch {
        await encode(sharp(input, { failOn: 'none' }).rotate().resize({ width: w })).toFile(dest);
      }
      sources[fmt].push({ w, src: `/media/img/${name}` });
    }
  }

  const { dominant } = await sharp(input).stats();
  const color = `rgb(${dominant.r}, ${dominant.g}, ${dominant.b})`;
  const blurBuf = await sharp(input).rotate().resize({ width: 24 }).blur(1.2).webp({ quality: 40 }).toBuffer();
  const blur = `data:image/webp;base64,${blurBuf.toString('base64')}`;

  const largest = sources.jpg[sources.jpg.length - 1];
  return {
    width: largest.w,
    height: Math.round((largest.w / width) * height),
    orientation: width >= height ? 'landscape' : 'portrait',
    original: { file, width, height },
    color,
    blur,
    sources,
  };
}

async function processVideo(slug, file, ffmpeg) {
  const input = path.join(PUB, file);
  const mp4 = path.join(OUT_VID, `${slug}.mp4`);
  const webm = path.join(OUT_VID, `${slug}.webm`);
  const poster = path.join(TMP, `${slug}-poster.jpg`);
  const exists = async (p) => fs.access(p).then(() => true, () => false);
  const scale = 'scale=1280:-2:flags=lanczos,fps=25';

  if (!(await exists(mp4))) {
    console.log(`  encoding ${slug}.mp4`);
    await run(ffmpeg, ['-y', '-ss', '0', '-t', '12', '-i', input, '-an', '-vf', scale,
      '-c:v', 'libx264', '-preset', 'slow', '-crf', '28', '-profile:v', 'high', '-pix_fmt', 'yuv420p',
      '-movflags', '+faststart', mp4], { maxBuffer: 1 << 26 });
  }
  if (!(await exists(webm))) {
    console.log(`  encoding ${slug}.webm`);
    await run(ffmpeg, ['-y', '-ss', '0', '-t', '12', '-i', input, '-an', '-vf', scale,
      '-c:v', 'libvpx-vp9', '-crf', '40', '-b:v', '0', '-deadline', 'good', '-cpu-used', '4',
      '-row-mt', '1', webm], { maxBuffer: 1 << 26 });
  }
  if (!(await exists(poster))) {
    await run(ffmpeg, ['-y', '-ss', '0.5', '-i', input, '-frames:v', '1', '-vf', 'scale=1920:-2', '-q:v', '2', poster]);
  }
  const size = async (p) => ((await fs.stat(p)).size / 1024 / 1024).toFixed(2) + 'MB';
  console.log(`  ${slug}: mp4 ${await size(mp4)}, webm ${await size(webm)}`);
  return { mp4: `/media/video/${slug}.mp4`, webm: `/media/video/${slug}.webm`, posterFile: poster };
}

async function main() {
  await fs.mkdir(OUT_IMG, { recursive: true });
  await fs.mkdir(OUT_VID, { recursive: true });
  await fs.mkdir(TMP, { recursive: true });

  let existing = { images: {}, videos: {} };
  try { existing = JSON.parse(await fs.readFile(MANIFEST, 'utf8')); } catch {}
  const manifest = { images: { ...existing.images }, videos: { ...existing.videos } };

  if (!onlyImages) {
    const ffmpeg = (await import('ffmpeg-static')).default;
    for (const [slug, file] of Object.entries(VIDEOS)) {
      console.log(`video ${file}`);
      const v = await processVideo(slug, file, ffmpeg);
      // Poster goes through the image pipeline (copied into /public temporarily-free path)
      const posterSlug = `${slug}-poster`;
      const posterRel = path.relative(PUB, v.posterFile);
      manifest.images[posterSlug] = await processImage(posterSlug, posterRel);
      manifest.images[posterSlug].original.file = `(frame of ${file})`;
      manifest.videos[slug] = { mp4: v.mp4, webm: v.webm, poster: posterSlug, original: file };
    }
  }

  for (const [slug, file] of Object.entries(IMAGES)) {
    console.log(`image ${file}`);
    manifest.images[slug] = await processImage(slug, file);
  }

  await fs.writeFile(MANIFEST, JSON.stringify(manifest, null, 2));
  console.log(`manifest -> ${path.relative(ROOT, MANIFEST)}`);
}

main().catch((e) => { console.error(e); process.exit(1); });
