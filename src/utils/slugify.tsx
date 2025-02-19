export function generateSlug(title: string, id: string): string {
  return (
    title
      .normalize("NFKC") // Normalize Unicode characters
      .replace(/[^\w\u3040-\u30FF\u4E00-\u9FAF]+/g, "-") // Remove special characters but keep Japanese
      .replace(/-+/g, "-") // Remove duplicate hyphens
      .replace(/^-|-$/g, "") + // Trim leading/trailing hyphens
    `-${id}`
  );
}

export function extractIdFromSlug(slug: string): string {
  const parts = slug.split("-");
  return parts[parts.length - 1];
}

export function extractTitleFromSlug(slug: string): string {
  const parts = slug.split("-");
  if (parts.length < 1) {
    return slug;
  }
  const [part] = parts;
  return part;
}
