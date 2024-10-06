import React from "react";
import { projectsList } from "../constants/lists";

const Projects = () => {
  return (
    <section className="bg-neutral-100 h-full py-10">
      <div className="flex flex-col gap-10 align-elements">
        <div className="text-center text-3xl font-bold">
          <h1>Featured Projects</h1>
        </div>
        <div className="grid grid-cols-1 gap-8">
          {projectsList.map((project) => {
            const { id, title, type, description, stack } = project;
            return (
              <div key={id} className="card card-side bg-base-100 shadow-xl">
                <figure className="hidden md:flex md:flex-[0.35]">
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                    alt="Movie"
                    className="object-cover w-full h-full hidden md:flex"
                  />
                </figure>
                <div className="card-body flex-1">
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-start sm:items-center">
                    <h2 className="card-title text-xl sm:text-2xl">{title}</h2>
                    <small className="border-2 sm:border-4 border-indigo-200 border-b-indigo-500 flex items-center p-1 sm:p-2 rounded-xl text-xs sm:text-sm">
                      {type}
                    </small>
                  </div>
                  <p className="text-start">{description}</p>
                  <p className="text-start">
                    <ul className="flex gap-2 flex-wrap">
                      {stack.map((item) => (
                        <li className="border-4 border-pink-200 border-b-pink-500 flex items-center p-1 rounded-xl">
                          {item.label}
                        </li>
                      ))}
                    </ul>
                  </p>

                  <div className="card-actions justify-start">
                    <div className="flex gap-2">
                      <a href="">GitHub repository</a>
                      <a href="">Visit site</a>
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
