export default function Home() {
  return (
    <main className="min-h-screen text-white bg-[#050816] flex flex-col items-center justify-center px-6">

      <h1 className="text-5xl font-bold text-center">
        CreatorCloud
      </h1>

      <p className="text-gray-300 mt-4 text-center max-w-xl">
        Compress videos, convert images, optimize files — all in one dashboard for creators.
      </p>

      <div className="mt-10 flex gap-4 flex-wrap justify-center">

        <a href="https://creatorcloud.in/video/compress">
          <div className="px-6 py-3 bg-white/10 rounded-lg">
            Video Compressor
          </div>
        </a>

        <a href="https://creatorcloud.in/image/compress">
          <div className="px-6 py-3 bg-white/10 rounded-lg">
            Image Compressor
          </div>
        </a>

        <a href="https://creatorcloud.in/pdf/merge">
          <div className="px-6 py-3 bg-white/10 rounded-lg">
            PDF Merge
          </div>
        </a>

      </div>

    </main>
  );
}