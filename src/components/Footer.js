"use client";

import { bebasNeue } from "@/lib/fonts";

export default function Footer() {
  return (
    <footer className={`bg-black text-gray-400 py-6 ${bebasNeue.className}`}>
      <div className="container mx-auto px-6 text-center">
        <p className="text-xl">
          © 2024 <span className="text-amber-400">Project Lumen</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
