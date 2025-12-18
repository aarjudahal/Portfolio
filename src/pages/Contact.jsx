import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SendMessage from "../details/SendMessage";
import GetInTouch from "../details/GetInTouch";

export default function Contact() {
  const location = useLocation();
  const initialTab = location.state?.tab || "message"; // fallback to "message"
  const [tab, setTab] = useState(initialTab);

  // Ensure tab updates if location.state changes (optional)
  useEffect(() => {
    if (location.state?.tab) {
      setTab(location.state.tab);
    }
  }, [location.state]);

  return (
    <section
      id="contact"
      className="max-w-full mx-auto px-6 py-20 bg-[#F6E6EA] rounded-2xl relative overflow-hidden"
    >
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-clash text-center mb-4 text-[#1C1C1C]">
        Let’s Connect
      </h1>
      <p className="text-center text-[#6B7280] mb-12">
        Let’s build something meaningful together.
      </p>

      {/* Toggle Buttons */}
      <div className="flex justify-center mb-12">
        <div className="relative flex bg-white rounded-full p-1 w-[320px] shadow-md">
          {/* Sliding Indicator */}
          <div
            className={`absolute top-1 left-1 w-1/2 h-[40px] rounded-full bg-pink-400 transition-all duration-300 ${
              tab === "info" ? "translate-x-full" : ""
            }`}
          />

          <button
            onClick={() => setTab("message")}
            className={`relative z-10 w-1/2 py-2 text-sm font-semibold transition ${
              tab === "message" ? "text-white" : "text-gray-700"
            }`}
          >
            Send Message
          </button>

          <button
            onClick={() => setTab("info")}
            className={`relative z-10 w-1/2 py-2 text-sm font-semibold transition ${
              tab === "info" ? "text-white" : "text-gray-700"
            }`}
          >
            Get In Touch
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {tab === "message" && <SendMessage />} 
       </div>
       {tab === "info" && <GetInTouch />}
    </section>
  );
}
