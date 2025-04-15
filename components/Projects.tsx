// components/Projects.tsx
"use client";

// all the images here as to be w ${basePath} , workflow things

import Image from "next/image";
import Link from "next/link";
import VantaBackground from "./VantaBackground";
import nextConfig from "../next.config.mjs";

export default function Projects() {
  const { basePath } = nextConfig;

  return (
    <div className="relative">
      <VantaBackground />

      <section id="projects" className="py-12 relative">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-white">Projects</h2>
          <div className="grid gap-10 grid-cols-1 md:grid-cols-2">

            {/* Card 1 – Tempor */}
            <div className="relative bg-black/70 p-6 pb-16 rounded-lg shadow-lg hover:shadow-xl transition max-w-lg mx-auto">
              <Image
                src={`${basePath}/images/workingonit.png`}
                alt="Tempor Project Screenshot"
                width={900}
                height={500}
                className="rounded mb-4"
                unoptimized
              />
              <h3 className="text-2xl font-bold text-white mb-2">Tempor</h3>
              <p className="text-white">
                This is a web app designed to post quick jobs. Employers can post
                jobs, and employees can view and connect.
              </p>
              <div className="flex flex-wrap gap-2 mt-4 justify-center">
                {/* tags… */}
              </div>
              <div className="absolute bottom-4 right-4 z-20">
                <Link
                  href="/projects/tempor"
                  className="text-blue-600 font-semibold hover:underline transition"
                >
                  Read More…
                </Link>
              </div>
            </div>

            {/* Card 2 – Retina scanner */}
            <div className="relative bg-black/70 p-6 pb-16 rounded-lg shadow-lg hover:shadow-xl transition max-w-lg mx-auto">
              <Image
                src={`${basePath}/images/retina.png`}
                alt="Retina Scanner Project Screenshot"
                width={900}
                height={500}
                className="rounded mb-4"
                unoptimized
              />
              <h3 className="text-2xl font-bold text-white mb-2">
                Retina scanner
              </h3>
              <p className="text-white">
                A master’s project script: opens a TIFF, creates layers for cell
                visualization, and compares images for cell‐count diffs.
              </p>
              <div className="flex flex-wrap gap-2 mt-4 justify-center">
                {/* tags… */}
              </div>
              <div className="absolute bottom-4 right-4 z-20">
                <Link
                  href="/projects/retina-scanner"
                  className="text-blue-600 font-semibold hover:underline transition"
                >
                  Read More…
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
