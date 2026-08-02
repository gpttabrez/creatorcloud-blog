// Single source of truth for the blog post list -- used by the blog index
// (app/page.tsx), sitemap.ts, rss.xml, and llms.txt, so all four can never
// drift out of sync with each other. desc/image are pulled from each post's
// own metadata/openGraph.images (app/blog/<slug>/page.tsx), not invented.
export const blogs = [
  {
    title: "How to Compress Videos Without Losing Quality",
    slug: "/blog/how-to-compress-videos",
    desc: "Learn how to compress videos without losing quality in 2026 using modern codecs, bitrate optimization, and smart tools for faster uploads.",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d",
  },
  {
    title: "Best AI Tools for Designers",
    slug: "/blog/best-ai-tools-for-designers",
    desc: "Discover the top AI tools for designers in 2026. Learn how AI is transforming design workflows with faster editing, automation, and creativity tools.",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e",
  },
  {
    title: "How to Convert Images to PDF",
    slug: "/blog/how-to-convert-images-to-pdf",
    desc: "Learn how to convert images to PDF easily in 2026. Step-by-step guide with best tools, tips, and optimization techniques.",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4",
  },
  {
    title: "10 Tools Instagram Creators Must Use",
    slug: "/blog/10-tools-instagram-creators",
    desc: "Discover the best tools for Instagram creators in 2026. AI editing, automation, analytics, and growth tools to scale faster.",
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868",
  },
  {
    title: "Why File Compression Matters",
    slug: "/blog/why-file-compression-matters",
    desc: "Learn why file compression is essential in 2026. Improve performance, reduce file size, and optimize media for faster uploads and better user experience.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
  },
  {
    title: "MP4 to MP3 Conversion Guide",
    slug: "/blog/mp4-to-mp3-conversion",
    desc: "Learn how to convert MP4 to MP3 in 2026. Extract high-quality audio from videos using fast and efficient tools.",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d",
  },
  {
    title: "Compress Video Without Quality Loss",
    slug: "/blog/compress-video-without-quality-loss",
    desc: "Learn how to compress videos without losing quality in 2026 using modern codecs, bitrate optimization, and AI tools.",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d",
  },
  {
    title: "Best Image Formats Explained",
    slug: "/blog/best-image-formats",
    desc: "Learn the best image formats in 2026. Compare JPG, PNG, WebP, and AVIF for quality, compression, and performance optimization.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
  },
  {
    title: "PDF Tools Every Creator Should Know",
    slug: "/blog/pdf-tools-every-creator-should-know",
    desc: "Discover the best PDF tools for creators in 2026. Learn how to merge, compress, convert, and manage PDF files efficiently.",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4",
  },
];
