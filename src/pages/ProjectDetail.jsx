import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { FiArrowLeft, FiCompass, FiCpu, FiTrendingUp, FiTarget } from "react-icons/fi";
import { projects } from "../data/projects";

export default function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  // Find project
  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[projectIndex];

  // Handle portfolio project redirect
  useEffect(() => {
    if (slug === "portfolio") {
      navigate("/?msg=already-here", { replace: true });
    }
  }, [slug, navigate]);

  // Scroll to top when slug changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black text-neutral-900 dark:text-neutral-100">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <Link to="/" className="text-primary hover:underline flex items-center gap-2">
          <FiArrowLeft /> Back to Home
        </Link>
      </div>
    );
  }

  // Calculate previous and next projects
  const prevProject = projects[(projectIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <div className="min-h-screen bg-white dark:bg-black text-neutral-900 dark:text-neutral-100 transition-colors duration-300 bg-grid-pattern relative">
      {/* Vignette background mask */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white dark:bg-black vignette-mask z-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-24">
        {/* BACK TO ALL PROJECTS */}
        <div className="mb-8" style={{ opacity: 1, transform: "none" }}>
          <Link
            to="/#Projects"
            className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-primary dark:text-neutral-400 dark:hover:text-primary transition-colors font-medium"
          >
            <FiArrowLeft size={16} /> All Projects
          </Link>
        </div>

        {/* HERO SECTION */}
        <div className="mb-16">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-light rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            {project.category}
          </span>

          <h1 className="text-4xl md:text-6xl font-black mt-2 mb-6 tracking-tight text-neutral-950 dark:text-white leading-tight">
            {project.title}
            <span className="text-primary">.</span>
          </h1>

          <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 max-w-4xl leading-relaxed mb-8">
            {project.description}
          </p>

          {/* Stats / Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="flex flex-wrap gap-4 mb-8">
              {project.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 rounded-2xl px-6 py-4 shadow-sm"
                >
                  <p className="text-2xl font-extrabold text-neutral-900 dark:text-white">
                    {metric.split(" ")[0]}
                  </p>
                  <p className="text-neutral-500 dark:text-neutral-400 text-xs mt-1">
                    {metric.split(" ").slice(1).join(" ")}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Action Links */}
          <div className="flex flex-wrap gap-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-neutral-950 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded-xl hover:scale-[1.03] transition-all font-semibold shadow-sm text-sm"
            >
              <FaGithub size={16} /> GitHub Repo
            </a>
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-xl hover:scale-[1.03] transition-all font-semibold shadow-sm text-sm hover:bg-primary-light"
              >
                <FaExternalLinkAlt size={14} /> Live Demo
              </a>
            )}
          </div>
        </div>

        {/* DETAILS GRID LAYOUT */}
        <div className="space-y-16">
          {/* PROBLEM SECTION */}
          {project.problem && (
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold mb-4 flex items-center gap-2 tracking-tight text-neutral-950 dark:text-white">
                The Problem<span className="text-primary">.</span>
              </h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-base md:text-lg">
                  {project.problem}
                </p>
              </div>
            </div>
          )}

          {/* SOLUTION DETAILS */}
          {project.solutionDetails && (
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold mb-6 flex items-center gap-2 tracking-tight text-neutral-950 dark:text-white">
                Solution<span className="text-primary">.</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {project.solutionDetails.map((sol, idx) => (
                  <div
                    key={idx}
                    className="border border-neutral-100 dark:border-neutral-800 rounded-2xl p-6 bg-neutral-50/50 dark:bg-neutral-900/40"
                  >
                    <h3 className="font-bold text-lg mb-2 text-neutral-900 dark:text-white flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary"></span>
                      {sol.title}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                      {sol.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SYSTEM ARCHITECTURE */}
          {project.architectureSteps && (
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold mb-6 flex items-center gap-2 tracking-tight text-neutral-950 dark:text-white">
                System Architecture<span className="text-primary">.</span>
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {project.architectureSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="border border-neutral-200 dark:border-neutral-800 rounded-2xl p-4 text-center bg-white dark:bg-neutral-900/60 shadow-sm flex items-center justify-center font-medium text-sm text-neutral-800 dark:text-neutral-200 min-h-[80px]"
                  >
                    {step}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ENGINEERING DECISIONS */}
          {project.engineeringDecisions && (
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold mb-6 flex items-center gap-2 tracking-tight text-neutral-950 dark:text-white">
                Engineering Decisions<span className="text-primary">.</span>
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {project.engineeringDecisions.map((dec, idx) => (
                  <div
                    key={idx}
                    className="border border-neutral-100 dark:border-neutral-800 rounded-2xl p-6 bg-neutral-50/50 dark:bg-neutral-900/40"
                  >
                    <h3 className="font-bold text-lg mb-2 text-neutral-900 dark:text-white">
                      {dec.title}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                      {dec.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CHALLENGES SOLVED */}
          {project.challengesSolved && (
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold mb-6 flex items-center gap-2 tracking-tight text-neutral-950 dark:text-white">
                Challenges Solved<span className="text-primary">.</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {project.challengesSolved.map((challenge, idx) => (
                  <div
                    key={idx}
                    className="border border-neutral-100 dark:border-neutral-800 rounded-2xl p-4 bg-neutral-50/30 dark:bg-neutral-900/20 flex items-start gap-3"
                  >
                    <span className="text-primary mt-1 font-bold">✓</span>
                    <p className="text-neutral-700 dark:text-neutral-300 text-sm">
                      {challenge}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* GENERIC DESCRIPTION RENDER (For projects without rich problem/solution fields) */}
          {!project.problem && (
            <div className="space-y-12">
              {/* About Box */}
              <div>
                <h2 className="text-2xl font-extrabold mb-4 flex items-center gap-2 text-neutral-950 dark:text-white">
                  <FiCompass className="text-primary" /> About Project
                </h2>
                <div className="border border-neutral-100 dark:border-neutral-800 rounded-2xl p-6 bg-neutral-50/50 dark:bg-neutral-900/40">
                  <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-sm md:text-base">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Key Features */}
              {project.features && project.features.length > 0 && (
                <div>
                  <h2 className="text-2xl font-extrabold mb-4 flex items-center gap-2 text-neutral-950 dark:text-white">
                    <FiTarget className="text-primary" /> Key Features
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {project.features.map((feat, idx) => (
                      <div
                        key={idx}
                        className="border border-neutral-100 dark:border-neutral-800 rounded-xl p-4 bg-white dark:bg-neutral-900/40 flex items-start gap-3 shadow-sm"
                      >
                        <span className="text-primary font-bold">✓</span>
                        <p className="text-neutral-700 dark:text-neutral-300 text-sm">
                          {feat}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technical Architecture */}
              {project.architecture && project.architecture.length > 0 && (
                <div>
                  <h2 className="text-2xl font-extrabold mb-4 flex items-center gap-2 text-neutral-950 dark:text-white">
                    <FiCpu className="text-primary" /> Technical Architecture
                  </h2>
                  <div className="border border-neutral-100 dark:border-neutral-800 rounded-2xl p-6 bg-neutral-50/20 dark:bg-neutral-900/20 space-y-4">
                    {project.architecture.map((arch, idx) => (
                      <div key={idx} className="flex gap-3">
                        <span className="text-primary font-bold">•</span>
                        <p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
                          {arch}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TECHNOLOGIES USED */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-6 flex items-center gap-2 tracking-tight text-neutral-950 dark:text-white">
              Technologies Used<span className="text-primary">.</span>
            </h2>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl text-sm font-medium text-neutral-700 dark:text-neutral-300 shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* IMPACT SECTION */}
          {project.impact && (
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold mb-4 flex items-center gap-2 tracking-tight text-neutral-950 dark:text-white">
                Impact<span className="text-primary">.</span>
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-base md:text-lg">
                {project.impact}
              </p>
            </div>
          )}

          {/* FUTURE SCOPE / ROADMAP */}
          {(project.futureScope || project.future) && (
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold mb-6 flex items-center gap-2 tracking-tight text-neutral-950 dark:text-white">
                Future Scope<span className="text-primary">.</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {(project.futureScope || project.future).map((fut, idx) => (
                  <div
                    key={idx}
                    className="border border-neutral-100 dark:border-neutral-800 rounded-2xl p-5 bg-neutral-50/50 dark:bg-neutral-900/40 flex items-start gap-3"
                  >
                    <FiTrendingUp className="text-primary mt-1 shrink-0" />
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                      {fut}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* CALL TO ACTION */}
        <div className="mt-24 border border-neutral-200 dark:border-neutral-800 rounded-3xl p-8 md:p-12 text-center bg-neutral-50/20 dark:bg-neutral-900/10">
          <h3 className="text-2xl md:text-3xl font-extrabold mb-6 text-neutral-950 dark:text-white">
            Interested in this project?
          </h3>
          <div className="flex justify-center gap-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 border border-neutral-300 dark:border-neutral-700 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors font-semibold text-sm shadow-sm"
            >
              View Source Code
            </a>
          </div>
        </div>

        {/* BOTTOM NAVIGATION */}
        <div className="mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-800">
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            <Link
              to={`/projects/${prevProject.slug}`}
              className="border border-neutral-100 dark:border-neutral-800 rounded-2xl p-4 md:p-6 hover:border-primary/50 dark:hover:border-primary/50 transition-all shadow-sm group text-left"
            >
              <p className="text-xs text-neutral-400 dark:text-neutral-500 mb-2 font-medium">← PREVIOUS</p>
              <h4 className="text-base md:text-lg font-bold text-neutral-900 dark:text-white group-hover:text-primary transition-colors line-clamp-1">
                {prevProject.title}
              </h4>
            </Link>

            <Link
              to={`/projects/${nextProject.slug}`}
              className="border border-neutral-100 dark:border-neutral-800 rounded-2xl p-4 md:p-6 hover:border-primary/50 dark:hover:border-primary/50 transition-all shadow-sm group text-right"
            >
              <p className="text-xs text-neutral-400 dark:text-neutral-500 mb-2 font-medium">NEXT →</p>
              <h4 className="text-base md:text-lg font-bold text-neutral-900 dark:text-white group-hover:text-primary transition-colors line-clamp-1">
                {nextProject.title}
              </h4>
            </Link>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/#Projects"
              className="text-sm font-semibold text-neutral-500 hover:text-primary dark:text-neutral-400 dark:hover:text-primary transition-colors"
            >
              ← Back To All Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
