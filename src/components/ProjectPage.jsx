import React from "react";
import { projectsList } from "../constants/lists";

const ProjectPage = ({ id }) => {
  console.log(id);

  let project = projectsList.find((project) => project.id === String(id));
  console.log(project);

  if (!project) {
    return <p>Project not found.</p>; // Handle invalid project ID
  }

  const { title, type, image, description, stack, github, website } = project;

  return (
    <div className="flex flex-col items-center align-elements">
      <div>
        <img src={image || "https://placehold.co/900x700"} alt={title} />
      </div>
      <div className="card-body flex-1 max-lg:gap-8 w-full">
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-start sm:items-center">
          <h2 className="card-title text-xl max-sm:text-2xl">{title}</h2>
          <small className="border-2 sm:border-4 text-indigo-700 bg-indigo-100 border-indigo-200 border-b-indigo-300 flex items-center p-1 rounded-xl text-xs">
            {type}
          </small>
        </div>
        <p className="text-start text-sm">{description}</p>

        {/* Render Stack */}
        <ul className="flex gap-2 flex-wrap mb-7">
          {stack.map((item) => (
            <li
              key={item.id}
              className="border-4 text-pink-700 bg-pink-100 border-pink-200 border-b-pink-300 p-1 rounded-xl flex items-center  text-xs"
            >
              {item.label}
            </li>
          ))}
        </ul>

        <div className="card-actions justify-start">
          <div className="w-full flex flex-col sm:flex-row gap-6 sm:gap-2 items-center">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="border-4 py-1 lg:py-2 px-4 lg:px-5 border-black rounded-full w-full sm:w-auto"
              >
                <div className="flex justify-center items-center text-xs max-sm:text-xl">
                  <span className="ml-2 text-sm">GitHub repository</span>
                </div>
              </a>
            )}
            {website && (
              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black py-2 lg:py-3 px-4 lg:px-5 rounded-full text-white w-full sm:w-auto"
              >
                <div className="w-auto flex justify-center items-center text-xs max-sm:text-sm">
                  <span className="flex items-center text-sm">
                    Visit site
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      className="w-4 h-4 ml-2"
                    >
                      <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </span>
                </div>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
