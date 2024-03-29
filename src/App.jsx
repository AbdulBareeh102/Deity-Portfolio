import { useEffect } from "react";
import Aos from "aos";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import Projects from "./components/Projects/Projects";
import Contacts from "./components/Contacts/Contacts";
import FooterBottom from "./components/Footer/FooterBottom";
import BackToTopBtn from "./components/BackToTopBtn/BackToTopBtn";
function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <Hero />
        <Features />
        <Projects />
        <Contacts />
        <FooterBottom />
        <BackToTopBtn />
      </div>
    </div>
  );
}
export default App;
