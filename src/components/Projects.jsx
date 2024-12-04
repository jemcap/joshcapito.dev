import React from "react";
import UpcomingProjects from "./UpcomingProjects";
import Contributions from "./Contributions";
import { projectsList } from "../constants/lists";
import { GithubIcon } from "../utils/utils";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <section className=" h-full py-20">
      <div className="flex flex-col gap-10 align-elements  pb-20">
        <div className="text-center">
          <h1 className=" text-2xl font-bold">Featured Projects</h1>
          <p className="text-xs">
            Check out some of my projects I've done below
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projectsList.map((project) => {
            const { id, title, thumbnail, stack } = project;
            return (
              <div
                key={id}
                className="relative group bg-base-100 shadow-2xl hover:shadow-2xl  transition-all 2s ease cursor-pointer"
              >
                <Link to={`/project/${id}`}>
                  <figure className=" w-full ">
                    <img
                      src={thumbnail}
                      alt={title}
                      className="object-cover w-full h-full"
                    />
                  </figure>

                  <div className="absolute inset-0 flex gap-10 flex-col items-center justify-center bg-black backdrop-blur bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-xl font-bold">{title}</p>
                    <ul className="grid grid-cols-3 gap-2 ">
                      {stack.map((item) => {
                        const { id, label } = item;
                        return (
                          <li
                            key={id}
                            className="border-4 text-pink-700 bg-pink-100 border-pink-200 border-b-pink-300 p-1 rounded-xl text-[0.55rem] text-center flex justify-center items-center"
                          >
                            {label}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </Link>
                {/* <div className="card-body flex-1 max-lg:gap-8">
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-start sm:items-center">
                    <h2 className="card-title text-xl max-sm:text-2xl">
                      {title}
                    </h2>
                    <small className="border-2 sm:border-4 text-indigo-700 bg-indigo-100 border-indigo-200 border-b-indigo-300 flex items-center p-1 rounded-xl text-xs">
                      {type}
                    </small>
                  </div>
                  <p className="text-start text-sm">{description}</p>
                  <p className="text-start">
                    <ul className="flex gap-2 flex-wrap mb-7">
                      {stack.map((item) => {
                        const { id, label } = item;
                        return (
                          <li
                            key={id}
                            className="border-4 text-pink-700 bg-pink-100 border-pink-200 border-b-pink-300 flex items-center p-1 rounded-xl text-xs"
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
                          <GithubIcon className="text-lg sm:text-sm" />
                          <span className="ml-2 text-sm">
                            GitHub repository
                          </span>
                        </div>
                      </a>
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
                    </div>
                  </div>
                </div> */}
              </div>
            );
          })}
        </div>
      </div>
      <section className="mt-20">
        <UpcomingProjects />
        <Contributions />
      </section>
    </section>
  );
};

export default Projects;
