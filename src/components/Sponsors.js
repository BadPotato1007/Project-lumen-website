"use client";

import Image from "next/image";

import { bebasNeue, inter } from "@/lib/fonts";

export default function SponsorsSection() {
  const sponsors = [
    {
      name: "Bagel Fund",
      logo: "/bagel-fund.png",
      website: "https://bagel.fund",
    },
  ];

  return (
    <section className="bg-gray-900 text-white py-16" id="sponsors">
      <div className="container mx-auto px-6">
        <h2 className={`text-6xl underline underline-offset-8 decoration-1 font-bold text-center text-amber-400 mb-12 ${bebasNeue.className}`}>
          Our Sponsors
        </h2>

        <div className="flex flex-col items-center text-center space-y-8">
          {/* Sponsor Logo */}
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg p-8 w-80 sm:w-96 text-center"
            >
              <div className="flex justify-center mb-4">
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="w-48 h-48 object-contain"
                  width={192}
                  height={192}
                />
              </div>
              <h3 className={`text-3xl font-semibold text-amber-400 mb-2 ${bebasNeue.className}`}>
                {sponsor.name}
              </h3>
              <a
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-amber-400 hover:text-white underline text-lg ${inter.className}`}
              >
                {sponsor.website}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
