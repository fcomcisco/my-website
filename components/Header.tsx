"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  // Set default active section to "profile"
  const [activeSection, setActiveSection] = useState("profile");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 bg-black/60 text-white z-50 backdrop-blur-sm">
      <nav className="container mx-auto flex justify-between items-center py-4">
        <div className="text-2xl font-bold">Cisco</div>
        <ul className="flex space-x-6">
          <li>
            <Link
              href="#profile"
              className={`hover:text-[#2d42ff] transition-colors ${
                activeSection === "profile" ? "underline decoration-[#2d42ff]" : ""
              }`}
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              href="#skills"
              className={`hover:text-[#2d42ff] transition-colors ${
                activeSection === "skills" ? "underline decoration-[#2d42ff]" : ""
              }`}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className={`hover:text-[#2d42ff] transition-colors ${
                activeSection === "contact" ? "underline decoration-[#2d42ff]" : ""
              }`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
