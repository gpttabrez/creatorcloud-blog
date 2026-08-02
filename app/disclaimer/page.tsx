import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer – Creator Cloud",
  description:
    "Read the disclaimer for Creator Cloud. Information, tools, and content are provided for general use without guarantees.",
  alternates: {
    canonical: "https://blog.creatorcloud.in/disclaimer",
  },
  openGraph: {
    title: "Creator Cloud Disclaimer",
    description:
      "Understand the limitations and responsibilities when using Creator Cloud tools and content.",
    url: "https://blog.creatorcloud.in/disclaimer",
    siteName: "Creator Cloud",
  },
  twitter: {
    card: "summary_large_image",
    title: "Creator Cloud Disclaimer",
    description:
      "Understand the limitations and responsibilities when using Creator Cloud tools and content.",
  },
};

const disclaimerSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Creator Cloud Disclaimer",
  url: "https://blog.creatorcloud.in/disclaimer",
  isPartOf: {
    "@type": "WebSite",
    name: "Creator Cloud Blog",
    url: "https://blog.creatorcloud.in",
  },
};

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-gray-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(disclaimerSchema) }}
      />

      <section className="max-w-4xl mx-auto px-6 py-20">

        <h1 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Disclaimer
        </h1>

        <p className="text-gray-300 mb-6">
          The information and tools provided on Creator Cloud are for general informational
          and utility purposes only. By using this website, you agree to the terms outlined in this disclaimer.
        </p>

        {/* GENERAL INFO */}
        <h2 className="text-2xl font-semibold mt-8 mb-3">General Information</h2>
        <p className="text-gray-300">
          All content, tools, and resources available on Creator Cloud are provided “as is”
          without any guarantees of accuracy, reliability, or completeness.
        </p>

        {/* NO PROFESSIONAL ADVICE */}
        <h2 className="text-2xl font-semibold mt-8 mb-3">No Professional Advice</h2>
        <p className="text-gray-300">
          Creator Cloud does not provide legal, financial, or professional advice.
          Any decisions made based on the content or tools are at your own risk.
        </p>

        {/* TOOL USAGE */}
        <h2 className="text-2xl font-semibold mt-8 mb-3">Tool Usage</h2>
        <p className="text-gray-300">
          Our tools are designed to assist with file compression, conversion, and optimization.
          While we strive for accuracy and performance, results may vary depending on input files and usage conditions.
        </p>

        {/* EXTERNAL LINKS */}
        <h2 className="text-2xl font-semibold mt-8 mb-3">External Links</h2>
        <p className="text-gray-300">
          Our website may contain links to third-party websites. We are not responsible
          for the content, policies, or practices of any external sites.
        </p>

        {/* LIMITATION */}
        <h2 className="text-2xl font-semibold mt-8 mb-3">Limitation of Liability</h2>
        <p className="text-gray-300">
          Creator Cloud and its operators are not liable for any losses, damages,
          or issues arising from the use of our tools or content.
        </p>

        {/* CONTACT */}
        <h2 className="text-2xl font-semibold mt-8 mb-3">Contact</h2>
        <p className="text-gray-300">
          If you have any questions regarding this disclaimer, you can contact us at:
        </p>

        <a
          href="mailto:creatorcloudstudio@gmail.com"
          className="inline-block mt-4 text-cyan-300"
        >
          creatorcloudstudio@gmail.com
        </a>

        {/* BACK LINK */}
        <div className="mt-12 text-center">
          <a
            href="/"
            className="px-5 py-2 bg-white/10 rounded"
          >
            Back to Home →
          </a>
        </div>

      </section>

    </main>
  );
}