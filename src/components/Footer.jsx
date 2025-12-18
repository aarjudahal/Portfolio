import { NavLink } from "react-router-dom";
import { navLinks } from "../data/Navigation.jsx";

export default function Footer() {
  return (
    <footer className="border-t border-[#1F2933] bg-[#0B0F14]">
      <div className="max-w-6xl mx-auto px-6 py-10 grid gap-8 md:grid-cols-3 text-sm text-slate-400">

        {/* About */}
        <div>
          <h3 className="text-slate-200 font-medium mb-3">Aarju</h3>
          <p className="leading-relaxed">
            Frontend developer focused on building clean, accessible,
            and performance-oriented web interfaces.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-slate-200 font-medium mb-3">Navigation</h4>
          <ul className="space-y-2">
            {navLinks.map((item) => (
              <li key={item.label}>
                <NavLink to={item.path} className="hover:text-slate-200 transition">
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-slate-200 font-medium mb-3">Contact</h4>
          <p>Email: <a href="mailto:aarju.dahal.80@gmail.com" className="hover:text-slate-200">aarju.dahal.80@gmail.com</a></p>
          <p className="mt-2">Location: Nepal</p>
        </div>
      </div>

      <div className="text-center text-xs text-slate-400 py-4 border-t border-[#1F2933]">
        © {new Date().getFullYear()} Aarju Dahal — Frontend Developer & React Enthusiast <br/> <span className="text-gray-600">
            Designed & developed with care and curiosity.
        </span>
        
      </div>
    </footer>
  );
}
