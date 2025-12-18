import React from "react";
import { Link } from "react-router-dom";
import SkillsList from "../details/SkillsList";


export default function Skills() {
  return (
    <section
      id="skills"
      className="max-w-7xl mx-auto px-6 py-24 flex flex-col items-center"
    >
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-clash text-center mb-4 text-[#1C1C1C]">
        Skills
      </h1>

      <p className="text-center text-[#6B7280] mb-16 max-w-2xl">
        Technologies and tools I use to build clean, modern, and user-friendly
        web applications.
      </p>

      {/* Skills Grid */}
      <SkillsList />

      {/* CTA Box */}
      <div className="w-full max-w-4xl mt-24 bg-[#F6E6EA]/90 border border-[#F6E6EA]/50 rounded-3xl p-10 flex flex-col items-center text-center shadow-lg">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#1C1C1C] mb-4">
          Ready to collaborate? 🤝
        </h2>

        <p className="text-[#6B7280] mb-8 max-w-xl">
          Let’s work together and turn your ideas into fast, beautiful, and
          functional web experiences.
        </p>

        <div className="flex gap-4 flex-wrap justify-center">
          <Link
            to="/projects"
            className="px-6 py-3 rounded-full bg-pink-400 hover:bg-pink-500 text-black font-medium transition"
          >
            View Projects
          </Link>

          <Link
            to="/contact"  state={{ tab: "info" }}
            className="px-6 py-3 rounded-full border border-[#1C1C1C]/20 hover:bg-black/5 transition"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
