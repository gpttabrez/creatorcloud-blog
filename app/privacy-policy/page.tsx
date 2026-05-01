import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — CreatorCloud | No Permanent Storage",
  description:
    "CreatorCloud privacy policy — secure temporary file processing, no data selling, and user-first privacy protection.",
  authors: [{ name: "Advisory Mediacare Services" }],
  openGraph: {
    title: "CreatorCloud Privacy Policy",
    description:
      "Secure temporary file processing, no data selling, GDPR-ready.",
    url: "https://blog.creatorcloud.in/privacy-policy",
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
            "@type": "WebPage",
            name: "CreatorCloud Privacy Policy",
            url: "https://blog.creatorcloud.in/privacy-policy",
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

        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          🔥 CreatorCloud — Privacy Policy
        </h1>

        <p className="text-gray-400 mt-1">
          Secure. Transparent. User-first privacy.
        </p>

        <p className="mt-6 text-gray-300">
          Welcome to CreatorCloud — an online suite for video compression, MP3 conversion,
          PDF merge, and image processing. This policy explains how we handle user information.
        </p>

        {/* LEGAL */}
        <div className="mt-8 p-6 rounded-xl bg-white/3 border border-white/10 text-sm text-gray-300">
          <p className="font-medium text-cyan-300">Legal & Company</p>

          <p className="mt-2">
            CreatorCloud is a product/brand owned and operated by{" "}
            <strong>Advisory Mediacare Services</strong>.
            Registered Business Name: Advisory Mediacare Services.
          </p>

          <p className="mt-2 text-xs text-gray-400">
            For privacy, legal or payment-related queries, contact:{" "}
            <a href="mailto:support@creatorcloud.in" className="text-cyan-300">
              support@creatorcloud.in
            </a>
            <span className="mx-2">•</span> Bangalore, Karnataka, India
          </p>
        </div>

        {/* 1 */}
        <h2 className="mt-10 text-2xl font-semibold text-cyan-300">
          1. Information We Collect
        </h2>

        <p className="mt-3 text-gray-300 font-semibold">
          A) Data You Provide Directly
        </p>

        <table className="w-full text-left bg-white/5 border border-white/10 mt-3 rounded-lg">
          <thead className="text-sm text-gray-300 bg-white/10">
            <tr>
              <th className="p-3">Data Type</th>
              <th className="p-3">Why We Collect</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            <tr className="border-t border-white/10">
              <td className="p-3">Email (optional)</td>
              <td className="p-3">
                Signup, support, newsletters, Pro features (future)
              </td>
            </tr>
            <tr className="border-t border-white/10">
              <td className="p-3">Uploaded Files</td>
              <td className="p-3">
                Required for compression, conversion & other tools
              </td>
            </tr>
            <tr className="border-t border-white/10">
              <td className="p-3">
                User Profile (only if account enabled later)
              </td>
              <td className="p-3">
                Dashboard access, preset saving, subscription access
              </td>
            </tr>
          </tbody>
        </table>

        <p className="mt-5 text-gray-300 font-semibold">
          B) Data Collected Automatically
        </p>

        <table className="w-full text-left bg-white/5 border border-white/10 mt-3 rounded-lg">
          <thead className="text-sm text-gray-300 bg-white/10">
            <tr>
              <th className="p-3">Type</th>
              <th className="p-3">Usage Purpose</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            <tr className="border-t border-white/10">
              <td className="p-3">IP address, Browser, Device Info</td>
              <td className="p-3">
                Security, abuse control, analytics
              </td>
            </tr>
            <tr className="border-t border-white/10">
              <td className="p-3">Cookies & Session Identifiers</td>
              <td className="p-3">
                Login state, preferences, ads personalization
              </td>
            </tr>
            <tr className="border-t border-white/10">
              <td className="p-3">Usage Activity</td>
              <td className="p-3">
                Tool performance improvement, UI optimization
              </td>
            </tr>
          </tbody>
        </table>

        {/* 2 */}
        <h2 className="mt-12 text-2xl font-semibold text-purple-300">
          2. How We Use Your Information
        </h2>

        <ul className="list-disc ml-6 mt-3 space-y-2 text-gray-300">
          <li>Process media files as requested</li>
          <li>Improve speed, UI, and feature performance</li>
          <li>Send updates if subscribed via email</li>
          <li>Detect bots, abuse, spam & unauthorized access</li>
          <li>Support future dashboard login & Pro accounts</li>
          <li>Show contextual ads once AdSense is enabled</li>
        </ul>

        <p className="text-yellow-300 mt-3 font-semibold">
          We do NOT sell user data or files. Ever.
        </p>

        {/* 3 */}
        <h2 className="mt-12 text-2xl font-semibold text-fuchsia-400">
          3. Uploaded Files — Processing & Deletion
        </h2>

        <ul className="list-disc ml-6 mt-3 space-y-2 text-gray-300">
          <li>Files are stored temporarily only during operation</li>
          <li>Auto-deleted after processing or session expiry</li>
          <li>We do not analyze, view, or train models on your files</li>
          <li>No manual file review unless user reports error</li>
        </ul>

        {/* 4 */}
        <h2 className="mt-12 text-2xl font-semibold text-yellow-300">
          4. Cookies, Ads & Google AdSense
        </h2>

        <p className="mt-2 text-gray-300">
          Ads are currently NOT live — but when enabled:
        </p>

        <table className="w-full text-left bg-white/5 border border-white/10 mt-3 rounded-md">
          <thead className="text-sm bg-white/10 text-gray-300">
            <tr>
              <th className="p-2">Purpose</th>
              <th className="p-2">Example Use</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            <tr className="border-t border-white/10">
              <td className="p-2">Session Login</td>
              <td className="p-2">Remain logged into dashboard</td>
            </tr>
            <tr className="border-t border-white/10">
              <td className="p-2">Analytics</td>
              <td className="p-2">Visitors count, pages viewed</td>
            </tr>
            <tr className="border-t border-white/10">
              <td className="p-2">AdSense</td>
              <td className="p-2">Personalized or non-personalized ads</td>
            </tr>
          </tbody>
        </table>

        <p className="mt-3 text-gray-300">
          https://www.google.com/settings/ads
        </p>
        <p className="text-gray-300">
          https://optout.networkadvertising.org
        </p>

        {/* 5 */}
        <h2 className="mt-12 text-2xl font-semibold text-emerald-300">
          5. User Rights — GDPR & CCPA
        </h2>

        <ul className="list-disc ml-6 mt-3 space-y-2 text-gray-300">
          <li>Request data removal anytime</li>
          <li>Request to delete processed files/logs</li>
          <li>Opt-out of email marketing</li>
          <li>Request copy of information stored</li>
        </ul>

        <p className="mt-3">
          Submit requests via: support@creatorcloud.in
        </p>

        {/* 6 */}
        <h2 className="mt-12 text-2xl font-semibold text-indigo-300">
          6. Third-Party Services We May Use
        </h2>

        <ul className="list-disc ml-6 mt-3 space-y-2 text-gray-300">
          <li>Google AdSense</li>
          <li>Google Analytics</li>
          <li>Hosting/Cloud servers</li>
          <li>Payment gateways</li>
        </ul>

        {/* 7 */}
        <h2 className="mt-12 text-2xl font-semibold text-orange-300">
          7. Children’s Privacy
        </h2>

        <p className="mt-2 text-gray-300">
          CreatorCloud is not intended for children under age 13.
          If such information is discovered, we remove it immediately.
        </p>

        {/* 8 */}
        <h2 className="mt-12 text-2xl font-semibold text-red-300">
          8. Policy Changes
        </h2>

        <p className="mt-2 text-gray-300">
          We reserve the right to update this policy. Updates will be visible
          on this page with an updated revision date.
        </p>

        {/* FOOTER */}
        <p className="mt-14 text-gray-400 text-sm">
          📅 Last Updated: 02 December 2025 <br />
          🔗 Website: https://creatorcloud.in <br />
          📩 Email: support@creatorcloud.in <br />
          🏢 Legal Business Name: Advisory Mediacare Services
        </p>

      </section>
    </main>
  );
}