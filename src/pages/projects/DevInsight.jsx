import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

function DevInsight() {
  return (
    <section className="min-h-screen py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* HERO */}

        <div className="mb-24">
          <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
            Full Stack • GitHub Analytics • Generative AI
          </span>

          <h1 className="text-5xl md:text-7xl font-bold mt-6 mb-6 leading-tight">
            DevInsight AI
            <span className="text-purple-600">.</span>
          </h1>

          <p className="text-xl text-gray-600 max-w-4xl leading-relaxed mb-8">
            AI-powered GitHub Developer Profile Analyzer that evaluates
            repositories, developer activity, language usage, project impact,
            and generates actionable professional insights through intelligent
            analytics.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <div className="bg-white border rounded-2xl px-6 py-4">
              <p className="text-3xl font-bold">6</p>
              <p className="text-gray-500 text-sm">Analytics Modules</p>
            </div>

            <div className="bg-white border rounded-2xl px-6 py-4">
              <p className="text-3xl font-bold">3</p>
              <p className="text-gray-500 text-sm">Scoring Dimensions</p>
            </div>

            <div className="bg-white border rounded-2xl px-6 py-4">
              <p className="text-3xl font-bold">AI</p>
              <p className="text-gray-500 text-sm">Generated Insights</p>
            </div>
          </div>

          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 bg-black text-white rounded-xl hover:scale-105 transition-all"
          >
            <FaGithub />
            View Source Code
          </a>
        </div>

        {/* PROBLEM */}

        <div className="mb-24">
          <h2 className="text-4xl font-bold mb-6">
            The Problem<span className="text-purple-600">.</span>
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            GitHub profiles contain valuable information about developer
            activity, repository quality, technology expertise, and project
            impact. However, manually reviewing repositories, stars, forks,
            activity history, and language usage is time-consuming and often
            inconsistent.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mt-5">
            Developers struggle to understand how recruiters perceive their
            profiles, while hiring teams spend significant effort evaluating
            technical portfolios. The absence of structured analytics makes
            objective developer assessment difficult.
          </p>
        </div>

        {/* SOLUTION */}

        <div className="mb-24">
          <h2 className="text-4xl font-bold mb-8">
            Solution<span className="text-purple-600">.</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border rounded-2xl p-6">
              <h3 className="font-semibold text-xl mb-3">
                GitHub Data Collection
              </h3>

              <p className="text-gray-600">
                Fetches profile and repository information directly from GitHub
                REST APIs in real time.
              </p>
            </div>

            <div className="border rounded-2xl p-6">
              <h3 className="font-semibold text-xl mb-3">
                Analytics Engine
              </h3>

              <p className="text-gray-600">
                Processes repository data using Pandas to generate activity,
                popularity, and language analytics.
              </p>
            </div>

            <div className="border rounded-2xl p-6">
              <h3 className="font-semibold text-xl mb-3">
                Developer Scoring
              </h3>

              <p className="text-gray-600">
                Calculates a weighted developer score using repository volume,
                impact metrics, and activity recency.
              </p>
            </div>

            <div className="border rounded-2xl p-6">
              <h3 className="font-semibold text-xl mb-3">
                AI Insight Generation
              </h3>

              <p className="text-gray-600">
                Uses large language models to generate strengths, weaknesses,
                summaries, and improvement recommendations.
              </p>
            </div>
          </div>
        </div>

        {/* ARCHITECTURE */}

        <div className="mb-24">
          <h2 className="text-4xl font-bold mb-8">
            System Architecture<span className="text-purple-600">.</span>
          </h2>

          <div className="grid md:grid-cols-6 gap-4">
            <div className="border rounded-2xl p-5 text-center">
              User Input
            </div>

            <div className="border rounded-2xl p-5 text-center">
              GitHub API
            </div>

            <div className="border rounded-2xl p-5 text-center">
              Analytics Engine
            </div>

            <div className="border rounded-2xl p-5 text-center">
              Scoring Engine
            </div>

            <div className="border rounded-2xl p-5 text-center">
              AI Insights
            </div>

            <div className="border rounded-2xl p-5 text-center">
              Dashboard
            </div>
          </div>
        </div>

        {/* ANALYTICS ENGINE */}

        <div className="mb-24">
          <h2 className="text-4xl font-bold mb-8">
            Analytics Engine<span className="text-purple-600">.</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border rounded-2xl p-6">
              <h3 className="font-semibold text-xl mb-3">
                Repository Analytics
              </h3>

              <p className="text-gray-600">
                Calculates repository count, average stars, average forks, top
                repositories, and popularity metrics.
              </p>
            </div>

            <div className="border rounded-2xl p-6">
              <h3 className="font-semibold text-xl mb-3">
                Language Analysis
              </h3>

              <p className="text-gray-600">
                Identifies most-used technologies, language diversity, and
                frequency distributions.
              </p>
            </div>

            <div className="border rounded-2xl p-6">
              <h3 className="font-semibold text-xl mb-3">
                Activity Tracking
              </h3>

              <p className="text-gray-600">
                Monitors repository updates and evaluates developer activity
                recency.
              </p>
            </div>

            <div className="border rounded-2xl p-6">
              <h3 className="font-semibold text-xl mb-3">
                Popularity Metrics
              </h3>

              <p className="text-gray-600">
                Measures project visibility using stars, forks, and repository
                engagement indicators.
              </p>
            </div>
          </div>
        </div>

        {/* SCORING SYSTEM */}

        <div className="mb-24">
          <h2 className="text-4xl font-bold mb-8">
            Developer Scoring System
            <span className="text-purple-600">.</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="border rounded-2xl p-6">
              <h3 className="font-semibold text-xl mb-3">Recency Score</h3>

              <p className="text-gray-600">
                Rewards developers who actively maintain and update their
                repositories.
              </p>
            </div>

            <div className="border rounded-2xl p-6">
              <h3 className="font-semibold text-xl mb-3">Impact Score</h3>

              <p className="text-gray-600">
                Uses weighted star and fork metrics to estimate project reach
                and community engagement.
              </p>
            </div>

            <div className="border rounded-2xl p-6">
              <h3 className="font-semibold text-xl mb-3">Volume Score</h3>

              <p className="text-gray-600">
                Evaluates repository count to estimate development experience
                and consistency.
              </p>
            </div>
          </div>
        </div>

        {/* AI MODULE */}

        <div className="mb-24">
          <h2 className="text-4xl font-bold mb-8">
            AI Insights Module<span className="text-purple-600">.</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border rounded-2xl p-6">
              Professional profile summaries generated from repository
              analytics and engagement metrics.
            </div>

            <div className="border rounded-2xl p-6">
              Strength analysis highlighting development activity, technology
              diversity, and project quality.
            </div>

            <div className="border rounded-2xl p-6">
              Weakness identification including inactivity, low visibility, and
              limited engagement.
            </div>

            <div className="border rounded-2xl p-6">
              Personalized recommendations for improving portfolio quality and
              developer presence.
            </div>
          </div>
        </div>

        {/* ENGINEERING DECISIONS */}

        <div className="mb-24">
          <h2 className="text-4xl font-bold mb-8">
            Engineering Decisions<span className="text-purple-600">.</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="border rounded-2xl p-6">
              <h3 className="font-semibold text-xl mb-3">Why FastAPI?</h3>

              <p className="text-gray-600">
                Provides high performance, automatic validation, and efficient
                API development.
              </p>
            </div>

            <div className="border rounded-2xl p-6">
              <h3 className="font-semibold text-xl mb-3">
                Why GitHub REST API?
              </h3>

              <p className="text-gray-600">
                Offers real-time access to developer activity and repository
                metadata.
              </p>
            </div>

            <div className="border rounded-2xl p-6">
              <h3 className="font-semibold text-xl mb-3">
                Why OpenRouter + Gemma?
              </h3>

              <p className="text-gray-600">
                Enables flexible LLM integration for professional insight
                generation and recommendations.
              </p>
            </div>
          </div>
        </div>

        {/* CHALLENGES */}

        <div className="mb-24">
          <h2 className="text-4xl font-bold mb-8">
            Challenges Solved<span className="text-purple-600">.</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border rounded-2xl p-6">
              Handling GitHub API failures and invalid profile requests.
            </div>

            <div className="border rounded-2xl p-6">
              Maintaining dashboard functionality during AI service failures.
            </div>

            <div className="border rounded-2xl p-6">
              Processing incomplete repository metadata and missing language
              fields.
            </div>

            <div className="border rounded-2xl p-6">
              Converting raw GitHub data into meaningful developer intelligence.
            </div>

            <div className="border rounded-2xl p-6">
              Building interactive visualizations for analytics exploration.
            </div>
          </div>
        </div>

        {/* TECH STACK */}

        <div className="mb-24">
          <h2 className="text-4xl font-bold mb-8">
            Technologies Used<span className="text-purple-600">.</span>
          </h2>

          <div className="flex flex-wrap gap-3">
            {[
              "Python",
              "FastAPI",
              "GitHub API",
              "OpenRouter",
              "Gemma 7B",
              "Pandas",
              "NumPy",
              "Jinja2",
              "HTML",
              "CSS",
              "JavaScript",
              "Chart.js",
              "Render",
              "Git",
              "GitHub",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-gray-100 border border-gray-200 rounded-lg"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* IMPACT */}

        <div className="mb-24">
          <h2 className="text-4xl font-bold mb-6">
            Impact<span className="text-purple-600">.</span>
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            DevInsight AI transforms raw GitHub data into structured developer
            intelligence. By combining analytics, weighted scoring algorithms,
            AI-generated insights, and interactive visualizations, the platform
            enables developers to evaluate their portfolios while helping
            recruiters perform faster and more objective technical assessments.
          </p>
        </div>

        {/* FUTURE SCOPE */}

        <div>
          <h2 className="text-4xl font-bold mb-8">
            Future Scope<span className="text-purple-600">.</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border rounded-2xl p-6">
              Contribution graph and commit frequency analysis.
            </div>

            <div className="border rounded-2xl p-6">
              Pull request and collaboration analytics.
            </div>

            <div className="border rounded-2xl p-6">
              Resume scoring and portfolio optimization module.
            </div>

            <div className="border rounded-2xl p-6">
              PDF report generation for recruiters and candidates.
            </div>

            <div className="border rounded-2xl p-6">
              Historical trend tracking and performance monitoring.
            </div>

            <div className="border rounded-2xl p-6">
              Multi-platform developer analytics and comparison system.
            </div>

            <div className="border rounded-2xl p-6">
              Authentication and personalized dashboards.
            </div>

            <div className="border rounded-2xl p-6">
              Advanced AI recommendations powered by larger language models.
            </div>
          </div>
        </div>

        {/* PROJECT CTA */}

        <div className="mt-24 border rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-semibold mb-8">
            Interested in this project?
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="
              px-6 py-3
              border
              rounded-xl
              hover:bg-gray-50
              transition
              "
            >
              View Source Code
            </a>
          </div>
        </div>

        {/* NAVIGATION */}

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          <Link
            to="/projects/alzheimers"
            className="
            border
            rounded-2xl
            p-8
            hover:border-purple-400
            transition
            "
          >
            <p className="text-sm text-gray-500 mb-2">← PREVIOUS</p>

            <h4 className="text-xl font-semibold">
              Alzheimer's Disease Detection
            </h4>
          </Link>

          <div></div>
        </div>

        <div className="text-center mt-10">
          <Link
            to="/"
            className="
            text-gray-600
            hover:text-purple-600
            "
          >
            ← Back To All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}

export default DevInsight;