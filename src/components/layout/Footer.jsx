import { FaGithub, FaLinkedin, FaEnvelope, FaCode } from "react-icons/fa";
import { personal } from "../../data/personal";

export default function Footer() {
  return (
    <footer className="bg-neutral-50 dark:bg-neutral-950/60 border-t border-neutral-100 dark:border-neutral-900 py-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-500 dark:text-neutral-400 text-xs sm:text-sm font-semibold">
            © {new Date().getFullYear()} {personal.name}. Built with React, Tailwind CSS, and Framer Motion.
          </p>
          
          <div className="flex space-x-5">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-primary transition-colors p-1"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-primary transition-colors p-1"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href={personal.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-primary transition-colors p-1"
              aria-label="LeetCode"
            >
              <FaCode size={18} />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="text-neutral-400 hover:text-primary transition-colors p-1"
              aria-label="Email"
            >
              <FaEnvelope size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}