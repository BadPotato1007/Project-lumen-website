import React from "react";

import { bebasNeue } from "@/lib/fonts";

const PlaneSpecs = () => {
  return (
    <section id="plane-specs" className="bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-20">
      <div className="container mx-auto px-6 lg:px-12 text-left">
        <h3 className={`text-5xl font-semibold text-amber-400 mb-8 ${bebasNeue.className}`}>Plane Specifications</h3>

        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse border border-gray-600">
            <thead>
              <tr className="bg-gray-800">
                <th className={`px-6 py-3 text-left text-2xl font-semibold text-amber-400 border-b border-gray-500  ${bebasNeue.className}`}>Specification</th>
                <th className={`px-6 py-3 text-left text-2xl font-semibold text-amber-400 border-b border-gray-500  ${bebasNeue.className}`}>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-900 hover:bg-gray-800">
                <td className="px-6 py-4 text-gray-300">Wingspan</td>
                <td className="px-6 py-4 text-gray-300">7100mm</td>
              </tr>
              <tr className="bg-gray-900 hover:bg-gray-800">
                <td className="px-6 py-4 text-gray-300">Length</td>
                <td className="px-6 py-4 text-gray-300">2100mm</td>
              </tr>
              <tr className="bg-gray-900 hover:bg-gray-800">
                <td className="px-6 py-4 text-gray-300">Wing Chord</td>
                <td className="px-6 py-4 text-gray-300">235mm</td>
              </tr>
              <tr className="bg-gray-900 hover:bg-gray-800">
                <td className="px-6 py-4 text-gray-300">Weight</td>
                <td className="px-6 py-4 text-gray-300">5.5kgs</td>
              </tr>
              <tr className="bg-gray-900 hover:bg-gray-800">
                <td className="px-6 py-4 text-gray-300">Motor</td>
                <td className="px-6 py-4 text-gray-300">Tarot 4006 320kv</td>
              </tr>
              <tr className="bg-gray-900 hover:bg-gray-800">
                <td className="px-6 py-4 text-gray-300">Battery</td>
                <td className="px-6 py-4 text-gray-300">6s 40ah Li-ion</td>
              </tr>
              <tr className="bg-gray-900 hover:bg-gray-800">
                <td className="px-6 py-4 text-gray-300">Propeller</td>
                <td className="px-6 py-4 text-gray-300">21 inches</td>
              </tr>
              <tr className="bg-gray-900 hover:bg-gray-800">
                <td className="px-6 py-4 text-gray-300">Communications</td>
                <td className="px-6 py-4 text-gray-300">RTL8112AU powered Ruby FPV at 5GHz</td>
              </tr>
              <tr className="bg-gray-900 hover:bg-gray-800">
                <td className="px-6 py-4 text-gray-300">Camera</td>
                <td className="px-6 py-4 text-gray-300">Raspberry Pi v1 Cam</td>
              </tr>
              <tr className="bg-gray-900 hover:bg-gray-800">
                <td className="px-6 py-4 text-gray-300">Frame</td>
                <td className="px-6 py-4 text-gray-300">Carbon Fiber</td>
              </tr>
              <tr className="bg-gray-900 hover:bg-gray-800">
                <td className="px-6 py-4 text-gray-300">Shell</td>
                <td className="px-6 py-4 text-gray-300">Foam</td>
              </tr>
              <tr className="bg-gray-900 hover:bg-gray-800">
                <td className="px-6 py-4 text-gray-300">Autopilot</td>
                <td className="px-6 py-4 text-gray-300">ArduPilot</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default PlaneSpecs;
