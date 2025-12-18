import React from "react";
import cvFile from "../assets/images/cv.pdf"; // Make sure your PDF is in this path
import { FaDownload, FaEye } from "react-icons/fa";

export default function CV() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 text-center">
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-blue-600 mb-10">My CV</h2>
      <p className="text-slate-600 mb-8">
        Take a look at my professional experience and skills. You can download or view my CV.
      </p>

      {/* Buttons */}
      <div className="flex justify-center gap-4 flex-wrap">
        {/* Download CV */}
        <a
          href={cvFile}
          download="CV_Aarju.pdf"
          className="px-6 py-3 rounded-full bg-cyan-400 hover:bg-cyan-500 text-white font-medium transition flex items-center gap-2"
        >
          <FaDownload /> Download CV
        </a>

        {/* View CV */}
        <a
          href={cvFile}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-full border border-cyan-400 hover:bg-cyan-50 text-cyan-400 font-medium transition flex items-center gap-2"
        >
          <FaEye /> View CV
        </a>
      </div>
    </section>
  );
}
