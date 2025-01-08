"use client";

import { bebasNeue } from "@/lib/fonts";
import { extend } from '@react-three/fiber';
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";
import { Suspense, useRef, useState, useEffect } from "react";

function RCPlane() {
  const geometry = useLoader(STLLoader, "/rc-plane-model.stl");
  const ref = useRef();
  const [started, setStarted] = useState(false);

  useEffect(() => {
    setStarted(true);
  }, []);

  // move plane forward along z-axis 
  useFrame(({ clock }) => {
    if (ref.current && started) {
      const time = clock.getElapsedTime();
      // move the plane from off-screen (z = 10) to the camera's view (z = 0)
      ref.current.position.z = Math.max(0, 10 - time * 4); // speed up the animation with multiplier
    }
  });

  return (
    <mesh ref={ref} geometry={geometry} scale={0.0025}>
      <meshStandardMaterial color="#F0F2F0" metalness={0.15} roughness={0.3} />
    </mesh>
  );
}

extend({ RCPlane });

export default function Hero() {
  const controlsRef = useRef();

  const handleResetView = () => {
    if (controlsRef.current) {
      controlsRef.current.reset();
    }
  };

  return (
    <section className={`relative bg-black text-white min-h-screen flex items-center justify-center overflow-hidden ${bebasNeue.className}`}>
      {/* background animation */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="absolute top-[-15%] left-[-10%] w-80 h-80 md:w-96 md:h-96 bg-amber-400 opacity-20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-60 h-60 md:w-72 md:h-72 bg-amber-400 opacity-30 rounded-full blur-2xl animate-pulse"></div>
      </div>

      <div className="relative container mx-auto text-center px-6">
        <h1 className="text-6xl md:text-8xl font-extrabold text-amber-400 leading-tight mt-6">
          Redefining Flight:
        </h1>
        <h2 className="text-4xl md:text-5xl font-semibold mt-2">
          Innovation That Soars Beyond Limits
        </h2>

        <div className="w-full h-[400px] md:h-[500px] mt-12">
          <Canvas camera={{ position: [0, 2, 8], fov: 60 }}>
            <Suspense
              fallback={
                <Html center>
                  <div className="text-center text-gray-400">Loading model...</div>
                </Html>
              }
            >
              <ambientLight intensity={0.4} />
              <directionalLight position={[10, 10, 10]} intensity={0.6} />
              <spotLight position={[0, 10, 0]} angle={0.15} intensity={0.8} />

              <RCPlane />

              <OrbitControls ref={controlsRef} enableZoom={true} />
            </Suspense>
          </Canvas>
        </div>

        <p className="text-lg text-gray-300 mt-4">
          Drag the mouse to rotate the model. Scroll to zoom in and out. <span className="cursor-pointer text-amber-400 hover:underline" onClick={handleResetView}>Click here to reset view</span>.
        </p>
      </div>
    </section>
  );
}
