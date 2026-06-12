import { Link } from "react-router-dom";

function Projects() {
  const projects = [
    {
      category: "FULL STACK",
      title: "Portfolio Website",
      description:
        "Personal portfolio showcasing AI, Machine Learning, LLM, and software engineering projects with detailed project case studies.",
      tech: ["React", "Tailwind CSS", "JavaScript", "Vite"],
      link: "/",
    },

    {
      category: "AI/ML",
      title: "Alzheimer's Disease Detection",
      description:
        "Speech-based Alzheimer's detection system using multimodal deep learning with audio and text features.",
      tech: ["PyTorch", "WavLM", "BERT", "Whisper", "Flask"],
      link: "/projects/alzheimers",
    },

    {
      category: "AGENTIC AI",
      title: "Multi-Agent Research System",
      status: "Live",
      description:
        "Production-deployed research platform where 4 AI agents collaborate to search, analyze, synthesize, and critique information using LangChain, Gemini, and Tavily.",
      tech: [
        "LangChain",
        "Gemini",
        "Tavily",
        "Streamlit",
        "BeautifulSoup",
      ],
      link: "/projects/multi-agent-research",
    },

    {
      category: "LLM",
      title: "DevInsight AI",
      status: "Live",
      description:
        "AI-powered GitHub profile analyzer that evaluates repositories, skills and developer strengths.",
      tech: ["FastAPI", "GitHub API", "LLM", "Python"],
      link: "/projects/devinsight-ai",
    },

    {
      category: "NLP",
      title: "YouTube Sentiment Analysis",
      description:
        "Analyzes YouTube comments and classifies sentiments using NLP and machine learning models.",
      tech: ["NLTK", "TF-IDF", "Scikit-Learn", "Flask"],
      link: "/projects/youtube-sentiment",
    },

    {
      category: "AI/ML",
      title: "Heart Disease Detection",
      description:
        "Machine learning application that predicts heart disease risk using clinical parameters.",
      tech: ["Python", "Scikit-Learn", "Pandas", "Flask"],
      link: "/projects/heart-disease",
    },
  ];

  return (
    <section id="projects" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}

        <div className="mb-24">
          <div className="flex justify-end">
            <h2 className="text-6xl md:text-7xl font-bold text-right">
              Projects<span className="text-purple-600">.</span>
            </h2>
          </div>

          <div className="mt-6">
            <p className="text-gray-600 text-lg max-w-2xl">
              A collection of AI, Machine Learning, NLP and full-stack
              applications built through academic and personal projects.
            </p>
          </div>
        </div>

        {/* PROJECT GRID */}

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="
                group
                relative
                overflow-hidden
                bg-white/70
                backdrop-blur-sm
                border
                border-gray-200
                rounded-[32px]
                p-8
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-xl
                hover:border-purple-300
              "
            >
              {/* Top Purple Line */}

              <div
                className="
                absolute
                top-0
                left-0
                h-1
                w-full
                bg-purple-300
                transition-all
                duration-300
                group-hover:bg-purple-600
              "
              />

              {/* Number + Category */}

              <div className="flex justify-between items-center mb-6">
                <p className="text-sm text-gray-400">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <span
                  className="
                  px-3
                  py-1
                  text-xs
                  font-semibold
                  rounded-full
                  bg-gray-100
                  text-gray-600
                  "
                >
                  {project.category}
                </span>
              </div>

              {/* Title */}

              <div>
                <h3
                  className="
                  text-3xl
                  font-bold
                  mb-2
                  transition-all
                  duration-300
                  group-hover:text-purple-600
                  "
                >
                  {project.title}
                </h3>

                <div
                  className="
                  h-[2px]
                  bg-purple-500
                  w-0
                  transition-all
                  duration-500
                  group-hover:w-full
                  mb-4
                  "
                />
              </div>

              {/* Description */}

              <p className="text-gray-600 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Technologies */}

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="
                    px-3
                    py-1.5
                    bg-gray-100
                    border
                    border-gray-200
                    rounded-lg
                    text-sm
                    transition-all
                    duration-300
                    hover:bg-purple-100
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Divider */}

              <hr className="my-6 border-gray-200" />

              {/* Footer */}

              <div className="flex items-center justify-between">
                <Link
                  to={project.link}
                  className="
                  text-purple-600
                  font-medium
                  inline-flex
                  items-center
                  gap-2
                  transition-all
                  duration-300
                  hover:gap-3
                  "
                >
                  View Project →
                </Link>

                {project.status === "Live" && (
                  <div className="flex items-center gap-2 text-green-600 text-sm font-medium">
                    <span
                      className="
                      w-2
                      h-2
                      bg-green-500
                      rounded-full
                      animate-pulse
                      "
                    ></span>
                    Live
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;