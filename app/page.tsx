"use client";
import { useState, useEffect } from "react";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

// Toast notification at top-right
function ToastNotice() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;
  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="bg-yellow-500/90 text-yellow-900 px-4 py-2 rounded shadow-lg flex items-center gap-2">
        ⚠️ This site is under development — you may encounter errors.
        <button onClick={() => setVisible(false)} className="ml-2 font-bold">×</button>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <ToastNotice />
      <div className="h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth">
        <section id="aboutme" className="h-screen snap-start">
          <AboutMe />
        </section>
        <section id="skills" className="h-screen snap-start">
          <Skills />
        </section>
        <section id="projects" className="h-screen snap-start">
          <Projects />
        </section>
        <section id="contact" className="h-screen snap-start relative">
          <Contact />
        </section>
      </div>
    </>
  );
}