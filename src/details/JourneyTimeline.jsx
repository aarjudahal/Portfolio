import { motion } from "framer-motion";
import { journeyData } from "../data/AboutContent";

export default function JourneyTimeline() {
  return (
    <section className="relative py-14">
      <h2 className="mb-20 text-center text-4xl font-bold text-blue-600">
        My Journey
      </h2>

      <div className="relative mx-auto max-w-6xl px-20">
        <div className="absolute left-1/2 top-0 h-full w-0.75 -translate-x-1/2 bg-cyan-400" />

        <div className="space-y-12">
          {journeyData.map((item, index) => (
            <motion.div
              key={`${item.year}-${index}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`relative flex w-full ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              <div className="absolute left-1/2 z-10 h-4 w-4 -translate-x-1/2 rounded-full bg-cyan-400 ring-4 ring-[#0b1d4d]" />

              <div className="w-md rounded-2xl bg-[#1a2f6f] p-6 shadow-lg">
                <span className="mb-2 block text-sm font-semibold text-cyan-300">
                  {item.year}
                </span>
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-slate-300">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
