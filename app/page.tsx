import Link from "next/link";
import type { Metadata } from "next";
import { blogs } from "@/app/data/blogs";

export const metadata: Metadata = {
  title: "Creator Cloud Blog | Tools, Guides & Optimization",
  description:
    "Explore Creator Cloud blogs on video compression, image optimization, PDF tools, and creator growth strategies.",
  openGraph: {
    title: "Creator Cloud Blog",
    description:
      "Guides on video compression, image optimization, and creator workflows.",
    url: "https://blog.creatorcloud.in",
    siteName: "Creator Cloud",
    images: [
      {
        url: "https://blog.creatorcloud.in/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Creator Cloud Blog",
    description:
      "Guides on video compression, image optimization, and creator workflows.",
    images: ["https://blog.creatorcloud.in/og-image.jpg"],
  },
};

// blogs now comes from app/data/blogs.ts -- the same authoritative list
// already used by sitemap.ts, rss.xml, and llms.txt. This used to be a
// separate local array with only 6 of the 9 real posts, which had drifted
// out of sync with the other three. Note: blog.slug here already includes
// the "/blog/" prefix (e.g. "/blog/how-to-compress-videos").

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Creator Cloud Blog",
  url: "https://blog.creatorcloud.in",
  blogPost: blogs.map((b) => ({
    "@type": "BlogPosting",
    headline: b.title,
    url: `https://blog.creatorcloud.in${b.slug}`,
    description: b.desc,
  })),
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <img
            src="/creatorcloud-logo.png"
            alt="Creator Cloud"
            className="h-14 w-auto object-contain"
          />
          <h1 className="text-5xl font-bold">
            Creator Cloud Blog
          </h1>
        </div>

        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Learn how to compress videos, optimize images, manage PDFs,
          and grow faster with smart tools.
        </p>
      </section>

      {/* CATEGORY */}
      <section className="max-w-6xl mx-auto px-6 mb-16">
        <h2 className="text-xl font-semibold mb-6">
          Browse by Category
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          <div className="p-4 bg-white/5 border border-white/10 rounded-lg text-center">
            🎬 Video Tools
          </div>

          <div className="p-4 bg-white/5 border border-white/10 rounded-lg text-center">
            🖼 Image Optimization
          </div>

          <div className="p-4 bg-white/5 border border-white/10 rounded-lg text-center">
            📄 PDF Tools
          </div>

          <div className="p-4 bg-white/5 border border-white/10 rounded-lg text-center">
           Creator Growth
          </div>

        </div>
      </section>

      {/* FEATURED */}
      <section className="max-w-6xl mx-auto px-6 mb-16">
        <Link href="/blog/how-to-compress-videos">
          <div className="relative rounded-2xl overflow-hidden group cursor-pointer">

            {/* Intentionally reverted to a plain <img>, not next/image: a
                second real regression, confirmed live -- with next/image's
                `fill` here, the black/60 dark-overlay sibling (for the text
                readability treatment) rendered fully opaque instead of
                translucent, hiding the photo underneath entirely, even
                though every computed style checked (including the
                overlay's own rgba(0,0,0,0.6) background-color) was
                individually correct. Verified via a live side-by-side
                against the real deployed page, which renders this
                correctly. Root cause looks like a compositing/layering
                interaction between the fill-mode image and the semi-
                transparent absolutely-positioned sibling, not something
                fixable by a straightforward tag swap. See the .tp-profile
                revert on the portfolio page for the same policy applied
                to a different mechanism (stacking context, not
                compositing) -- two independent, confirmed cases now. */}
            <img
              src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d"
              className="w-full h-[350px] object-cover group-hover:scale-105 transition"
              alt="Featured Blog"
            />

            <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-6">
              <h2 className="text-2xl font-bold mb-2">
                How to Compress Videos Without Losing Quality
              </h2>
              <p className="text-gray-300">
                Complete guide for creators in 2026
              </p>
            </div>

          </div>
        </Link>
      </section>

      {/* QUICK TOOLS */}
      <section className="max-w-6xl mx-auto px-6 mb-16">
        <h2 className="text-xl font-semibold mb-6">
          Use Tools Instantly
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <a href="https://creatorcloud.in/video/compress" target="_blank" rel="noopener noreferrer">
            <div className="p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 text-center">
              🎬 Compress Video
            </div>
          </a>

          <a href="https://creatorcloud.in/image/compress" target="_blank" rel="noopener noreferrer">
            <div className="p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 text-center">
              🖼 Compress Image
            </div>
          </a>

          <a href="https://creatorcloud.in/pdf/merge" target="_blank" rel="noopener noreferrer">
            <div className="p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 text-center">
              📄 Merge PDF
            </div>
          </a>

        </div>
      </section>

      {/* ⭐ NEW SECTION (IMPORTANT — MAIN SITE LINK) */}
      <section className="max-w-4xl mx-auto px-6 mb-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Use Creator Tools
        </h2>

        <p className="text-gray-400 mb-6">
          Go back to Creator Cloud to compress videos, optimize images, and manage files instantly.
        </p>

        <a
          href="https://creatorcloud.in"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 bg-white/10 rounded-lg"
        >
          Open Creator Cloud →
        </a>
      </section>

      {/* BLOG GRID */}
      <section className="max-w-6xl mx-auto px-6 pb-20">

        <h2 className="text-2xl font-semibold mb-8">
          Latest Articles
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {blogs.map((blog) => (
            <Link key={blog.slug} href={blog.slug}>
              <div className="h-full bg-white/5 border border-white/10 rounded-xl overflow-hidden flex flex-col hover:bg-white/10 transition">

                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-44 object-cover"
                />

                <div className="p-5 flex flex-col flex-grow">

                  <h3 className="text-lg font-semibold mb-2">
                    {blog.title}
                  </h3>

                  <p className="text-gray-400 text-sm flex-grow">
                    {blog.desc}
                  </p>

                  <div className="mt-4 text-sm text-white/70">
                    Read More →
                  </div>

                </div>

              </div>
            </Link>
          ))}

        </div>

      </section>

      {/* WHY */}
      <section className="max-w-4xl mx-auto px-6 mb-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Why Creators Use Creator Cloud
        </h2>

        <p className="text-gray-400">
          Fast tools, optimized workflows, and practical guides — everything built for creators who want speed and performance.
        </p>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 pb-20 text-center">
        <div className="p-8 rounded-2xl bg-white/5 border border-white/10">

          <h3 className="text-2xl font-semibold mb-3">
            Optimize Your Content Faster
          </h3>

          <p className="text-gray-400 mb-6">
            Use Creator Cloud tools to compress, convert, and optimize instantly.
          </p>

          <div className="flex flex-wrap justify-center gap-4">

            <a href="https://creatorcloud.in/video/compress" target="_blank" rel="noopener noreferrer" className="px-5 py-2 bg-white/10 rounded-lg">
              Video Compressor
            </a>

            <a href="https://creatorcloud.in/image/compress" target="_blank" rel="noopener noreferrer" className="px-5 py-2 bg-white/10 rounded-lg">
              Image Compressor
            </a>

            <a href="https://creatorcloud.in/pdf/merge" target="_blank" rel="noopener noreferrer" className="px-5 py-2 bg-white/10 rounded-lg">
              PDF Tools
            </a>

          </div>

        </div>
      </section>

    </main>
  );
}