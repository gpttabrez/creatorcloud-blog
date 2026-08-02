import { blogs } from "@/app/data/blogs";

export async function GET() {
  const baseUrl = "https://blog.creatorcloud.in";

  const escapeXml = (s: string) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  const items = blogs
    .map(
      (b) => `
    <item>
      <title>${escapeXml(b.title)}</title>
      <link>${baseUrl}${b.slug}</link>
      <guid>${baseUrl}${b.slug}</guid>
    </item>`
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Creator Cloud Blog</title>
    <link>${baseUrl}</link>
    <description>Guides on video compression, image optimization, PDF tools, and creator workflows.</description>
    <language>en</language>${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
