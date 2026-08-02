export default function Footer() {
  return (
    <footer className="mt-20 py-12 border-t border-white/10 text-center">

      <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">

        <a href="/about" className="hover:text-cyan-300">About</a>
        <a href="/contact" className="hover:text-cyan-300">Contact</a>
        <a href="/privacy-policy" className="hover:text-cyan-300">Privacy</a>
        <a href="/terms" className="hover:text-cyan-300">Terms</a>
        <a href="/refund-policy" className="hover:text-cyan-300">Refund</a>
        <a href="/templates" className="hover:text-cyan-300">Templates</a>
        <a href="https://blog.creatorcloud.in/disclaimer">Disclaimer</a>

      </div>

      <p className="text-xs text-gray-500 mt-6">
        Creator Cloud is owned and operated by{" "}
        <span className="text-cyan-300">Advisory Mediacare Services</span>.
      </p>

      <p className="text-xs text-gray-500 mt-1">
        © {new Date().getFullYear()} Creator Cloud
      </p>

    </footer>
  );
}