import { bebasNeue } from "@/lib/fonts";

export default function Hero() {
  return (
    <section className={`relative bg-black text-white min-h-screen flex items-center justify-center overflow-hidden ${bebasNeue.className}`}>
      {/* background animation */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-400 opacity-20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-amber-400 opacity-30 rounded-full blur-2xl animate-pulse"></div>
      </div>

      <div className="relative container mx-auto text-center px-6">
        <h1 className="text-6xl md:text-8xl font-extrabold text-amber-400 leading-tight">
          Redefining Flight:
        </h1>
        <h2 className="text-4xl md:text-5xl font-semibold mt-4">
          Innovation That Soars Beyond Limits
        </h2>

        <div className="mt-12">
          <a
            href="#learn-more"
            className="inline-block bg-amber-400 text-black font-bold text-2xl px-10 py-4 rounded-sm shadow-lg hover:bg-white hover:scale-110 transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-amber-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
