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
