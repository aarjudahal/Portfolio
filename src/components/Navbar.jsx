import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import {navLinks} from '../data/Navigation.jsx';

export default function Navbar() {
  const [open, setOpen] = useState(false);
    
  const activeClass="text-cyan-400 cursor-pointer";
  const defaultClass="text-white hover:text-cyan-400 transition";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <NavLink to="/"
          className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-500
          bg-clip-text text-transparent tracking-wide" >
          Aarju.Dahal
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm uppercase font-medium">
          {navLinks.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              onClick={()=>setOpen(false)}
              className={({ isActive }) =>
                isActive ? activeClass : defaultClass
              }>
              {item.label}
            </NavLink>
          ))}

          <div className="flex items-center gap-4 text-lg">
            <a href="https://github.com/aarjudahal" target="_blank"
                  rel="noopener noreferrer" className="hover:text-cyan-400"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/aarju-dahal-b7b38935b/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BVIwuCltlQEmhmt2P%2F3KUfg%3D%3D"  target="_blank"
                  rel="noopener noreferrer" className="hover:text-fuchsia-400"><FaLinkedin /></a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden bg-black/50 backdrop-blur-lg border-t border-white/10 ">
          <div className="flex flex-col text-sm p-4 space-y-4">
            {navLinks.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  isActive ? activeClass : defaultClass
                }>
                {item.label}
              </NavLink>
            ))}

            <div className="flex gap-4 text-lg pt-2">
              <a href="https://github.com/aarjudahal" target="_blank"
                  rel="noopener noreferrer" className="hover:text-cyan-400"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/aarju-dahal-b7b38935b/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BVIwuCltlQEmhmt2P%2F3KUfg%3D%3D"  target="_blank"
                  rel="noopener noreferrer" className="hover:text-fuchsia-400"><FaLinkedin /></a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
