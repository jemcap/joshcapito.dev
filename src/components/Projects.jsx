import React from "react";
import { projectsList } from "../constants/lists";
import { GithubIcon } from "../utils/utils";

const Projects = () => {
  return (
    <section className=" h-full py-20">
      <div className="flex flex-col gap-10 align-elements">
        <div className="text-center">
          <h1 className=" text-3xl font-bold">Featured Projects</h1>
          <p>Check out some of my projects I've done below</p>
        </div>
        <div className="grid grid-cols-1 gap-12">
          {projectsList.map((project) => {
            const {
              id,
              title,
              type,
              image,
              description,
              stack,
              github,
              website,
            } = project;
            return (
              <div
                key={id}
                className="card card-side bg-base-100 shadow-lg mt-6"
              >
                <figure className="hidden md:flex md:flex-[0.35]">
                  <img
                    src={image}
                    alt={title}
                    className="object-cover w-[750px] h-full hidden md:flex"
                  />
                </figure>
                <div className="card-body flex-1 max-lg:gap-8">
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-start sm:items-center">
                    <h2 className="card-title text-2xl max-sm:text-3xl">
                      {title}
                    </h2>
                    <small className="border-2 sm:border-4 border-indigo-200 border-b-indigo-500 flex items-center p-1 sm:p-2 rounded-xl text-xs sm:text-sm">
                      {type}
                    </small>
                  </div>
                  <p className="text-start max-md:text-lg">{description}</p>
                  <p className="text-start">
                    <ul className="flex gap-2 flex-wrap mb-7">
                      {stack.map((item) => {
                        const { id, label } = item;
                        return (
                          <li
                            key={id}
                            className="border-4 border-pink-200 border-b-pink-500 flex items-center p-1 rounded-xl"
                          >
                            {label}
                          </li>
                        );
                      })}
                    </ul>
                  </p>

                  <div className="card-actions justify-start">
                    <div className="w-full flex flex-col sm:flex-row gap-6 sm:gap-2 items-center">
                      <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-4 py-1 lg:py-2 px-4 lg:px-5 border-black rounded-full w-full sm:w-auto"
                      >
                        <div className="flex justify-center items-center text-xs max-sm:text-xl">
                          <GithubIcon className="text-lg sm:text-xl" />
                          <span className="ml-2">GitHub repository</span>
                        </div>
                      </a>
                      <a
                        href={website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-black py-2 lg:py-3 px-4 lg:px-5 rounded-full text-white w-full sm:w-auto"
                      >
                        <div className="w-auto flex justify-center items-center text-xs max-sm:text-xl">
                          <span className="flex items-center">
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
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
