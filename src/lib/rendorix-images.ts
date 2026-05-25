import { rx } from "./rendorix";
const IMG_FALLBACK = "/assets/android-chrome-512x512.png";

/**
 * S3 key at bucket root, e.g. "HowIBuiltAZeroMaint.png"
 * (optional: still works if you pass "/assets/HowIBuiltAZeroMaint.png" during migration)
 */
export function imageUrl(
  keyOrPath: string | undefined,
  opts: {
    preset: "card" | "cardSquare" | "hero" | "headshot" | "headshotAbout";
  } = { preset: "card" },
): string {
  if (!keyOrPath?.trim()) {
    return IMG_FALLBACK;
  }

  // Normalize: "HowIBuiltAZeroMaint.png" or "assets/HowIBuiltAZeroMaint.png" -> key for S3
  const key = keyOrPath.replace(/^\/+/, "").split("/").pop() ?? keyOrPath;
  try {
    return rx.img(key, { preset: opts.preset });
  } catch {
    return IMG_FALLBACK;
  }
}
