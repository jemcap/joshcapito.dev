import React from "react";
import ProjectPage from "../components/ProjectPage";
import { useParams } from "react-router-dom";

const Work = () => {
  const { id } = useParams();
  console.log("Passed id:", id);
  return (
    <div className="flex flex-col h-full items-center min-h-screen ">
      <div className="text-center w-11/12 max-w-7xl text-4xl gap-2 mt-36">
        <ProjectPage id={id} />
      </div>
    </div>
  );
};

export default Work;
