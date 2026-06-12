// src/App.jsx
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "./utils/themeContext";

// Helper component to handle smooth hash scrolling
function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      // Decode the hash in case there are spaces (e.g. #Coding Profiles)
      const targetId = decodeURIComponent(hash.replace("#", ""));
      const element = document.getElementById(targetId);
      if (element) {
        // Delay slightly to allow the DOM to fully render
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 150);
        return () => clearTimeout(timer);
      }
    } else {
      // If we change pages (e.g., from project detail to home) and there is no hash, scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [hash, pathname]);

  return null;
}

function App() {
  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-black text-neutral-900 dark:text-neutral-100 min-h-screen flex flex-col transition-colors duration-300">
        <ScrollToHash />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            {/* Main Single Page landing */}
            <Route path="/" element={<Home />} />
            
            {/* Dynamic Project detail page */}
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            
            {/* 404 - Catch all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;