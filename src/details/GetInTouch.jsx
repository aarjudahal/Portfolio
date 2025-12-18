import React from "react";
import { contacts } from "../data/Links.jsx";
import { motion } from "framer-motion";

export default function GetInTouch() {
  return (
    <section className=" w-full mx-auto px-6 py-5 flex flex-col items-center justify-center">
      <h1 className="text-4xl md:text-5xl font-clash text-center mb-6 text-[#1C1C1C]">
        Get In Touch
      </h1>
      <p className="text-center text-[#6B7280] mb-16 max-w-2xl">
        Choose any platform below to connect with me. I’m open to collaborations,
        projects, or just a friendly chat!
      </p>

      <div
        className="grid gap-10 w-full justify-center items-center"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        }}
      >
        {contacts.map((contact, index) => (
          <motion.a
            key={contact.label}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className={`flex flex-col items-center justify-center p-8 rounded-2xl shadow-lg transition-transform transform hover:scale-105 ${contact.bg} ${contact.hover} text-white`}
          >
            <div className="text-5xl mb-4">{contact.icon}</div>
            <h3 className="text-2xl font-semibold mb-2">{contact.label}</h3>
            <p className="text-sm text-white/80 text-center">{contact.description}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
