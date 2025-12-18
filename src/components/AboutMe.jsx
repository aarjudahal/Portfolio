import { useState } from "react";

import Story from "../details/Story";
import SkillsList from "../details/SkillsList";
import JourneyTimeline from "../details/JourneyTimeline";
import Values from "../details/Values";

const tabs = ["Story", "Skills", "Journey", "Values"];

export default function AboutSection() {
  const [active, setActive] = useState("Story");

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-purple-100 via-purple-300" />

      <div className="mx-auto max-w-6xl px-6">
        {/* Tabs */}
        <div className="mx-auto mb-16 flex w-fit rounded-full bg-purple-400 p-2 shadow-lg">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${
                active === tab
                  ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {active === "Story" && <Story />}
        {active === "Skills" && <SkillsList />}
        {active === "Journey" && <JourneyTimeline />}
        {active === "Values" && <Values />}
      </div>
    </section>
  );
}
