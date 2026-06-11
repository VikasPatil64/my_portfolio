import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-3xl font-bold tracking-tight">
          VP<span className="text-purple-600">.</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-3 text-sm font-medium">
          <li>
            <a
              href="#about"
              className="
              px-4 py-2
              rounded-full
              bg-purple-600
              text-white
              shadow-md
              "
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="
              px-4 py-2
              rounded-full
              transition-all
              duration-300
              hover:bg-gray-100
              "
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#education"
              className="
              px-4 py-2
              rounded-full
              transition-all
              duration-300
              hover:bg-gray-100
              "
            >
              Education
            </a>
          </li>

          <li>
            <a
              href="#achievements"
              className="
              px-4 py-2
              rounded-full
              transition-all
              duration-300
              hover:bg-gray-100
              "
            >
              Achievements
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="
              px-4 py-2
              rounded-full
              transition-all
              duration-300
              hover:bg-gray-100
              "
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <button
            className="
            border
            rounded-full
            p-3
            transition-all
            duration-300
            hover:bg-gray-100
            "
          >
            🌙
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile / Small Width Menu */}
      {menuOpen && (
        <div className="flex flex-col gap-5 p-6 text-lg font-medium">
          <a
            href="#about"
            className="px-4 py-3 rounded-xl bg-purple-100 text-purple-700"
          >
            About
          </a>

          <a
            href="#projects"
            className="px-4 py-3 rounded-xl hover:bg-gray-100"
          >
            Projects
          </a>

          <a
            href="#education"
            className="px-4 py-3 rounded-xl hover:bg-gray-100"
          >
            Education
          </a>

          <a
            href="#achievements"
            className="px-4 py-3 rounded-xl hover:bg-gray-100"
          >
            Achievements
          </a>

          <a href="#contact" className="px-4 py-3 rounded-xl hover:bg-gray-100">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
