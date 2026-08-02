import type { Metadata } from "next";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions – Creator Cloud",
  description:
    "Creator Cloud Terms of Use — guidelines, limits, liabilities, file handling, and policy for conversion & compression tools.",
  authors: [{ name: "Advisory Mediacare Services" }],
  alternates: {
    canonical: "https://blog.creatorcloud.in/terms",
  },
  openGraph: {
    title: "Creator Cloud Terms & Conditions",
    description:
      "Guidelines, limits, liabilities, and usage rules for Creator Cloud tools.",
    url: "https://blog.creatorcloud.in/terms",
    siteName: "Creator Cloud",
  },
  twitter: {
    card: "summary_large_image",
    title: "Creator Cloud Terms & Conditions",
    description:
      "Guidelines, limits, liabilities, and usage rules for Creator Cloud tools.",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[#050816] text-gray-200 leading-relaxed">

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TermsOfService",
            name: "Creator Cloud Terms & Conditions",
            url: "https://blog.creatorcloud.in/terms",
            publisher: {
              "@type": "Organization",
              name: "Advisory Mediacare Services",
              url: "https://creatorcloud.in",
              email: "support@creatorcloud.in",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bangalore",
                addressRegion: "Karnataka",
                addressCountry: "IN",
              },
            },
          }),
        }}
      />

      <section className="max-w-5xl mx-auto px-6 py-20">

        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-purple-400 to-cyan-500 bg-clip-text text-transparent">
          Terms & Conditions
        </h1>

        <p className="text-gray-400 mt-2">
          (User Agreement & Service Usage Rules)
        </p>

        {/* LEGAL */}
        <div className="mt-8 p-6 rounded-xl bg-white/3 border border-white/10 text-sm text-gray-300">
          <p className="font-medium text-cyan-300">Legal & Company</p>

          <p className="mt-2">
            Creator Cloud is owned and operated by{" "}
            <strong>Advisory Mediacare Services</strong>.
            Registered Business Name: Advisory Mediacare Services.
          </p>

          <p className="mt-2 text-xs text-gray-400">
            For legal or business-related queries:{" "}
            <a href="mailto:support@creatorcloud.in" className="text-cyan-300">
              support@creatorcloud.in
            </a>
            <span className="mx-2">•</span> Bangalore, Karnataka, India
          </p>
        </div>

        {/* 1 */}
        <h2 className="mt-10 text-2xl text-cyan-300 font-semibold">
          1. Acceptance of Terms
        </h2>
        <p className="mt-2">
          By using Creator Cloud, you agree to follow all terms in this document.
          If you disagree, please stop using the service immediately.
        </p>

        {/* 2 */}
        <h2 className="mt-10 text-2xl text-purple-300 font-semibold">
          2. Permitted Usage
        </h2>

        <ul className="list-disc ml-6 mt-2 space-y-2">
          <li>You may upload media files for personal or commercial use.</li>
          <li>You may convert, compress, or process files freely.</li>
          <li>You own the output files completely.</li>
        </ul>

        <h3 className="mt-6 text-xl text-red-300 font-semibold">
          Restricted Use
        </h3>

        <ul className="list-disc ml-6 mt-2 space-y-2">
          <li>No illegal, harmful or copyrighted content.</li>
          <li>No malware, hacking or attempts to exploit servers.</li>
          <li>No reverse-engineering or unauthorized scraping.</li>
        </ul>

        {/* 3 */}
        <h2 className="mt-10 text-2xl text-fuchsia-400 font-semibold">
          3. File Processing
        </h2>
        <p className="mt-2">
          Files are temporary and deleted automatically post-processing or session expiry.
        </p>

        {/* 4 */}
        <h2 className="mt-10 text-2xl text-amber-300 font-semibold">
          4. Liability Disclaimer
        </h2>
        <p className="mt-2">
          Creator Cloud is provided “as-is”. We are not responsible for delays,
          corrupted output, network/server issues, or user-side errors.
        </p>

        {/* 5 */}
        <h2 className="mt-10 text-2xl text-emerald-300 font-semibold">
          5. Subscription & Payments (Future)
        </h2>
        <p className="mt-2">
          Billing terms will be announced prior to any paid upgrade launch.
        </p>

        {/* 6 */}
        <h2 className="mt-10 text-2xl text-sky-300 font-semibold">
          6. Platform Misuse / Termination
        </h2>
        <p className="mt-2">
          We reserve the right to restrict users abusing or harming the system.
        </p>

        {/* 7 */}
        <h2 className="mt-10 text-2xl text-pink-300 font-semibold">
          7. Changes to Policy
        </h2>
        <p className="mt-2">
          Continued use means you accept updates automatically when published.
        </p>

        {/* Footer */}
        <p className="mt-14 text-sm text-gray-400">
          📅 Last Updated: 02 December 2025 <br />
          📩 Contact:{" "}
          <span className="text-cyan-300">
            support@creatorcloud.in
          </span> <br />
          🏢 Legal Business Name:{" "}
          <span className="text-cyan-300 font-medium">
            Advisory Mediacare Services
          </span>
        </p>

      </section>

      <Footer />
      
    </main>
  );
}