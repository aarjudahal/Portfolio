import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaEnvelope } from "react-icons/fa";
import profileImg from "../assets/images/profile.jpeg";
import { Link } from "react-router-dom";

export default function Hero() {
  const rotatingWords = ["modern", "interactive", "responsive", "dynamic"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2000); // change word every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
   <section id="home" className="relative w-full bg-gradient-to-t from-purple-100 via-purple-200">
  {/* Inner container */}
  <div className="max-w-6xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-12 items-center">
    
    {/* Left content */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      <h1 className="text-4xl md:text-4xl font-bold leading-tight">
        Hi, I’m <span className="text-blue-800/60 italic">Aarju</span>
        <br />
        I create{" "}
        <span className="text-cyan-300">{rotatingWords[currentWordIndex]}</span>{" "}
        & <span className="text-fuchsia-300">fast</span> web apps.
      </h1>

      <p className="text-slate-600 max-w-lg">
        Frontend developer specializing in React, Tailwind CSS, and smooth UI
        animations. I build responsive and visually stunning web applications.
      </p>

      <div className="flex gap-4 flex-wrap">
        <Link
          to="/projects"
          className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400/20 to-fuchsia-500/20 border border-white/10 hover:scale-105 transition"
        >
          View Projects
        </Link>

        <Link
          to="/contact"
          state={{ tab: "info" }}
          className="px-6 py-3 rounded-full border border-black hover:bg-blue-200 transition flex items-center gap-2"
        >
          <FaEnvelope /> Contact Me
        </Link>
      </div>
    </motion.div>

    {/* Right content */}
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex items-center justify-center relative"
    >
      <div className="relative rounded-full w-72 h-72 md:w-80 md:h-80 flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 shadow-xl">
        <motion.div
          animate={{ rotateY: 360 }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden shadow-lg"
        >
          <img
            src={profileImg}
            alt="Aarju profile"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </motion.div>

  </div>
</section>

  );
}
