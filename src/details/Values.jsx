import { motion } from "framer-motion";
import { valuesData } from "../data/AboutContent";

export default function Values() {
  return (
    <section className="relative py-5">
      <h2 className="mb-10 text-center text-4xl font-bold text-blue-600">
        My Values
      </h2>

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {valuesData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#1a2f6f] rounded-2xl p-6 shadow-lg flex flex-col items-center text-center"
            >
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-slate-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
