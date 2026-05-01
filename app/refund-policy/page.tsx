import type { Metadata } from "next";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Refund & Payment Policy – CreatorCloud",
  description:
    "Refund policy for CreatorCloud subscriptions. Transparent billing, trials, and fair refund terms.",
  authors: [{ name: "Advisory Mediacare Services" }],
  openGraph: {
    title: "CreatorCloud Refund Policy",
    description:
      "Transparent billing, trial, and refund terms for CreatorCloud services.",
    url: "https://blog.creatorcloud.in/refund-policy",
    siteName: "CreatorCloud",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[#050816] text-gray-200 leading-relaxed">

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RefundPolicy",
            name: "CreatorCloud Refund Policy",
            url: "https://blog.creatorcloud.in/refund-policy",
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

        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-rose-400 to-blue-400 bg-clip-text text-transparent">
          Refund & Payment Policy
        </h1>

        <p className="text-gray-400 mt-1">
          (Effective when Pro subscriptions launch)
        </p>

        {/* LEGAL */}
        <div className="mt-8 p-6 rounded-xl bg-white/3 border border-white/10 text-sm text-gray-300">
          <p className="font-medium text-cyan-300">Legal & Company</p>

          <p className="mt-2">
            CreatorCloud is owned and operated by{" "}
            <strong>Advisory Mediacare Services</strong>.
            Registered Business Name: Advisory Mediacare Services.
          </p>

          <p className="mt-2 text-xs text-gray-400">
            For billing or payment-related queries:{" "}
            <a href="mailto:support@creatorcloud.in" className="text-cyan-300">
              support@creatorcloud.in
            </a>
            <span className="mx-2">•</span> Bangalore, Karnataka, India
          </p>
        </div>

        {/* 1 */}
        <h2 className="mt-10 text-2xl text-purple-300 font-semibold">
          1. Overview
        </h2>
        <p className="mt-2">
          CreatorCloud Pro will include advanced features such as batch processing, AI speed boost,
          cloud save & workflow automations. Payments activate only after premium release.
        </p>

        {/* 2 */}
        <h2 className="mt-10 text-2xl text-cyan-300 font-semibold">
          2. Trial Period & Cancellation
        </h2>
        <ul className="list-disc ml-6 mt-2 space-y-2">
          <li>Trial access may be offered before billing is required.</li>
          <li>Users may cancel anytime before trial renews without charge.</li>
        </ul>

        {/* 3 */}
        <h2 className="mt-10 text-2xl text-emerald-300 font-semibold">
          3. Refund Eligibility
        </h2>
        <ul className="list-disc ml-6 mt-2 space-y-2">
          <li>Refund eligible if the service fails post-support investigation.</li>
          <li>No refunds for misuse or successful completed conversions.</li>
          <li>Partial refunds evaluated case-by-case for fairness.</li>
        </ul>

        {/* 4 */}
        <h2 className="mt-10 text-2xl text-yellow-300 font-semibold">
          4. Payment Disputes
        </h2>
        <p className="mt-2">
          Incorrect charges can be reviewed — contact within <strong>7 days</strong> for resolution.
        </p>

        {/* FOOTER */}
        <p className="mt-14 text-sm text-gray-400">
          📄 Last Updated: 02 December 2025 <br />
          📩 Billing Support:{" "}
          <span className="text-cyan-300">
            support@creatorcloud.in
          </span>
          <br />
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