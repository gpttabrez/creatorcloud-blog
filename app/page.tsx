import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CreatorCloud Blog | Tools, Guides & Optimization",
  description:
    "Explore CreatorCloud blogs on video compression, image optimization, PDF tools, and creator growth strategies.",
  openGraph: {
    title: "CreatorCloud Blog",
    description:
      "Guides on video compression, image optimization, and creator workflows.",
    url: "https://blog.creatorcloud.in",
    siteName: "CreatorCloud",
    images: [
      {
        url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

const blogs = [
  {
    title: "How to Compress Videos Without Losing Quality",
    slug: "how-to-compress-videos",
    desc: "Reduce video size without quality loss using modern techniques.",
    image:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d",
  },
  {
    title: "Best Image Formats Explained",
    slug: "best-image-formats",
    desc: "JPG vs PNG vs WebP vs AVIF — full comparison.",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
  },
  {
    title: "MP4 to MP3 Conversion Guide",
    slug: "mp4-to-mp3-conversion",
    desc: "Extract high-quality audio from videos easily.",
    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d",
  },
  {
    title: "PDF Tools Every Creator Should Know",
    slug: "pdf-tools-every-creator-should-know",
    desc: "Merge, compress, and manage PDFs efficiently.",
    image:
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4",
  },
  {
    title: "Why File Compression Matters",
    slug: "why-file-compression-matters",
    desc: "Improve speed, reduce size, and optimize content.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
  },
  {
    title: "How to Convert Images to PDF",
    slug: "how-to-convert-images-to-pdf",
    desc: "Convert multiple images into a single PDF.",
    image:
      "https://images.unsplash.com/photo-1553729459-efe14ef6055d",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-bold mb-6">
          CreatorCloud Blog
        </h1>

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
            🚀 Creator Growth
          </div>

        </div>
      </section>

      {/* FEATURED */}
      <section className="max-w-6xl mx-auto px-6 mb-16">
        <Link href="/blog/how-to-compress-videos">
          <div className="relative rounded-2xl overflow-hidden group cursor-pointer">

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

      {/* BLOG GRID */}
      <section className="max-w-6xl mx-auto px-6 pb-20">

        <h2 className="text-2xl font-semibold mb-8">
          Latest Articles
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {blogs.map((blog) => (
            <Link key={blog.slug} href={`/blog/${blog.slug}`}>
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
          Why Creators Use CreatorCloud
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
            Use CreatorCloud tools to compress, convert, and optimize instantly.
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