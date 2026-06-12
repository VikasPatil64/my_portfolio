import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../utils/themeContext";
import { personal } from "../../data/personal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("basic-info");
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const navLinks = [
    { id: "About", label: "About", path: "/#About" },
    { id: "Projects", label: "Projects", path: "/#Projects" },
    { id: "Coding Profiles", label: "Profiles", path: "/#Coding Profiles" },
    { id: "Education", label: "Education", path: "/#Education" },
    { id: "Contact", label: "Contact", path: "/#Contact" },
  ];

  // Scroll Spy to detect active section
  useEffect(() => {
    if (location.pathname.startsWith("/projects/")) {
      setActiveSection("Projects");
      return;
    }

    if (location.pathname !== "/") {
      setActiveSection("");
      return;
    }

    const handleScroll = () => {
      const sections = ["basic-info", "About", "Projects", "Coding Profiles", "Education", "Contact"];
      const scrollPosition = window.scrollY + 200; // Offset for trigger

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-black/70 backdrop-blur-md transition-all duration-300 py-4 border-b border-neutral-100 dark:border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 flex items-center justify-between">
        
        {/* Left Side: Theme Toggle & Logo */}
        <div className="flex items-center gap-4">
          {/* Day/Night Sliding Toggle */}
          <div
            onClick={toggleTheme}
            className="relative flex items-center w-28 h-10 p-1.5 rounded-full cursor-pointer overflow-hidden transition-all duration-500 shadow-inner"
            style={{
              background: theme === "light"
                ? "linear-gradient(135deg, #87CEEB, #00BFFF)"
                : "linear-gradient(135deg, #090a0f, #1e1b4b)"
            }}
          >
            {/* Sliding Sun/Moon Ball */}
            <motion.div
              className={`w-7 h-7 rounded-full relative ${
                theme === "light" ? "bg-yellow-400" : "bg-neutral-100"
              }`}
              style={{
                boxShadow: theme === "light"
                  ? "0px 0px 10px 2px rgba(255, 204, 0, 0.6)"
                  : "0px 0px 10px 2px rgba(255, 255, 255, 0.4)",
              }}
              animate={{ x: theme === "light" ? 0 : 68 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
            >
              {/* Moon craters detail */}
              {theme === "dark" && (
                <div className="absolute w-5 h-5 rounded-full bg-neutral-900 -right-1 -top-0.5 opacity-60"></div>
              )}
            </motion.div>

            {/* Clouds / Stars Decoration */}
            <div className="absolute inset-0 pointer-events-none opacity-30 flex items-center justify-between px-3">
              {/* Cloud vectors */}
              <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 24 24" style={{ display: theme === "light" ? "block" : "none" }}>
                <path d="M19.36 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.64-4.96z" />
              </svg>
              {/* Star vectors */}
              <div className="w-1.5 h-1.5 bg-white rounded-full animate-ping" style={{ display: theme === "dark" ? "block" : "none" }}></div>
            </div>
          </div>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-1 group z-50">
            <span className="text-xl font-black tracking-tighter text-neutral-950 dark:text-white">
              {personal.initials}
              <span className="text-primary">.</span>
            </span>
          </Link>
        </div>

        {/* Right Side: Desktop Menu */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isLinkActive = activeSection === link.id;
            return (
              <Link
                key={link.id}
                to={link.path}
                className="relative px-4 py-2 rounded-full text-sm font-bold transition-all duration-200 block"
              >
                {/* Highlight background pill */}
                {isLinkActive && (
                  <motion.span
                    layoutId="activeNavBackground"
                    className="absolute inset-0 bg-primary rounded-full z-0"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span
                  className={`relative z-10 transition-colors duration-300 font-bold ${
                    isLinkActive
                      ? "text-white"
                      : "text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            );
          })}
          <a
            href={personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-4 py-2 bg-neutral-950 dark:bg-neutral-100 hover:bg-neutral-800 dark:hover:bg-neutral-200 text-white dark:text-neutral-900 rounded-full text-sm font-bold transition-colors"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors z-50 text-neutral-800 dark:text-white"
          aria-label="Toggle Menu"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white dark:bg-black border-t border-neutral-100 dark:border-neutral-900 mt-4 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-3">
              {navLinks.map((link) => {
                const isLinkActive = activeSection === link.id;
                return (
                  <Link
                    key={link.id}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block py-2.5 px-4 rounded-xl text-sm font-bold transition-all ${
                      isLinkActive
                        ? "bg-primary text-white"
                        : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-900"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="block text-center mt-2 px-4 py-3 bg-neutral-950 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded-xl text-sm font-bold transition-all hover:bg-neutral-800 dark:hover:bg-neutral-200"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}