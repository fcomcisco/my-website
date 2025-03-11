"use client";

import { ReactTyped } from "react-typed";
import {
  SiJavascript,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiThreedotjs,
  SiNodedotjs,
} from "react-icons/si";
import VantaBackground from "./VantaBackground";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Vanta Background */}
      <VantaBackground />

      {/* Content Container */}
      <div className="relative z-10 text-center">
        <h2 className="text-4xl font-bold mb-8 text-white">
          <ReactTyped strings={["Skills"]} typeSpeed={100} showCursor={true} />
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-6">
          <SiJavascript className="text-8xl text-yellow-500 transition transform hover:scale-110" />
          <SiPython className="text-8xl text-blue-400 transition transform hover:scale-110" />
          <SiReact className="text-8xl text-cyan-500 transition transform hover:scale-110" />
          <SiNextdotjs className="text-8xl text-white transition transform hover:scale-110" />
          <SiTailwindcss className="text-8xl text-sky-500 transition transform hover:scale-110" />
          <SiTypescript className="text-8xl text-blue-500 transition transform hover:scale-110" />
          <SiThreedotjs className="text-8xl text-white transition transform hover:scale-110" />
          <SiNodedotjs className="text-8xl text-green-500 transition transform hover:scale-110" />
        </div>
      </div>
    </section>
  );
}
