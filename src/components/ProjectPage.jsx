import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { client } from "../client";
import { PortableText } from "@portabletext/react";

const ProjectPage = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);
  const id = useParams().id;

  useEffect(() => {
    const getProject = async () => {
      try {
        const query = `*[_type == "project"]{
          _id,
          title,
          type,
          "thumbnail": thumbnail.asset->url,
          image,
          description,
          problemOpportunity,
          solution,
          impact,
          stack,
          github,
          website
        }`;
        const data = await client.fetch(query);
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setIsError("Error fetching projects");
      } finally {
        setIsLoading(false);
      }
    };
    getProject();
  }, []);

  const project = projects.find((project) => project._id === id);
  if (isLoading) {
    return (
      <div className="flex flex-col h-screen items-center justify-center">
        <div className="flex w-64 flex-col gap-4">
          <div className="skeleton h-32 w-full"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="h-screen flex items-center justify-center">
        <h1>{isError}</h1>
      </div>
    );
  }

  const {
    title,
    type,
    thumbnail,
    image,
    description,
    problemOpportunity,
    solution,
    impact,
    stack,
    github,
    website,
  } = project;

  return (
    <div className="flex flex-col items-center align-elements">
      <div>
        <img
          src={thumbnail || "https://placehold.co/900x700"}
          alt={title}
          className="shadow-2xl w-full"
        />
      </div>
      <div className="card-body flex-1 max-lg:gap-8 w-full">
        <div className="flex flex-row flex-wrap gap-2 items-start justify-between">
          <h2 className="card-title text-xl max-sm:text-2xl">{title}</h2>
          <div className="flex flex-row gap-2 flex-wrap">
            {type.map((item) => (
              <small className=" border-2 sm:border-4 text-indigo-700 bg-indigo-100 border-indigo-200 border-b-indigo-300 flex items-center p-1 rounded-xl text-xs">
                {item}
              </small>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-5">
          {/* Use PortableText for rich text rendering */}
          <div className="text-start text-sm">
            <PortableText value={description} />
          </div>

          {/* Render Problem Opportunity */}
          <div className="text-start text-sm flex gap-2 flex-col">
            <p>Problem / Opportunity:</p>
            <p>{problemOpportunity}</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-start text-sm">Solutions:</p>
            <ul className="text-start text-sm border-l-2 pl-10 list-disc ">
              {solution.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-start text-sm">Impact:</p>
            <ul className="text-start text-sm border-l-2 pl-10 list-disc">
              {impact.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Render Stack */}
        <ul className="flex gap-2 flex-wrap my-7">
          {stack.map((item) => (
            <li
              key={item._id}
              className="border-4 text-pink-700 bg-pink-100 border-pink-200 border-b-pink-300 p-1 rounded-xl flex items-center text-xs"
            >
              {item}
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
