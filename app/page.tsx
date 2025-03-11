"use client";

import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

export default function HomePage() {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth">
      <section id="profile" className="h-screen snap-start">
        <AboutMe />
      </section>
      <section id="skills" className="h-screen snap-start">
        <Skills />
      </section>
      <section id="contact" className="h-screen snap-start">
        <Contact />
      </section>
    </div>
  );
}
