import { FaEnvelope, FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

export const contacts = [
  {
    label: "Email",
    icon: <FaEnvelope />,
    link: "mailto:aarju.dahal.80@gmail.com",
    bg: "bg-pink-400",
    hover: "hover:bg-pink-500",
    description: "Send me an email and let's discuss your ideas!",
  },
  {
    label: "GitHub",
    icon: <FaGithub />,
    link: "https://github.com/aarjudahal",
    bg: "bg-gray-800",
    hover: "hover:bg-gray-900",
    description: "Check out my projects and code.",
  },
  {
    label: "LinkedIn",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/aarju-dahal-b7b38935b/",
    bg: "bg-blue-600",
    hover: "hover:bg-blue-700",
    description: "Connect with me professionally.",
  },
  {
    label: "Facebook",
    icon: <FaFacebook />,
    link: "https://www.facebook.com/Aarjudahal.80/",
    bg: "bg-blue-500",
    hover: "hover:bg-blue-600",
    description: "Follow me and stay updated!",
  },
];
