import type { Metadata } from "next";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Careers – Creator Cloud",
  description:
    "Join Creator Cloud and help build powerful tools for creators. Remote opportunities, flexible work, and innovation-driven environment.",
  alternates: {
    canonical: "https://blog.creatorcloud.in/careers",
  },
  openGraph: {
    title: "Careers at Creator Cloud",
    description:
      "Work with Creator Cloud — build tools for millions of creators worldwide.",
    url: "https://blog.creatorcloud.in/careers",
    siteName: "Creator Cloud",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at Creator Cloud",
    description:
      "Work with Creator Cloud — build tools for millions of creators worldwide.",
  },
};

const careersSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Careers at Creator Cloud",
  url: "https://blog.creatorcloud.in/careers",
  isPartOf: {
    "@type": "WebSite",
    name: "Creator Cloud Blog",
    url: "https://blog.creatorcloud.in",
  },
};

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-gray-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(careersSchema) }}
      />

      <section className="max-w-5xl mx-auto px-6 py-20">

        <h1 className="text-4xl md:text-5xl font-extrabold">
          Careers at{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Creator Cloud
          </span>
        </h1>

        <p className="mt-4 text-gray-300 text-lg">
          We are building the future of creator tools — fast, simple, and powerful.
          If you love building products that scale, we’d love to work with you.
        </p>

        {/* ================= OPEN ROLES ================= */}
        <div className="mt-10 space-y-6">

          <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
            <h2 className="text-xl font-semibold text-cyan-300">
              Frontend Developer (React / Next.js)
            </h2>
            <p className="text-gray-400 mt-2">
              Build fast UI, optimize performance, and improve user experience.
            </p>
          </div>

          <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
            <h2 className="text-xl font-semibold text-purple-300">
              Backend Developer (Python / FastAPI)
            </h2>
            <p className="text-gray-400 mt-2">
              Work on processing engines, APIs, and scalable systems.
            </p>
          </div>

          <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
            <h2 className="text-xl font-semibold text-pink-300">
              Content & SEO Specialist
            </h2>
            <p className="text-gray-400 mt-2">
              Write blogs, optimize SEO, and grow organic traffic.
            </p>
          </div>

        </div>

        {/* ================= APPLY ================= */}
        <div className="mt-12 text-center">
          <p className="text-gray-300">
            Interested? Send your profile or portfolio to:
          </p>

          <a
            href="mailto:creatorcloudstudio@gmail.com?subject=Application for Creator Cloud&body=Hi Creator Cloud team,%0A%0AI am applying for the position of:%0A%0APortfolio:%0A%0AExperience:%0A"
            className="inline-block mt-4 px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg text-black font-semibold"
          >
            Apply Now →
          </a>

          <p className="mt-4 text-sm text-gray-400">
            Or email directly:{" "}
            <span className="text-cyan-300">creatorcloudstudio@gmail.com</span>
          </p>
        </div>

        {/* ================= LEGAL ================= */}
        <div className="mt-12 text-sm text-gray-400 text-center">
          Creator Cloud is operated by{" "}
          <span className="text-cyan-300">Advisory Mediacare Services</span>,
          Bangalore, India.
        </div>

      </section>

      <Footer />

    </main>
  );
}