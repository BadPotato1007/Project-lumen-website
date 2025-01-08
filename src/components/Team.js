"use client";

import Image from "next/image";

import { bebasNeue } from "@/lib/fonts";

export default function Team() {
  const teamMembers = [
    {
      name: "Neerav Gupta",
      title: "Lead designer and hardware expert passionate about aerodynamics.",
      image: "https://i.ibb.co/khP1ZXB/20240609-151024.jpg",
    },
    {
      name: "Joel Joby",
      title: "Software expert helping configure autonomous capabilities",
      image: "https://i.ibb.co/87B5WmK/Screenshot-20241016-202349-Slack.jpg",
    },
    {
      name: "Nikolai",
      title: "Lead CAD designer and design specialist",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHUZ8YGjMZOeFMEFWaiMF4SBQ20kjYtD07CH9hY-NiaKe0gFE6M0bPXMuk&s=10"
    },
    {
      name: "Dhruva Srinivas",
      title: "Lead web designer and developer",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHUZ8YGjMZOeFMEFWaiMF4SBQ20kjYtD07CH9hY-NiaKe0gFE6M0bPXMuk&s=10"
    },

  ];

  return (
    <section className="bg-black text-white py-16" id="team">
      <div className="container mx-auto px-6">
        <h2 className={`text-6xl font-bold text-center text-amber-400 mb-12 ${bebasNeue.className}`}>
          The Team
        </h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg p-6 text-center"
            >
              <div className="flex justify-center mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  className="w-36 h-36 object-cover rounded-full shadow-md"
                  width={144}
                  height={144}
                />
              </div>
              <h3 className={`text-2xl font-semibold text-amber-400 ${bebasNeue.className}`}>
                {member.name}
              </h3>
              <p className="mt-2 text-gray-300">{member.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
