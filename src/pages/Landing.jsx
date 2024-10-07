import { useRef } from "react";
import Introduction from "../components/Introduction";
import About from "../components/About";
import Projects from "../components/Projects";
import { useGlobalContext } from "../context/context";

const Landing = () => {
  const { projectsRef } = useGlobalContext();
  return (
    <>
      <Introduction />
      <About />
      <div ref={projectsRef}>
        <Projects />
      </div>
    </>
  );
};

export default Landing;
