// components/Projects.tsx
"use client";
// all the images here has to be w ${basePath} because workflow things
import Image from "next/image";
import Link from "next/link";
import VantaBackground from "./VantaBackground";
import nextConfig from "../next.config.mjs";

export default function Projects() {
  const { basePath } = nextConfig;

  return (
    <div className="relative">
      {/* VantaBackground rendered behind the content */}
      <VantaBackground />

      {/* IMAGES AT 900 x 500 to keep harmony */}
      <section id="projects" className="py-12 relative">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-white">Projects</h2>
          {/* Increased gap to 10 for more space between cards */}
          <div className="grid gap-10 grid-cols-1 md:grid-cols-2">

            {/* Card 1 - Tempor */}
            <div className="relative bg-black/70 p-6 pb-16 rounded-lg shadow-lg hover:shadow-xl transition max-w-lg mx-auto">
              {/* Project Image */}
              <Image
                src={`${basePath}/images/workingonit.png`}
                alt="Tempor Project Screenshot"
                width={900}
                height={500}
                className="rounded mb-4"
                unoptimized
              />
              {/* Project Title */}
              <h3 className="text-2xl font-bold text-white mb-2">Tempor</h3>
              {/* Project Description */}
              <p className="text-white">
                This is a web app designed to post quick jobs. There are two types of
                users: employers and employees. Employers can post jobs, while employees
                can view these jobs and initiate connections.
              </p>
              {/* Technology Tags */}
              <div className="flex flex-wrap gap-2 mt-4 justify-center">
                <span className="bg-purple-200 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                  React
                </span>
                <span className="bg-blue-200 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                  Tailwind CSS
                </span>
                <span className="bg-yellow-200 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                  HTML
                </span>
                <span className="bg-orange-200 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                  Firebase Database
                </span>
                <span className="bg-green-200 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                  Node.js
                </span>
              </div>
              {/* "Read More" Link positioned at the bottom-right */}
              <div className="absolute bottom-4 right-4 z-20">
                <Link
                  href="/projects/tempor"
                  className="text-blue-600 font-semibold hover:underline transition cursor-pointer"
                >
                  Read More...
                </Link>
              </div>
            </div>

            {/* Card 2 - Retina scanner */}
            <div className="relative bg-black/70 p-6 pb-16 rounded-lg shadow-lg hover:shadow-xl transition max-w-lg mx-auto">
              {/* Project Image */}
              <Image
                src={`${basePath}/images/retina.png`}
                alt="Retina Scanner Project Screenshot"
                width={900}
                height={500}
                className="rounded mb-4"
                unoptimized
              />
              {/* Project Title */}
              <h3 className="text-2xl font-bold text-white mb-2">Retina scanner</h3>
              {/* Project Description */}
              <p className="text-white">
                This script was developed for a master’s project. It opens a .tiff image
                and creates layers from it, allowing for a clearer visualization of the
                cells. The images are then compared to determine the differences in cell
                counts. The script is lightweight, ensuring it can run on older machines.
              </p>
              {/* Technology Tags */}
              <div className="flex flex-wrap gap-2 mt-4 justify-center">
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                  Python
                </span>
                <span
                  className="text-xs font-semibold px-2.5 py-0.5 rounded"
                  style={{
                    background:
                      "linear-gradient(90deg, #BBF7D0 0%, #BBF7D0 33%, #FECACA 33%, #FECACA 67%, #BFDBFE 67%, #BFDBFE 100%)",
                    color: "#000",
                  }}
                >
                  OpenCV
                </span>
              </div>
              {/* "Read More" Link positioned at the bottom-right */}
              <div className="absolute bottom-4 right-4 z-20">
                <Link
                  href="/projects/retina-scanner"
                  className="text-blue-600 font-semibold hover:underline transition cursor-pointer"
                >
                  Read More...
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
