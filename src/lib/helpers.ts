// lib/helpers.ts
export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

export const truncateText = (text: string, length: number) =>
  text.length > length ? text.substring(0, length) + "..." : text;

// utils/copyWithFeedback.ts
export const copyWithFeedback = async (
  text: string,
  setCopied: (value: boolean) => void,
  duration = 1500
) => {
  if (!text) return;

  try {
    await navigator.clipboard.writeText(text);
    setCopied(true);

    // revert after duration
    setTimeout(() => setCopied(false), duration);
  } catch (err) {
    console.error("Failed to copy:", err);
  }
};
