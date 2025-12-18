import { motion } from "framer-motion";
import { FaLaptopCode, FaPalette, FaUniversalAccess } from "react-icons/fa";
import { storyData } from "../data/AboutContent";

export default function Story() {
  return (
    <div className="space-y-12">
      {/* Heading centered across both columns */}
      <motion.h2
        className="text-4xl font-bold text-blue-600 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        My Story
      </motion.h2>

      {/* Two-column content */}
      <div className="grid gap-12 md:grid-cols-2 items-center">
        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4"
        >
          <p className="text-black leading-relaxed">
            {storyData[0].description}
          </p>
          <p className="text-black/70 leading-relaxed">
            When I'm not coding, I enjoy designing UI concepts and listening to music.
          </p>
        </motion.div>

        {/* Right column */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-white/10 backdrop-blur p-8 shadow-xl"
        >
          <ul className="space-y-4 text-black text-center md:text-left">
            <li className="flex items-center gap-3 justify-center md:justify-start">🌍 Based in Nepal</li>
            <li className="flex items-center gap-3 justify-center md:justify-start"><FaLaptopCode /> Frontend Developer</li>
            <li className="flex items-center gap-3 justify-center md:justify-start"><FaUniversalAccess /> Accessibility Advocate</li>
            <li className="flex items-center gap-3 justify-center md:justify-start"><FaPalette /> UI / UX Enthusiast</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
