import { useRef } from "react";
import Introduction from "../components/Introduction";
import About from "../components/About";
import Projects from "../components/Projects";
import { useGlobalContext } from "../context/context";
import Contact from "../components/Contact";

const Landing = () => {
  const { projectsRef, contactRef } = useGlobalContext();
  return (
    <>
      <Introduction />
      <About />
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </>
  );
};

export default Landing;
