import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGitAlt } from "react-icons/fa";
import { SiCanva } from "react-icons/si";

/* ================= STORY ================= */
export const storyData = [
  {
    year: "2022",
    title: "The Beginning",
    description:
      "I started my coding journey out of curiosity. Over time, I developed a passion for frontend development and building responsive, interactive web applications.",
  },
];

/* ================= SKILLS ================= */
export const skillsData = [
  {
    title: "React",
    skill: "React",
    icon: <FaReact />,
    description:
      "Building modern, component-based UIs with hooks, routing, and smooth animations.",
    color: "#61dafb",
    percentage: 80,
  },
  {
    title: "JavaScript",
    skill: "JavaScript",
    icon: <FaJs />,
    description:
      "Strong foundation in ES6+, async logic, DOM handling, and clean reusable code.",
    color: "#f7df1e",
    percentage: 85,
  },
  {
    title: "HTML",
    skill: "HTML",
    icon: <FaHtml5 />,
    description:
      "Semantic markup for accessible and SEO-friendly web pages.",
    color: "#e34f26",
    percentage: 90,
  },
  {
    title: "CSS / Tailwind",
    skill: "CSS / Tailwind",
    icon: <FaCss3Alt />,
    description:
      "Utility-first styling to build responsive, clean, and consistent UI quickly.",
    color: "#38b2ac",
    percentage: 85,
  },
  {
    title: "Git & GitHub",
    skill: "Git",
    icon: <FaGitAlt />,
    description:
      "Version control, collaboration, and clean commit history for scalable projects.",
    color: "#f1502f",
    percentage: 75,
  },
  {
    title: "Canva",
    skill: "Canva",
    icon: <SiCanva />,
    description:
      "Designing banners, thumbnails, and simple UI visuals with consistency.",
    color: "#a855f7",
    percentage: 70,
  },
];

/* ================= JOURNEY ================= */
export const journeyData = [
  {
    year: "2022",
    title: "Started Coding Journey",
    description:
      "Began learning web development with HTML, CSS, and JavaScript 💻",
  },
  {
  year: "2023",
  title: "First Project",
  description: "Ship Manager 🚌📦 Backend system built in PHP for handling vessel records, cargo tracking, user roles, and database-driven operations."
},

  {
    year: "2024",
    title: "Advanced Learning & Personal Projects",
    description:
      "Built multiple personal projects and explored React and TailwindCSS",
  },
  {
    year: "2025",
    title: "Internship",
    description:
      "Currently working as Frontend Developer Intern at ByteGurkha 💼",
  },
  {
    year: "2025",
    title: "Learning Continues",
    description:
      "Learning advanced React patterns, Vite, and TailwindCSS",
  },
];

/* ================= VALUES ================= */
export const valuesData = [
  {
    title: "Creativity",
    description:
      "I approach problems creatively and enjoy building visually appealing UI.",
  },
  {
    title: "Persistence",
    description: "I never give up when solving challenging problems.",
  },
  {
    title: "Collaboration",
    description: "I believe teamwork makes projects successful.",
  },
  {
    title: "Continuous Learning",
    description:
      "I keep learning new tools and technologies to stay ahead.",
  },
];
