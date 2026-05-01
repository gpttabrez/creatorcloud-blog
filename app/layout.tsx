import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CreatorCloud",
  description:
    "Compress videos, convert images, optimize files — all in one creator dashboard.",

  metadataBase: new URL("https://creatorcloud.in"),

  openGraph: {
    title: "CreatorCloud",
    description:
      "Fast tools for creators — compress, convert, optimize media.",
    url: "https://creatorcloud.in",
    siteName: "CreatorCloud",
    images: [
      {
        url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "CreatorCloud",
    description:
      "Compress videos, images & PDFs instantly.",
    images: [
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#050816] text-white">
        {children}
      </body>
    </html>
  );
}