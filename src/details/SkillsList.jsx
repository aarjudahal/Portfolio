import React from "react";
import { skillsData } from "../data/AboutContent";

export default function SkillsList() {
  return (
    <div className="space-y-12">
     <h2 className="text-4xl font-bold text-blue-600 text-center">My Skills</h2>
    
    <div className="grid gap-8 w-full md:grid-cols-2 lg:grid-cols-4">
      {skillsData.map((skill, index) => (
        <div
          key={index}
          className="bg-white/70 backdrop-blur-md border border-white/40 rounded-2xl p-8 shadow-lg hover:shadow-xl transition"
        >
          {/* Icon */}
          <div className="text-4xl mb-4" style={{ color: skill.color }}>
            {skill.icon}
          </div>

          {/* Skill title */}
          <h3 className="text-xl font-semibold text-[#1C1C1C] mb-2">
            {skill.title}
          </h3>

          {/* Description */}
          <p className="text-[#6B7280] text-sm leading-relaxed mb-4">
            {skill.description}
          </p>

          {/* Progress bar */}
          <div className="flex items-center gap-2">
            <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-3 rounded-full transition-all duration-500"
                style={{
                  width: `${skill.percentage}%`,
                  backgroundColor: skill.color,
                }}
              />
            </div>
            <span className="text-sm font-semibold text-[#1C1C1C]">
              {skill.percentage}%
            </span>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}
