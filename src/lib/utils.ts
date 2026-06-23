import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge Tailwind classes intelligently (conditional + conflict-free). */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Build a responsive, auto-formatted Unsplash URL from a photo id. */
export function unsplash(id: string, w = 1200, h?: number) {
  const dims = h ? `&w=${w}&h=${h}&fit=crop` : `&w=${w}`;
  return `https://images.unsplash.com/photo-${id}?auto=format&q=80${dims}`;
}
