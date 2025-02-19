export interface BlogHeading {
  text: string;
  level: "h2" | "h3";
  id?: string;
  children?: BlogHeading[];
}
export function parseBlogHeadings(html: string): BlogHeading[] {
  const headings: BlogHeading[] = [];
  const headingRegex = /<(h2|h3)[^>]*>(.*?)<\/\1>/gis;

  let currentH2: BlogHeading | null = null;
  let match;

  while ((match = headingRegex.exec(html)) !== null) {
    const level = match[1] as "h2" | "h3";
    const content = match[2];
    const text = content.replace(/<[^>]+>/g, "").trim();
    const id = generateId(text);

    if (level === "h2") {
      currentH2 = { text, level, id, children: [] };
      headings.push(currentH2);
    } else if (level === "h3") {
      if (!currentH2) {
        currentH2 = {
          text: "",
          level: "h2",
          id: generateId(""),
          children: [],
        };
        headings.push(currentH2);
      }

      currentH2.children!.push({ text, level, id });
    }
  }

  return headings;
}

function generateId(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, "-")
    .replace(/^-+|-+$/g, "");
}

export function getDetailsWithId(html: string): string {
  const headingRegex = /<(h2|h3)([^>]*)>(.*?)<\/\1>/gis;

  return html.replace(headingRegex, (_, tag, attrs, content) => {
    const text = content.replace(/<[^>]+>/g, "").trim();
    const id = generateId(text);

    // Ensure the id attribute is added
    const updatedAttrs = attrs.includes("id=") ? attrs : `${attrs} id="${id}"`;

    return `<${tag}${updatedAttrs}>${content}</${tag}>`;
  });
}
