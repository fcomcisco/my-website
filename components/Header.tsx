"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [activeSection, setActiveSection] = useState("profile");
  const [menuOpen, setMenuOpen] = useState(false);

  // Intersection Observer for active section highlighting
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

  // Smooth scroll function
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-black/60 text-white z-50 backdrop-blur-sm">
      {/* Top Bar: All items aligned to the left */}
      <div className="container mx-auto px-4 py-4 flex items-center justify-start gap-4">
        {/* Hamburger Icon: visible on mobile */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </div>
        </button>
        {/* Desktop Navigation (visible on medium screens and up) */}
        <nav className="hidden md:flex space-x-6">
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
            About Me
          </a>
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
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("projects");
            }}
            className={`transition-colors hover:text-[#2d42ff] ${
              activeSection === "projects" ? "text-[#2d42ff]" : "text-white"
            }`}
          >
            Projects
          </a>
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
        </nav>
      </div>

      {/* Mobile Overlay Navigation */}
      <div
        className={`
          md:hidden fixed top-0 left-0 h-full w-full bg-black bg-opacity-90 
          transform transition-transform duration-300
          ${menuOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Close Button */}
        <div className="container mx-auto px-4 py-4 flex justify-end">
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close Menu"
            className="text-3xl"
          >
            &times;
          </button>
        </div>
        {/* Mobile Nav Links, aligned to the left */}
        <nav className="flex flex-col items-start justify-center space-y-8 mt-20 ml-4 text-2xl">
          <a
            href="#profile"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("profile");
              setMenuOpen(false);
            }}
            className={`transition-colors hover:text-[#2d42ff] ${
              activeSection === "profile" ? "text-[#2d42ff]" : "text-white"
            }`}
          >
            About Me
          </a>
          <a
            href="#skills"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("skills");
              setMenuOpen(false);
            }}
            className={`transition-colors hover:text-[#2d42ff] ${
              activeSection === "skills" ? "text-[#2d42ff]" : "text-white"
            }`}
          >
            Skills
          </a>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("projects");
              setMenuOpen(false);
            }}
            className={`transition-colors hover:text-[#2d42ff] ${
              activeSection === "projects" ? "text-[#2d42ff]" : "text-white"
            }`}
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
              setMenuOpen(false);
            }}
            className={`transition-colors hover:text-[#2d42ff] ${
              activeSection === "contact" ? "text-[#2d42ff]" : "text-white"
            }`}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
