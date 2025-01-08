import { bebasNeue, inter } from "@/lib/fonts";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-20">
      <div className="container mx-auto px-6 lg:px-12 text-center lg:text-left">
        <h2 className={`text-6xl underline underline-offset-8 decoration-1 font-bold text-amber-400 mb-8 ${bebasNeue.className}`}>
          About Us
        </h2>

        <div className="lg:flex lg:items-center lg:space-x-12">
          <div className="flex justify-center lg:w-1/2 mb-10 lg:mb-0">
            {/* TODO: Replace with real image */}
            <Image
              src="/solar-plane.png"
              alt="Solar-powered RC plane"
              className="rounded-lg shadow-lg"
              layout="responsive"
              width={16}
              height={9}
            />
          </div>

          <div className={`lg:w-1/2 ${inter.className}`}>
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              Project Lumen aims to revolutionize the way we perceive flight, creating a solar-powered RC plane that combines innovation with sustainability.
            </p>
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              Our team is dedicated to crafting a design that is both efficient and elegant, ensuring extended flight times and minimal environmental impact. With advanced engineering and a passion for exploration, we’re taking aviation to the next level, redefining what it means to fly responsibly.
            </p>
            <p className="text-lg md:text-xl leading-relaxed mb-8">
              Join us on this journey toward a brighter, more sustainable future.
            </p>

            <a
              href="#contact"
              className={`inline-block bg-amber-400 text-black font-bold text-2xl px-8 py-4 rounded-full shadow-lg hover:bg-white hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-amber-300 ${bebasNeue.className}`}
            >
              Get Involved
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
