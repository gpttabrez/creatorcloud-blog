import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tabrez Pasha — Systems & Automation Developer | Bengaluru",

  description:
    "Android developer and automation systems builder with 5+ years of experience. Creator of live Play Store apps, SaaS platforms, AI integrations, trading bots, and Discord automation systems.",

  keywords:
    "Tabrez Pasha, Android Developer, Android Engineer Bengaluru, AI Automation Developer, SaaS Developer India, Firebase Developer, Trading Bot Developer, Discord Bot Developer, MapLibre Developer, React Developer, Python Developer, Automation Systems, Creator Cloud, GPS Tracking Systems, AI Integration, Full Stack Developer",

  authors: [{ name: "Tabrez Pasha" }],

  alternates: {
    canonical: "https://blog.creatorcloud.in/tabrez-pasha-n",
  },

  openGraph: {
    type: "website",
    url: "https://blog.creatorcloud.in/tabrez-pasha-n",
    title: "Tabrez Pasha — Systems & Automation Developer",
    description:
      "Android developer and automation systems builder with 5+ years of hands-on experience.",

    images: [
      {
        url: "https://blog.creatorcloud.in/portfolio/assets/profile.png",
        width: 1200,
        height: 630,
      },
    ],

    siteName: "Tabrez Pasha Portfolio",
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title: "Tabrez Pasha — Systems & Automation Developer",
    description:
      "Android developer and automation systems builder with 5+ years of experience.",

    images: [
      "https://blog.creatorcloud.in/portfolio/assets/profile.png",
    ],
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Tabrez Pasha",
  url: "https://blog.creatorcloud.in/tabrez-pasha-n",
  image: "https://blog.creatorcloud.in/portfolio/assets/profile.png",
  jobTitle: "Systems & Automation Developer",
  description:
    "Android developer and automation systems builder with 5+ years of experience. Creator of live Play Store apps, SaaS platforms, AI integrations, trading bots, and Discord automation systems.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bengaluru",
    addressCountry: "IN",
  },
  email: "mailto:gpttabrez@gmail.com",
  sameAs: [
    "https://github.com/gpttabrez",
    "https://linkedin.com/in/tabrezandro",
    "https://instagram.com/tabrezcreator",
    "https://facebook.com/tabrezcreator",
    "https://youtube.com/@FrentisOfficial",
    "https://threads.net/@tabrezcreator",
    "https://t.me/tabrezcreator",
  ],
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      {children}
    </>
  );
}