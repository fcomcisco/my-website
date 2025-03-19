"use client";

import { useState } from "react";
import Image from "next/image";
import { ReactTyped } from "react-typed";
import VantaBackground from "./VantaBackground";
const nextconfig = require("../next.config")

export default function AboutMe() {
    const [firstCompleted, setFirstCompleted] = useState(false);

  return (
    <section
      id="Aboutme"
      className="h-screen flex flex-col items-center justify-center relative overflow-hidden"
    >
      {/* Vanta Background */}
      <VantaBackground />

      {/* Profile Picture */}
      <div className="mb-6 relative z-10">
        <div className="w-40 h-40 relative rounded-full overflow-hidden border-4 border-gray-300">
          <Image
            src={`${nextconfig.basePath}/images/chest.png`}
            alt="Profile Picture"
            width={160}
            height={160}
            className="object-cover"
          />
        </div>
      </div>

      {/* Typed Title */}
      <h2 className="text-3xl font-bold mb-2 relative z-10">
        {firstCompleted ? (
          "Hi, my name is Francisco Montecinos"
        ) : (
          <ReactTyped
            strings={["Hi, my name is Francisco Montecinos"]}
            typeSpeed={50}
            backSpeed={30}
            backDelay={1500}
            loop={false}
            showCursor={true}
            onComplete={() => setFirstCompleted(true)}
          />
        )}
      </h2>

      {/* Subtitle/Description */}
      {firstCompleted && (
        <p className="text-xl text-white relative z-10">
          <ReactTyped
            strings={["and I am a Software Developer."]}
            typeSpeed={50}
            backSpeed={30}
            backDelay={1500}
            loop={false}
            showCursor={true}
          />
        </p>
      )}

    </section>
  );
}
