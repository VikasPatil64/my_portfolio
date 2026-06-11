import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";

function Home() {
  return (
    <>
      <Hero />

      <div className="max-w-6xl mx-auto px-6">
        <div className="border-t border-gray-300"></div>
      </div>

      <About />

      <div className="max-w-6xl mx-auto px-6">
        <div className="border-t border-gray-300"></div>
      </div>

      <Projects />
    </>
  );
}

export default Home;