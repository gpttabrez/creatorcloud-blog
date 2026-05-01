import type { Metadata } from "next";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Website Templates – CreatorCloud",
  description:
    "Buy high-quality website templates for creators, businesses, and developers. Fast, modern, and optimized designs by CreatorCloud.",
  openGraph: {
    title: "CreatorCloud Templates",
    description:
      "Premium website templates for creators and businesses.",
    url: "https://blog.creatorcloud.in/templates",
    siteName: "CreatorCloud",
  },
};

export default function TemplatesPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-gray-100">

      <section className="max-w-6xl mx-auto px-6 py-20">

        {/* HEADER */}
        <h1 className="text-4xl md:text-5xl font-extrabold">
          Website Templates by{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            CreatorCloud
          </span>
        </h1>

        <p className="mt-4 text-gray-300 text-lg">
          Ready-to-use, high-performance templates for creators, startups, and businesses.
        </p>

        {/* COMING SOON */}
        <div className="mt-12 p-10 text-center bg-white/5 border border-white/10 rounded-xl">
          <h2 className="text-2xl font-semibold text-cyan-300">
            🚀 Templates Store Launching Soon
          </h2>

          <p className="mt-3 text-gray-300">
            We are preparing premium UI templates, dashboards, and business websites.
          </p>

          <p className="mt-2 text-gray-400 text-sm">
            You will be able to browse, preview, and purchase templates directly.
          </p>
        </div>

        {/* TEMPLATE GRID WITH REAL IMAGES */}
        <div className="mt-14 grid sm:grid-cols-2 md:grid-cols-3 gap-8">

          {[
            {
              title: "Startup Landing Page",
              img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
            },
            {
              title: "Ecommerce UI Template",
              img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
            },
            {
              title: "Portfolio Website",
              img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl"
            >
              <img
                src={`${item.img}?auto=format&fit=crop&w=800&q=80`}
                alt={item.title}
                className="h-40 w-full object-cover rounded mb-4"
              />

              <h3 className="text-lg font-semibold text-white">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm mt-1">
                Modern UI • Responsive • Fast
              </p>

              <button className="mt-4 w-full py-2 bg-white/10 rounded opacity-60 cursor-not-allowed">
                Preview (Coming Soon)
              </button>
            </div>
          ))}

        </div>

        {/* CONTACT CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-300">
            Want early access or custom template?
          </p>

          <a
            href="mailto:creatorcloudstudio@gmail.com?subject=Template Inquiry"
            className="inline-block mt-4 px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg text-black font-semibold"
          >
            Contact Us →
          </a>
        </div>

      </section>

      <Footer />

    </main>
  );
}