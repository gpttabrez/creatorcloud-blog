import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About CreatorCloud – Fast Video Compress, PDF Tools, MP3 Convert",
  description:
    "CreatorCloud is a privacy-first file processing suite. Compress videos, extract MP3, convert images, merge PDFs – fast, no watermark.",
  keywords: [
    "creatorcloud",
    "online video compressor",
    "mp3 extractor online",
    "pdf compress",
    "jpg to pdf converter",
    "image tools",
  ],
  authors: [{ name: "Advisory Mediacare Services" }],
  openGraph: {
    title: "About CreatorCloud",
    description:
      "A lightning-fast cloud toolkit for creators. Compress, convert, merge, extract instantly.",
    url: "https://blog.creatorcloud.in/about",
    siteName: "CreatorCloud",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[#050816] text-gray-100">

      {/* ========================== PAGE CONTENT =========================== */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent">
            CreatorCloud
          </span>{" "}
          – Fast, Simple, Creator-Friendly Tools
        </h1>

        <p className="mt-4 text-gray-300 text-lg leading-relaxed">
          CreatorCloud is an <strong>all-in-one online compression & conversion toolkit</strong>{" "}
          for creators and everyday users. No install, no watermark — pure speed.
        </p>

        <p className="mt-3 text-gray-400 text-base">
          Convert, compress, merge & extract files in-browser using FastAPI backend.
        </p>

        <div className="mt-10 grid md:grid-cols-2 gap-8">

          <article className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-[0_0_50px_rgba(129,140,248,0.4)]">
            <h2 className="text-2xl font-semibold text-cyan-300">✨ What we Solve</h2>
            <p className="mt-3 text-gray-300">
              No more hopping between 10 websites. One clean powerful suite.
              <br/><strong>Tools built for creators — no ads, no interruptions.</strong>
            </p>
          </article>

          <article className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-[0_0_50px_rgba(236,72,153,0.4)]">
            <h2 className="text-2xl font-semibold text-pink-400">🚀 Vision & Roadmap</h2>
            <p className="mt-3 text-gray-300">
              Next upgrades: <strong>Batch compression, presets, PRO automations,
              cloud storage, workflow chaining.</strong>
            </p>
          </article>

        </div>

        <h3 className="mt-12 text-xl font-bold text-purple-400">
          Core SEO Target Phrases
        </h3>

        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
          <li>Online video compressor — no watermark</li>
          <li>Free MP4 → MP3 audio extractor</li>
          <li>PDF merge + compress + image converter</li>
          <li>No-install file processing suite</li>
        </ul>

        {/* ==================== LEGAL / COMPANY BLOCK ==================== */}
        <div className="mt-12 p-6 rounded-xl bg-white/3 border border-white/10 text-sm text-gray-300">
          <p className="font-medium text-cyan-300">Legal & Company</p>

          <p className="mt-2">
            CreatorCloud is owned and operated by <strong>Advisory Mediacare Services</strong>.
            Registered Business Name: Advisory Mediacare Services.
          </p>

          <p className="mt-2 text-xs text-gray-400">
            For business or payment-related inquiries:{" "}
            <a href="mailto:support@creatorcloud.in" className="text-cyan-300">
              support@creatorcloud.in
            </a>
            <span className="mx-2">•</span> Bangalore, Karnataka, India
          </p>
        </div>

        {/* 🔥 INTERNAL BLOG LINK */}
        <div className="mt-10 text-center">
          <a
            href="/blog"
            className="px-5 py-2 bg-white/10 rounded-lg"
          >
            Visit Blog →
          </a>
        </div>

      </section>

      {/* 🔥 LINK BACK TO MAIN SITE */}
      <div className="text-center pb-20">
        <a
          href="https://creatorcloud.in"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 bg-white/10 rounded-lg"
        >
          Use CreatorCloud Tools →
        </a>
      </div>

    </main>
  );
}