"use client";

import { bebasNeue, inter } from "@/lib/fonts";

export default function Support() {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <h2 className={`text-6xl font-bold text-center text-amber-400 mb-8 ${bebasNeue.className}`}>
          Support Our Vision
        </h2>
        <p className={`text-lg text-gray-300 max-w-3xl text-center mx-auto mb-8 ${inter.className}`}>
          Help us take <span className={`text-2xl text-amber-400 ${bebasNeue.className}`}>Project Lumen</span> to new heights. Your support enables us to push boundaries and explore innovative solutions for sustainable aviation. Join us in shaping the future of flight.
        </p>
        <div className="flex justify-center">
          <a
            onClick={() => window.location.href = 'mailto:neerav@projectlumen.tech,joel@projectlumen.tech?subject=Sponsor Project Lumen&body=I would like to sponsor Project Lumen.'}
            className={`${bebasNeue.className} relative px-8 py-4 bg-amber-400 text-black text-2xl font-bold rounded-full shadow-lg hover:bg-white hover:scale-110 transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-amber-300 hover:cursor-pointer`}
          >
            Sponsor Lumen

            {/* button glow */}
            <span className="absolute inset-0 bg-amber-400 opacity-20 rounded-full blur-lg animate-pulse"></span>
          </a>
        </div>
      </div>
    </section>
  );
}
