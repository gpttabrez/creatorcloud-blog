import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#050816",
};

export const metadata: Metadata = {
  title: "Creator Cloud",

  description:
    "Compress videos, convert images, optimize files — all in one creator dashboard.",

  metadataBase: new URL("https://blog.creatorcloud.in"),

  alternates: {
    canonical: "https://blog.creatorcloud.in",
  },

  manifest: "/manifest.webmanifest",

  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },

  openGraph: {
    title: "Creator Cloud",

    description:
      "Fast tools for creators — compress, convert, optimize media.",

    url: "https://blog.creatorcloud.in",

    siteName: "Creator Cloud",

    images: [
      {
        url: "https://blog.creatorcloud.in/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Creator Cloud",

    description:
      "Compress videos, images & PDFs instantly.",

    images: [
      "https://blog.creatorcloud.in/og-image.jpg",
    ],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Creator Cloud",
  url: "https://creatorcloud.in/",
  logo: "https://blog.creatorcloud.in/favicon-512x512.png",
  sameAs: ["https://blog.creatorcloud.in/tabrez-pasha-n"],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Creator Cloud Blog",
  url: "https://blog.creatorcloud.in",
  description:
    "Compress videos, convert images, optimize files — all in one creator dashboard.",
  publisher: {
    "@type": "Organization",
    name: "Creator Cloud",
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

        {/* RSS feed autodiscovery -- authored directly here rather than via
            metadata.alternates.types, because Next's metadata merging
            SHALLOW-REPLACES the whole `alternates` object on any child route
            that defines its own `alternates.canonical` (which, after this
            session's canonical-URL fixes, is every route except this root
            page). That silently dropped this link on every page but "/".
            A manually-authored tag here isn't subject to that merge at all,
            so it renders unconditionally on every route. */}
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Creator Cloud Blog"
          href="https://blog.creatorcloud.in/rss.xml"
        />

        {/* Structured data -- site-wide, describes Creator Cloud as a
            whole. Per-page schema (BlogPosting/FAQPage/Person/etc.)
            lives next to the content it describes instead. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
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