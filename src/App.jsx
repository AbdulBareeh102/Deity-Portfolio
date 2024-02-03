import { useEffect } from "react";
import Aos from "aos";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import Projects from "./components/Projects/Projects";
function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="w-full h-auto bg-bodyColor text-white">
      <Navbar />
      <div className="max-w-screen-2xl mx-auto px-16">
        <Hero />
        <Features />
        <Projects />
      </div>
    </div>
  );
}
export default App;
