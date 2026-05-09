import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "CreatorCloud",

  description:
    "Compress videos, convert images, optimize files — all in one creator dashboard.",

  metadataBase: new URL("https://blog.creatorcloud.in"),

  alternates: {
    canonical: "https://blog.creatorcloud.in",
  },

  openGraph: {
    title: "CreatorCloud",

    description:
      "Fast tools for creators — compress, convert, optimize media.",

    url: "https://blog.creatorcloud.in",

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
      <head>

        {/* ✅ GOOGLE SEARCH CONSOLE VERIFICATION */}
        <meta
          name="google-site-verification"
          content="IcD05c8vuYmLOCR2mmBfBVafUpOJkocYqBoQ2Qev7yY"
        />

        {/* ================= AdSense ================= */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3475208521286310"
          crossOrigin="anonymous"
        />

        {/* ================= Google Analytics ================= */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-9CMFW2KGGD"
          strategy="afterInteractive"
        />

        <Script id="ga-script" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag() {
              dataLayer.push(arguments);
            }

            gtag('js', new Date());

            gtag('config', 'G-9CMFW2KGGD');
          `}
        </Script>
      </head>

      <body className="min-h-screen bg-[#050816] text-white">
        {children}
      </body>
    </html>
  );
}