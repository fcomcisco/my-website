"use client";

import { useEffect, useState } from "react";

export default function Header() {
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

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-black/60 text-white z-50 backdrop-blur-sm">
      <nav className="container mx-auto flex justify-between items-center py-4">
        <div className="text-2xl font-bold">Cisco</div>
        <ul className="flex space-x-6">
          <li>
            <a
              href="#profile"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("profile");
              }}
              className={`transition-colors hover:text-[#2d42ff] ${
                activeSection === "profile" ? "text-[#2d42ff]" : "text-white"
              }`}
            >
              Profile
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("skills");
              }}
              className={`transition-colors hover:text-[#2d42ff] ${
                activeSection === "skills" ? "text-[#2d42ff]" : "text-white"
              }`}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
              className={`transition-colors hover:text-[#2d42ff] ${
                activeSection === "contact" ? "text-[#2d42ff]" : "text-white"
              }`}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
