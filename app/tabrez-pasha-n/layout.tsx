import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tabrez Pasha — Systems & Automation Developer | Bengaluru",

  description:
    "Android developer and automation systems builder with 5+ years of experience. Creator of live Play Store apps, SaaS platforms, AI integrations, trading bots, and Discord automation systems.",

  keywords:
    "Tabrez Pasha, Android Developer, Android Engineer Bengaluru, AI Automation Developer, SaaS Developer India, Firebase Developer, Trading Bot Developer, Discord Bot Developer, MapLibre Developer, React Developer, Python Developer, Automation Systems, CreatorCloud, GPS Tracking Systems, AI Integration, Full Stack Developer",

  authors: [{ name: "Tabrez Pasha" }],

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

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}