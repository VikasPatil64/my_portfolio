export const projects = [
   {
    id: "portfolio",
    title: "My Portfolio",
    slug: "portfolio",
    category: "Web Development",

    shortDesc:
      "Personal developer portfolio built with React, Tailwind CSS, Framer Motion, and a scalable data-driven architecture.",

    description:
      "A modern developer portfolio designed to showcase projects, technical skills, education, coding profiles, and contact information through a clean, responsive, and recruiter-friendly user experience.",

    techStack: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "React Router",
      "EmailJS",
      "Vite"
    ],

    githubUrl: "https://github.com/VikasPatil64/my_portfolio",

    liveDemoUrl:
      "https://my-portfolio-lime-zeta-hk2x8luql4.vercel.app",

    featured: true,

    metrics: [
      "Responsive UI",
      "Dynamic Project Pages",
      "Data-Driven Architecture"
    ],

    features: [
      "Fully responsive design optimized for desktop, tablet, and mobile devices.",
      "Dynamic project detail pages powered by React Router and centralized project data.",
      "Integrated EmailJS contact form for direct communication.",
      "Smooth animations and transitions using Framer Motion.",
      "Clean and scalable component-based architecture."
    ],

    architecture: [
      "React Router manages navigation between the homepage and dynamic project detail pages.",
      "Project information is centralized in data files, allowing content updates without modifying UI components.",
      "Reusable React components ensure design consistency and maintainability.",
      "EmailJS enables direct contact form submissions without requiring a backend server.",
      "Vercel handles deployment and continuous delivery through GitHub integration."
    ],

    future: [
      "Add project screenshots and visual case studies.",
      "Introduce a technical blog section for sharing AI and development insights.",
      "Implement project filtering and search functionality.",
      "Enhance accessibility and performance optimization scores.",
      "Add analytics to track portfolio engagement and visitor interactions."
    ]
  },
  {
    id: "alzheimers",
    title: "Speech-based Alzheimer's Disease Detection",
    slug: "alzheimers-detection",
    category: "AI / Healthcare",
    shortDesc: "Multimodal deep learning system for Alzheimer's risk detection from speech, text, and clinical signals.",
    description:
      "A healthcare AI project exploring how speech, language, and clinical signals can help screen for cognitive decline using a co-attention fusion network.",
    techStack: ["Python", "PyTorch", "BERT", "WavLM", "Co-attention", "Librosa", "Flask", "Whisper"],
    githubUrl: "https://github.com/VikasPatil64/alzheimers-speech-detection",
    liveDemoUrl: null,
    featured: true,
    metrics: ["89.3% accuracy", "0.87 ROC-AUC", "83.4% 5-fold CV", "3 Modalities Combined"],
    features: [
      "Fused WavLM (512-d), BERT (768-d) & 4 clinical features using co-attention.",
      "Designed co-attention network with 2 transformer blocks and 5.7M parameters.",
      "Built Flask web app with Whisper transcription, extracting disfluency biomarkers (pause count, filler rate, pitch variability) for real-time predictions.",
    ],
    architecture: [
      "Audio input is processed into acoustic features using WavLM.",
      "Transcribed text is converted into language embeddings using DistilBERT.",
      "Model combines modalities before final risk prediction using co-attention.",
    ],
    future: ["Add a public demo.", "Improve explainability.", "Add clinical validation notes."],
    
    problem: "Early Alzheimer's diagnosis often requires extensive clinical evaluation, cognitive testing, and specialist intervention. However, speech and language impairments are among the earliest observable indicators of cognitive decline. The challenge is that speech, language, and clinical information exist in different formats and cannot be directly combined. This project explores how multimodal deep learning can fuse these complementary signals to support early dementia screening.",
    solutionDetails: [
      { title: "Speech Intelligence", desc: "Whisper transcribes speech recordings while WavLM extracts rich acoustic representations from raw audio." },
      { title: "Language Understanding", desc: "DistilBERT generates contextual language embeddings from transcribed speech for linguistic analysis." },
      { title: "Clinical Integration", desc: "Age, MMSE score, education level, and gender are incorporated as structured clinical indicators." },
      { title: "Multimodal Fusion", desc: "A co-attention architecture learns interactions between speech, language, and clinical representations before classification." }
    ],
    architectureSteps: ["Audio Input", "Whisper", "WavLM + DistilBERT", "Co-Attention Fusion", "Risk Prediction"],
    engineeringDecisions: [
      { title: "Why WavLM?", desc: "Captures richer speech representations than traditional handcrafted acoustic features." },
      { title: "Why DistilBERT?", desc: "Provides contextual language understanding with lower inference cost than larger transformer models." },
      { title: "Why Co-Attention?", desc: "Allows speech and language modalities to learn cross-modal relationships before final classification." }
    ],
    challengesSolved: [
      "Multimodal Fusion Across Speech, Text, and Clinical Data",
      "Handling Missing Clinical Information",
      "Processing Long Audio Recordings",
      "Speech Quality Variability and Noise"
    ],
    impact: "This project demonstrates how speech biomarkers, NLP, and deep learning can be combined to create non-invasive healthcare screening tools. By integrating speech acoustics, linguistic patterns, and clinical indicators, the system provides a practical framework for AI-assisted dementia screening and cognitive health assessment.",
    futureScope: [
      "Explainable AI visualizations to interpret model predictions.",
      "Multi-language support for broader accessibility.",
      "Cloud-native deployment with monitoring and analytics.",
      "Patient history tracking and longitudinal cognitive analysis.",
      "Integration with healthcare systems for clinical screening workflows."
    ]
  },
  {
  id: "multiagent",
  title: "Multi-Agent Research System",
  slug: "multi-agent-system",
  category: "AI Agents",
  shortDesc: "Four AI agents collaborate to search, read, write, and critique research with a self-improvement loop.",
  description:
    "An agentic research workflow where specialized agents work together to produce structured research outputs. Features a self-improvement loop where the Critic agent evaluates reports and triggers revisions until quality improves.",
  techStack: [
    "LangChain",
    "Gemini API",
    "Streamlit",
    "Tavily",
    "BeautifulSoup",
    "Pydantic",
    "Asyncio"
  ],
  githubUrl: "https://github.com/VikasPatil64/multi-agent-research-system",
  liveDemoUrl: "https://multi-agent-research-system-qdoyjgqgemonvxswd6ejwh.streamlit.app",
  featured: true,
  metrics: ["4 agents", "Self-improvement loop", "Live Streamlit demo"],

  features: [
    "Search agent collects 5 authoritative sources using Tavily API.",
    "Reader agent extracts and cleans content using parallel async scraping.",
    "Critic agent evaluates report quality (0-10) and triggers revisions if score is below 7.0.",
    "Revision loop improves reports up to 2 times, keeping only the best version.",
    "Streamlit UI shows real-time progress, score progression, and revision history.",
  ],

  architectureSteps: [
    "User Input",
    "Search Agent",
    "Reader Agent",
    "Writer Agent",
    "Critic Agent",
    "Revision Loop",
    "Final Output"
  ],

  engineeringDecisions: [
    { title: "Why LangChain?", desc: "Enables agentic tool-calling and structured orchestration." },
    { title: "Why Parallel Scraping?", desc: "Reduces latency by scraping multiple URLs concurrently." },
    { title: "Why Revision Loop?", desc: "Ensures report quality improves through iterative feedback." }
  ],

  challengesSolved: [
    "API rate limits handled with daily quota tracking (18/18).",
    "URL extraction from agent responses using regex patterns.",
    "Score regression prevention by keeping only improved versions.",
    "Encoding errors during scraping fixed with multi-encoding fallback.",
    "Failed URLs handled by trying up to 3+ sources."
  ],

  impact: "Transforms manual research into an autonomous agentic workflow. The self-improvement loop demonstrates a practical application of iterative AI refinement, making the system more reliable and reducing hallucination risks.",

  futureScope: [
    "Add Redis caching for repeated queries.",
    "Implement RAG for source-grounded responses.",
    "Add support for PDF/document uploads.",
    "Deploy as Docker container with API endpoints."
  ]
  },
  {
    id: "devinsight",
    title: "DevInsightAI",
    slug: "devinsight-ai",
    category: "Developer Tools",
    shortDesc: "AI-powered GitHub developer analytics platform with scoring and insights.",
    description:
      "A developer profile analyzer that evaluates repositories, activity, and language usage to generate useful portfolio insights.",
    techStack: ["Python", "FastAPI", "GitHub API", "LLM APIs", "HTML/CSS/JS", "Render"],
    githubUrl: "https://github.com/VikasPatil64/DevInsight-AI",
    liveDemoUrl: "https://devinsight-ai-sigma.vercel.app",
    featured: true,
    metrics: ["GitHub analytics", "AI insights", "PDF reports", "6 Analytics Modules"],
    features: [
      "Analyzed GitHub profiles via API (commits, PRs, issues) and built a productivity scoring system.",
      "Integrated LLM APIs (OpenAI) to generate natural language summaries for each developer profile.",
      "Generates activity and language analytics shown on interactive charts.",
    ],
    architecture: [
      "Frontend sends GitHub username to the API.",
      "Backend fetches and processes repository data using Pandas.",
      "Analytics and AI summaries are rendered in dashboard views.",
    ],
    future: ["Improve scoring transparency.", "Add profile comparisons.", "Add authentication."],
    
    problem: "GitHub profiles contain valuable information about developer activity, repository quality, technology expertise, and project impact. However, manually reviewing repositories, stars, forks, activity history, and language usage is time-consuming and often inconsistent. Developers struggle to understand how recruiters perceive their profiles, while hiring teams spend significant effort evaluating technical portfolios. The absence of structured analytics makes objective developer assessment difficult.",
    solutionDetails: [
      { title: "GitHub Data Collection", desc: "Fetches profile and repository information directly from GitHub REST APIs in real time." },
      { title: "Analytics Engine", desc: "Processes repository data using Pandas to generate activity, popularity, and language analytics." },
      { title: "Developer Scoring", desc: "Calculates a weighted developer score using repository volume, impact metrics, and activity recency." },
      { title: "AI Insight Generation", desc: "Uses large language models to generate strengths, weaknesses, summaries, and improvement recommendations." }
    ],
    architectureSteps: ["User Input", "GitHub API", "Analytics Engine", "Scoring Engine", "AI Insights", "Dashboard"],
    engineeringDecisions: [
      { title: "Why FastAPI?", desc: "Provides high performance, automatic validation, and efficient API development." },
      { title: "Why GitHub REST API?", desc: "Offers real-time access to developer activity and repository metadata." },
      { title: "Why OpenRouter + Gemma?", desc: "Enables flexible LLM integration for professional insight generation and recommendations." }
    ],
    challengesSolved: [
      "Handling GitHub API failures and invalid profile requests.",
      "Maintaining dashboard functionality during AI service failures.",
      "Processing incomplete repository metadata and missing language fields.",
      "Converting raw GitHub data into meaningful developer intelligence.",
      "Building interactive visualizations for analytics exploration."
    ],
    impact: "DevInsight AI transforms raw GitHub data into structured developer intelligence. By combining analytics, weighted scoring algorithms, AI-generated insights, and interactive visualizations, the platform enables developers to evaluate their portfolios while helping recruiters perform faster and more objective technical assessments.",
    futureScope: [
      "Contribution graph and commit frequency analysis.",
      "Pull request and collaboration analytics.",
      "Resume scoring and portfolio optimization module.",
      "PDF report generation for recruiters and candidates.",
      "Historical trend tracking and performance monitoring.",
      "Multi-platform developer analytics and comparison system.",
      "Authentication and personalized dashboards."
    ]
  },
  {
    id: "sentiment",
    title: "YouTube Sentiment Analysis",
    slug: "sentiment-analysis",
    category: "NLP",
    shortDesc: "Multi-platform sentiment analysis for YouTube comments using ML models.",
    description:
      "A natural language processing project for classifying social media sentiment across collected comments and posts.",
    techStack: ["Python", "Flask", "YouTube API", "Scikit-learn", "TF-IDF", "Logistic Regression", "SVM"],
    githubUrl: "https://github.com/VikasPatil64/youtube_sentiment_analysis",
    liveDemoUrl: null,
    featured: false,
    metrics: ["NLP pipeline", "YouTube data", "81% classification accuracy"],
    features: [
      "Classified YouTube comments with 81% accuracy using Logistic Regression and SVM with TF-IDF.",
      "Built Flask web app, YouTube API integration, and preprocessing pipeline (lemmatization, stopwords).",
      "Supports analysis workflows for trends and reactions on video comments.",
    ],
    architecture: [
      "YouTube API gathers text comments.",
      "Preprocessing cleans and normalizes text (stopwords removal, lemmatization).",
      "Classifier models generate sentiment ratings.",
    ],
    future: ["Add dashboards.", "Improve multilingual support.", "Deploy a live demo."],
  },
  {
    id: "heart",
    title: "Heart Disease Detection",
    slug: "heart-disease",
    category: "AI / Healthcare",
    shortDesc: "Heart sound classification using CNN-based audio analysis.",
    description:
      "A healthcare AI project that analyzes phonocardiogram audio recordings to detect abnormal heart sound patterns.",
    techStack: ["TensorFlow", "Librosa", "CNN", "Streamlit"],
    githubUrl: "https://github.com/VikasPatil64/heart_disease_detection",
    liveDemoUrl: null,
    featured: false,
    metrics: ["83% accuracy", "Audio classification", "CNN model"],
    features: [
      "Extracts audio features from heart sound recordings using Librosa.",
      "Classifies recordings using a custom Convolutional Neural Network (CNN) model.",
      "Supports screening-oriented experimentation with 83% accuracy.",
    ],
    architecture: [
      "PCG audio is converted into spectrograms and model-ready features.",
      "CNN model learns abnormal sound patterns.",
      "Prediction output summarizes the classification details.",
    ],
    future: ["Add model explainability.", "Create a demo UI.", "Add dataset documentation."],
  },
  {
    id: "ai-product-recommender",
    title: "AI Product Recommendation System",
    slug: "ai-product-recommender",
    category: "AI / Web App",
    shortDesc: "AI-powered product recommendation web app with natural language search powered by Google Gemini.",
    description:
      "A React-based web application that leverages Google Gemini API to deliver intelligent product recommendations, natural language search, and similar product suggestions through a modern card-based UI.",
    techStack: ["React", "Vite", "JavaScript", "Google Gemini API", "Vercel"],
    githubUrl: "https://github.com/VikasPatil64/ai-product-recommendation-system",
    liveDemoUrl: "https://ai-product-recommender-khaki.vercel.app/",
    featured: false,
    metrics: ["AI-Powered Search", "Gemini API", "Deployed on Vercel", "Responsive UI"],
    features: [
      "Natural language search powered by Google Gemini API for intuitive product discovery.",
      "AI-generated personalized product recommendations based on user queries.",
      "Similar product suggestions to enhance browsing and increase discoverability.",
      "Responsive, card-based UI optimized for desktop and mobile devices.",
      "Deployed on Vercel for fast, globally distributed access.",
    ],
    problem: "Traditional e-commerce search relies on exact keyword matching, making it difficult for users to discover relevant products through natural queries. Users often struggle to find what they want when they cannot recall exact product names or categories. This project explores how large language models can transform product discovery by understanding intent, context, and natural language.",
    solutionDetails: [
      { title: "Natural Language Understanding", desc: "Google Gemini API interprets user queries in natural language, understanding intent rather than relying on exact keyword matching." },
      { title: "AI Recommendations Engine", desc: "Gemini generates contextually relevant product suggestions tailored to the user's expressed needs and preferences." },
      { title: "Similar Product Discovery", desc: "The system surfaces related products to help users explore alternatives and make informed choices." },
      { title: "Responsive Frontend", desc: "React and Vite power a fast, modern card-based interface that works seamlessly across devices." }
    ],
    architectureSteps: ["User Query", "Gemini API", "Recommendation Engine", "Product Catalog Filter", "Responsive Card UI"],
    engineeringDecisions: [
      { title: "Why Google Gemini API?", desc: "Provides powerful natural language understanding and generative AI capabilities for intelligent product recommendations." },
      { title: "Why React + Vite?", desc: "Enables fast development, hot module replacement, and optimized production builds for a smooth user experience." },
      { title: "Why Vercel?", desc: "Offers seamless deployment with GitHub integration, global CDN, and zero-configuration hosting for React apps." }
    ],
    challengesSolved: [
      "Transforming vague or natural language queries into meaningful product recommendations.",
      "Handling Gemini API response parsing to extract structured product data.",
      "Designing a clean, responsive card UI that adapts across screen sizes.",
      "Managing API quota limits during development and testing.",
      "Ensuring fast load times while integrating a live AI API backend.",
    ],
    impact: "This project demonstrates how generative AI can fundamentally improve product discovery in e-commerce by moving beyond keyword search. By leveraging Google Gemini's language understanding, the application provides a natural, conversational interface for exploring products — showcasing a practical and scalable approach to AI-assisted shopping experiences.",
    futureScope: [
      "Add user authentication and personalized recommendation history.",
      "Integrate a real product database or third-party e-commerce API (e.g., Shopify, Amazon).",
      "Implement voice search for hands-free product discovery.",
      "Add comparison feature to evaluate multiple products side by side.",
      "Build an admin dashboard to manage product catalog and monitor query analytics.",
      "Enhance recommendation diversity with multi-turn conversation support.",
    ]
  },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
