// components/Projects.tsx
"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import VantaBackground from "./VantaBackground";
import nextConfig from "../next.config.mjs";

// Define types for tags and projects
interface Tag {
  label: string;
  classes: string;
  style?: React.CSSProperties;
}

interface Project {
  id: number;
  title: string;
  image: string;
  alt: string;
  description: string;
  tags: Tag[];
  href: string;
}

export default function Projects(): JSX.Element {
  // Ensure correct typing for basePath
  const { basePath } = nextConfig as { basePath: string };

  // Array of project definitions
  const projects: Project[] = [
    {
      id: 1,
      title: "Tempor",
      image: `${basePath}/images/tempor.png`,
      alt: "Tempor Project Screenshot",
      description:
        "MVP built in my last year of university: a web app for quick job posts. Employers post jobs, employees browse and connect.",
      tags: [
        { label: "React", classes: "bg-[#61DAFB] text-black" },
        { label: "Tailwind CSS", classes: "bg-[#38BDF8] text-black" },
        { label: "HTML", classes: "bg-[#F7DF1E] text-black" },
        { label: "Firebase Database", classes: "bg-[#FFCA28] text-black" },
        { label: "Node.js", classes: "bg-[#339933] text-white" },
        { label: "SCRUM", classes: "bg-gradient-to-r from-[#007ACC] to-[#00B4D8] text-white" },
      ],
      href: "/projects/tempor",
    },
    {
      id: 2,
      title: "Retina scanner",
      image: `${basePath}/images/retina.png`,
      alt: "Retina Scanner Screenshot",
      description:
        "Master's project script: layers .tiff images, visualizes cells, and compares counts efficiently on older machines.",
      tags: [
        { label: "Python", classes: "bg-gradient-to-r from-[#3776AB] to-[#FFD43B] text-black" },
        {
          label: "OpenCV",
          classes: "text-white",
          style: { background: "linear-gradient(90deg, #5CBB5A 0%, #EA4335 50%, #4285F4 100%)" },
        },
      ],
      href: "/projects/retina-scanner",
    },
    {
      id: 3,
      title: "Portfolio",
      image: `${basePath}/images/portfolio.png`,
      alt: "Portfolio Screenshot",
      description:
        "This portfolio site showcasing my work, built with Next.js and Tailwind CSS. Also used to learn and practice Typscript.",
      tags: [
        { label: "Next.js", classes: "bg-black text-white" },
        { label: "TypeScript", classes: "bg-[#3178C6] text-white" },
        { label: "Tailwind CSS", classes: "bg-[#38BDF8] text-black" },
      ],
      href: "/projects/portfolio",
    },
    {
      id: 4,
      title: "Gatlier portfolio",
      image: `${basePath}/images/gatlier.png`,
      alt: "Project Four Screenshot",
      description: "Designed to provide a clean, responsive, and fast-loading online presence for a model, without relying on frameworks or external libraries. Focused on semantic structure, visual appeal, and cross-device compatibility.",
      tags: [
        { label: "Html", classes: "bg-[#F7DF1E] text-black" },
        { label: "CSS", classes: "bg-purple-500 text-white" },
      ],
      href: "/projects/project-four",
    },
  ];

  // Carousel state
  const [start, setStart] = useState<number>(0);
  const maxStart: number = projects.length - 3;

  const handlePrev = (): void => {
    setStart((prev) => (prev > 0 ? prev - 1 : maxStart));
  };

  const handleNext = (): void => {
    setStart((prev) => (prev < maxStart ? prev + 1 : 0));
  };

  return (
    <div className="relative">
      {/* Vanta background */}
      <VantaBackground />

      <section id="projects" className="py-12 relative">
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-4xl font-bold mb-8 text-white">Projects</h2>

          {/* Carousel wrapper */}
          <div className="flex items-center justify-center gap-4">
            {/* Prev arrow */}
            <button
              onClick={handlePrev}
              className="text-white hover:text-blue-300 p-2 select-none"
              aria-label="Previous projects"
            >
              <span className="text-4xl">❮</span>
            </button>

            {/* Cards display */}
            <div className="grid gap-10 grid-cols-1 md:grid-cols-3">
              {projects.slice(start, start + 3).map((proj) => (
                <div
                  key={proj.id}
                  className="relative bg-black/70 p-6 pb-16 rounded-lg shadow-lg hover:shadow-xl transition mx-auto"
                >
                  <Image
                    src={proj.image}
                    alt={proj.alt}
                    width={900}
                    height={500}
                    className="rounded mb-4"
                    unoptimized
                  />
                  <h3 className="text-2xl font-bold text-white mb-2">{proj.title}</h3>
                  <p className="text-white">{proj.description}</p>

                  <div className="flex flex-wrap gap-2 mt-4 justify-center">
                    {proj.tags.map((tag, i) => (
                      <span
                        key={i}
                        className={`${tag.classes} text-xs font-semibold px-2.5 py-0.5 rounded`}
                        style={tag.style}
                      >
                        {tag.label}
                      </span>
                    ))}
                  </div>

                  <div className="absolute bottom-4 right-4 z-20">
                    <Link
                      href={proj.href}
                      className="text-blue-600 font-semibold hover:underline transition cursor-pointer"
                    >
                      Read More...
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Next arrow */}
            <button
              onClick={handleNext}
              className="text-white hover:text-blue-300 p-2 select-none"
              aria-label="Next projects"
            >
              <span className="text-4xl">❯</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
