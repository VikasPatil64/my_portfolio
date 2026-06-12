import { Link } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard({ project, index }) {
  // Format index as 01, 02, etc.
  const formattedIndex = String(index + 1).padStart(2, "0");

  // Get tech stack display (limit to 4 and show "+X more" if there are more)
  const maxTechToShow = 4;
  const displayedTech = project.techStack.slice(0, maxTechToShow);
  const remainingTechCount = project.techStack.length - maxTechToShow;

  return (
    <div className="group border border-neutral-150 dark:border-neutral-800/80 rounded-2xl bg-neutral-50/50 dark:bg-neutral-900/30 p-6 flex flex-col justify-between hover:shadow-xl hover:shadow-primary/5 dark:hover:shadow-primary/2 hover:border-primary/50 dark:hover:border-primary/50 hover:translate-y-[-4px] transition-all duration-300 h-full relative">
      <div>
        {/* Top Header Row */}
        <div className="flex justify-between items-center mb-6">
          <span className="text-xl font-black text-neutral-300 dark:text-neutral-700 tracking-tight">
            {formattedIndex}
          </span>
          <span className="text-[10px] font-black tracking-widest text-neutral-400 dark:text-neutral-500 uppercase bg-neutral-200/50 dark:bg-neutral-800/80 px-2.5 py-0.5 rounded-full">
            {project.category}
          </span>
        </div>

        {/* Project Title */}
        <h3 className="text-xl font-extrabold text-neutral-950 dark:text-white mb-3 group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>

        {/* Short Description */}
        <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed mb-6 line-clamp-3">
          {project.shortDesc || project.description}
        </p>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          {displayedTech.map((tech, idx) => (
            <span
              key={idx}
              className="text-[11px] font-semibold text-neutral-600 dark:text-neutral-400 bg-neutral-200/40 dark:bg-neutral-800/50 px-2 py-0.5 rounded-md"
            >
              {tech}
            </span>
          ))}
          {remainingTechCount > 0 && (
            <span className="text-[11px] font-semibold text-neutral-400 dark:text-neutral-500 bg-neutral-200/20 dark:bg-neutral-800/20 px-2 py-0.5 rounded-md">
              +{remainingTechCount} more
            </span>
          )}
        </div>
      </div>

      {/* Bottom Footer Actions */}
      <div className="flex justify-between items-center border-t border-neutral-100 dark:border-neutral-850 pt-4 mt-auto">
        <Link
          to={`/projects/${project.slug}`}
          className="text-sm font-bold text-neutral-900 dark:text-neutral-100 hover:text-primary dark:hover:text-primary flex items-center gap-1.5 transition-colors"
        >
          View Project <span className="inline-block transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
        </Link>

        {/* Live Status Indicator */}
        <div className="flex items-center gap-3">
          {project.liveDemoUrl && (
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-[10px] font-bold text-neutral-500 dark:text-neutral-400 tracking-wide">
                Live
              </span>
            </div>
          )}
          
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
            aria-label="View Source on GitHub"
          >
            <FaGithub size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}