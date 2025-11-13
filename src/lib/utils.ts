import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ✅ Utility function to create a slug from title
export const createSlug = (title: string) =>
  title
    .toLowerCase()
    .replace(/[^\w\s-]/g, "") // remove special characters
    .trim()
    .replace(/\s+/g, "-"); // replace spaces with -
