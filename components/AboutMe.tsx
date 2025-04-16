"use client";

import { useState } from "react";
import Image from "next/image";
import { ReactTyped } from "react-typed";
import VantaBackground from "./VantaBackground";
import nextconfig from "../next.config.mjs";

export default function AboutMe() {
  const [firstCompleted, setFirstCompleted] = useState(false);

  return (
    <section
      id="profile"
      // Added px-4 for horizontal padding on small devices
      className="h-screen flex flex-col items-center justify-center relative overflow-hidden px-4"
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
      <h2 className="text-3xl font-bold mb-2 relative z-10 text-center">
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
        <p className="text-xl text-white relative z-10 text-center">
          <ReactTyped
            strings={[
              "I hold a degree in computer science and am passionate about technology and continuous learning. As a full-stack developer with diverse experience, I’ve recently focused on enhancing my Frontend skills to craft engaging, user-friendly experiences. I look forward to applying my technical expertise to innovative projects and embracing new challenges along the way."
            ]}
            typeSpeed={20}
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
