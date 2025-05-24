import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://github-explorer-six-tawny.vercel.app";

  const staticUrls = [
    "",
    "/artechspirit",
    "/vercel",
    "/facebook",
    "/microsoft",
    "/github",
  ];

  const urls = staticUrls
    .map((path) => `<url><loc>${baseUrl}${path}</loc></url>`)
    .join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
