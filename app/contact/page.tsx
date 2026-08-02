import type { Metadata } from "next";
import Footer from "../components/Footer"; 

export const metadata: Metadata = {
  title: "Contact Us – Creator Cloud Support & Business Queries",
  description:
    "Reach out for support, business collaboration or feature requests. Creator Cloud replies usually within 24-48 hours.",
  authors: [{ name: "Advisory Mediacare Services" }],
  alternates: {
    canonical: "https://blog.creatorcloud.in/contact",
  },
  openGraph: {
    title: "Creator Cloud Support",
    description:
      "Contact Creator Cloud for support, business queries, or feature requests.",
    url: "https://blog.creatorcloud.in/contact",
    siteName: "Creator Cloud",
  },
  twitter: {
    card: "summary_large_image",
    title: "Creator Cloud Support",
    description:
      "Contact Creator Cloud for support, business queries, or feature requests.",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[#050816] text-gray-100">

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Creator Cloud Support",
            url: "https://blog.creatorcloud.in/contact",
            email: "creatorcloudstudio@gmail.com",
            provider: {
              "@type": "Organization",
              name: "Advisory Mediacare Services",
              url: "https://creatorcloud.in",
              email: "creatorcloudstudio@gmail.com",
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

      {/* ================= Contact Body ================= */}
      <section className="max-w-4xl mx-auto px-6 py-20">

        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-300 text-transparent bg-clip-text">
          Contact Support
        </h1>

        <p className="mt-3 text-gray-300">
          We reply usually within 24–48 hours.
        </p>

        <form className="mt-10 grid gap-6 max-w-md">
          <input
            className="bg-white/5 border border-white/10 p-3 rounded"
            placeholder="Your Email"
          />
          <textarea
            className="bg-white/5 border border-white/10 p-3 rounded h-32"
            placeholder="Message"
          />
          <button className="bg-gradient-to-r from-cyan-400 to-purple-500 py-3 rounded font-bold text-black">
            Send Message
          </button>
        </form>

        {/* ==================== LEGAL ==================== */}
        <div className="mt-12 p-6 rounded-xl bg-white/3 border border-white/10 text-sm text-gray-300 max-w-md">
          <p className="font-medium text-cyan-300">Legal & Company</p>

          <p className="mt-2">
            Creator Cloud is owned and operated by{" "}
            <strong>Advisory Mediacare Services</strong>.
            Registered Business Name: Advisory Mediacare Services.
          </p>

          <p className="mt-2 text-xs text-gray-400">
            For business or payment-related inquiries:{" "}
            <a
              href="mailto:creatorcloudstudio@gmail.com?subject=Creator Cloud Support&body=Hi Creator Cloud team,%0A%0AI need help with:%0A%0AAccount Email:%0A%0ADetails:%0A"
              className="text-cyan-300"
            >
              creatorcloudstudio@gmail.com
            </a>
            <span className="mx-2">•</span> Bangalore, Karnataka, India
          </p>

          <p className="mt-3 text-xs text-gray-400">
            Please include your account email and a brief description of the issue for faster support.
          </p>
        </div>

        {/* ================= QUICK LINKS ================= */}
        <div className="mt-6 max-w-md text-xs text-gray-400">
          <p>Quick links:</p>

          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              <a href="/about" className="text-cyan-300 hover:underline">
                About (legal info)
              </a>
            </li>
            <li>
              <a href="/privacy-policy" className="text-cyan-300 hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" className="text-cyan-300 hover:underline">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

      </section>
    </main>
  );
}