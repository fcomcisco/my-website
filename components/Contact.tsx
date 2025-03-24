"use client";

import { useState, useEffect } from "react";
import VantaBackground from "./VantaBackground";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
  
    const formElement = e.currentTarget;
  
    const formData = new FormData(formElement);
  
    try {
      const res = await fetch("https://formspree.io/f/mwplbzbe", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
  
      const result = await res.json();
      console.log("Form response:", result);
  
      if (res.ok || result.ok) {
        setStatus("success");
        formElement.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  };

  useEffect(() => {
    if (status === "success") {
      const timer = setTimeout(() => {
        setStatus("idle");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <section
      id="contact"
      className="relative h-screen flex items-center justify-center"
    >
      <VantaBackground />
      
      <div className="relative z-10 p-8 max-w-md w-full bg-black/50 backdrop-blur-sm rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-white mb-4">Contact</h2>
        {status === "success" ? (
          <p className="text-white text-xl">Your message was sent!</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-white mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
                className="w-full p-2 rounded bg-white/30 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-white mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full p-2 rounded bg-white/30 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-white mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Your Message"
                required
                className="w-full p-2 rounded bg-white/30 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full bg-[#100e8d] text-white p-2 rounded hover:bg-[#0b0969]/80 transition"
            >
              {status === "submitting" ? "Sending..." : "Send Message"}
            </button>
            {status === "error" && (
              <p className="text-red-500 text-sm">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}
