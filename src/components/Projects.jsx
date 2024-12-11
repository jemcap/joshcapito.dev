import React, { useEffect, useState } from "react";
import UpcomingProjects from "./UpcomingProjects";
import Contributions from "./Contributions";
import { projectsList } from "../constants/lists";
import { GithubIcon } from "../utils/utils";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import { client } from "../client";

const Projects = () => {
  const [projectData, setProjectData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const query = `*[_type == "project"]{
                _id,
              title,
              type,
              problemOpportunity,
    solution,
    impact,
              "thumbnail": thumbnail.asset->url,
              stack,
            }`;

        const data = await client.fetch(query);
        if (data.length > 0) {
          console.log(data);
          setProjectData(data);
        } else {
          setError("Projects not found");
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
        setError("Error fetching projects");
      } finally {
        setIsLoading(false);
      }
    };
    fetchProjects();
  }, []);

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;

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
          {projectData.map((project) => {
            const { _id, title, thumbnail, stack } = project;
            return (
              <div
                key={_id}
                className="relative group bg-base-100 shadow-2xl hover:shadow-2xl  transition-all 2s ease cursor-pointer"
              >
                <Link to={`/project/${_id}`}>
                  <figure className=" w-full">
                    <img
                      src={thumbnail}
                      alt={title}
                      className="object-cover w-full h-full"
                    />
                  </figure>
                  <div className="absolute inset-0 flex gap-10 flex-col items-center justify-center bg-black backdrop-blur bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-xl font-bold">{title}</p>
                    <ul className="grid grid-cols-3 gap-2 ">
                      {stack &&
                        stack.map((tech) => {
                          return (
                            <li
                              key={uuidv4()}
                              className="border-4 text-pink-700 bg-pink-100 border-pink-200 border-b-pink-300 p-1 rounded-xl text-[0.65rem] text-center flex justify-center items-center"
                            >
                              {tech}
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                </Link>
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
