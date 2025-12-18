import React from "react";

export default function SendMessage() {
  return (
    <>
      <form className="bg-[#F6E6EA]/90 border border-[#F6E6EA]/50 rounded-xl p-8 flex flex-col gap-5 shadow-lg">
        <h2 className="text-2xl font-semibold text-[#1C1C1C] mb-4">
          Send me a message 💌
        </h2>

        <input
          type="text"
          placeholder="Your Name"
          className="bg-transparent border-b border-[#D1A0AB]/60 px-4 py-3 text-[#1C1C1C] placeholder:text-[#9CA3AF] focus:outline-none focus:border-pink-400 transition"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="bg-transparent border-b border-[#D1A0AB]/60 px-4 py-3 text-[#1C1C1C] placeholder:text-[#9CA3AF] focus:outline-none focus:border-pink-400 transition"
        />

        <textarea
          rows="5"
          placeholder="Your Message"
          className="bg-transparent border-b border-[#D1A0AB]/60 px-4 py-3 text-[#1C1C1C] placeholder:text-[#9CA3AF] focus:outline-none focus:border-pink-400 transition"
        />

        <button
          type="submit"
          className="mt-4 bg-pink-400 hover:bg-pink-500 text-black font-medium py-3 rounded-lg transition shadow-sm"
        >
          Send Message
        </button>
      </form>

      {/* Right-side card */}
      <div className="bg-[#F6E6EA]/90 border border-[#F6E6EA]/50 rounded-xl p-8 shadow-sm flex flex-col gap-4">
        <h3 className="text-2xl font-semibold text-[#1C1C1C]">Let’s chat! 💬</h3>
        <p className="text-[#6B7280] leading-relaxed">
          I’m always open to collaborations, projects, or a friendly hello. 
          Drop me a message, and let’s create something amazing together!
        </p>
        <div className="flex flex-col gap-2 mt-4 text-[#1C1C1C] font-medium">
          <p>📧 aarju.dahal.80@gmail.com</p>
          <p>📍 Nepal</p>
        </div>
      </div>
    </>
  );
}
