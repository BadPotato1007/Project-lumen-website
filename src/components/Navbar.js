"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { bebasNeue } from "@/lib/fonts";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`${bebasNeue.className} bg-black shadow-lg border-b-2 border-b-gray-700`}>
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <div className="flex items-center space-x-3">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/lumen-logo.png"
              alt="Project Lumen Logo"
              width={48}
              height={48}
              className="h-12 w-12 object-contain"
            />
            <h1 className="text-3xl text-amber-400 font-semibold cursor-pointer">
              Project <span className="text-amber-400">Lumen</span>
            </h1>
          </Link>
        </div>

        {/* hamburger menu btn */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-amber-400 focus:outline-none z-10"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* desktop */}
        <div className="hidden lg:flex lg:items-center lg:space-x-6">
          <ul className="flex items-center space-x-6">
            <li>
              <Link className="text-xl text-amber-400 hover:text-white" href="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="text-xl text-amber-400 hover:text-white" href="/team">
                Team
              </Link>
            </li>
            <li>
              <Link className="text-xl text-amber-400 hover:text-white" href="/sponsors">
                Sponsors
              </Link>
            </li>
            <li>
              <Link
                href="/donate"
                className="relative px-6 py-2 bg-amber-400 text-black font-bold rounded-sm text-xl hover:bg-white hover:scale-110 transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-amber-300 shadow-lg"
              >
                Donate
                {/* button glow effect */}
                <span className="absolute inset-0 bg-amber-400 opacity-20 rounded-full blur-lg animate-pulse"></span>
              </Link>
            </li>
          </ul>
        </div>

        {/* mobile menu */}
        <div
          className={`lg:hidden fixed top-0 left-0 w-full bg-black min-h-screen ${isOpen ? "block" : "hidden"} z-20`}
        >
          <div className="flex justify-end p-6">
            <button
              onClick={() => setIsOpen(false)}
              className="text-amber-400 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <ul className="flex flex-col items-center space-y-4 px-6 py-4">
            <li>
              <Link className="text-xl text-amber-400 hover:text-white" href="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="text-xl text-amber-400 hover:text-white" href="/team">
                Team
              </Link>
            </li>
            <li>
              <Link className="text-xl text-amber-400 hover:text-white" href="/sponsors">
                Sponsors
              </Link>
            </li>
            <li>
              <Link className="text-xl bg-amber-400 text-black font-bold px-6 py-2 rounded-full shadow-lg hover:bg-white hover:scale-105 transition-transform duration-300" href="/donate">
                Donate
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
