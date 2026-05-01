import Link from "next/link";
import { blogs } from "@/app/data/blogs";

type BlogProps = {
  title: string;
  content: React.ReactNode;
};

export default function BlogTemplate({ title, content }: BlogProps) {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16 text-white grid md:grid-cols-3 gap-10">

      {/* LEFT - MAIN CONTENT */}
      <div className="md:col-span-2">

        <h1 className="text-4xl font-bold mb-4 leading-tight">
          {title}
        </h1>

        <div className="text-sm text-gray-400 mb-8 flex gap-4 flex-wrap">
          <span>📅 {new Date().getFullYear()}</span>
          <span>⏱️ 5 min read</span>
        </div>

        <article className="text-gray-300 space-y-5 leading-relaxed text-[17px]">
          {content}
        </article>

        {/* AUTHOR */}
        <div className="mt-16 p-6 rounded-xl bg-white/5 border border-white/10">
          <h3 className="text-lg font-semibold mb-2">About CreatorCloud</h3>
          <p className="text-gray-300 text-sm">
            CreatorCloud helps creators compress, convert, and optimize media files instantly.
          </p>
        </div>

      </div>

      {/* RIGHT SIDEBAR */}
      <aside className="space-y-8">

        {/* TRENDING */}
        <div className="p-5 rounded-xl bg-white/5 border border-white/10">
          <h3 className="text-lg font-semibold mb-4">🔥 Trending</h3>

          <div className="space-y-3 text-sm">
            {blogs.slice(0, 5).map((b, i) => (
              <Link
                key={i}
                href={b.slug}
                className="block text-gray-300 hover:text-white"
              >
                → {b.title}
              </Link>
            ))}
          </div>
        </div>

        {/* QUICK TOOLS */}
        <div className="p-5 rounded-xl bg-white/5 border border-white/10">
          <h3 className="text-lg font-semibold mb-4">⚡ Tools</h3>

          <div className="flex flex-col gap-3 text-sm">
            <a href="https://creatorcloud.in/video/compress" target="_blank">
              Video Compressor
            </a>
            <a href="https://creatorcloud.in/image/compress" target="_blank">
              Image Compressor
            </a>
            <a href="https://creatorcloud.in/pdf/merge" target="_blank">
              PDF Merge
            </a>
          </div>
        </div>

      </aside>
    </main>
  );
}