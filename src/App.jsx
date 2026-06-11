import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

import Home from "./pages/Home";
import Alzheimer from "./pages/projects/Alzheimer";
import DevInsight from "./pages/projects/DevInsight";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/alzheimers" element={<Alzheimer />} />
        <Route path="/projects/devinsight-ai" element={<DevInsight />} />
      </Routes>
    </>
  );
}

export default App;