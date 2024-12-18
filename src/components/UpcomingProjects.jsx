import { useState, useEffect } from "react";

import { client } from "../client";

const UpcomingProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchUpcomingProjects = async () => {
      try {
        const query = `*[_type == 'upcomingProjects']{
        _id,
        title,
        type,
        description,
        projectStatus
        }`;
        const data = await client.fetch(query);
        if (data.length > 0) {
          setProjects(data);
        } else {
          console.log("Projects not found");
        }
      } catch (error) {
        console.log("Error fetching projects:", error);
        throw new Error(error.message);
      }
    };
    fetchUpcomingProjects();
  }, []);

  return (
    <>
      <div className="flex flex-col gap-10 align-elements pb-20 border-b-2 border-neutral-300 border-t-2 border-t-neutral-300 py-20 my-20">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Projects in Progress</h1>
          <p className="text-xs">
            Here are some exciting projects I'm currently building
          </p>
        </div>
        <div>
          {projects.map((project) => {
            const { _id, title, type, description, projectStatus } = project;
            return (
              <div
                key={_id}
                className="text-start md:mx-20 my-20 border-l-2 pl-5"
              >
                <div className="flex flex-col gap-5 lg:flex-row justify-between">
                  <div>
                    <h1 className="text-xl font-semibold">{title}</h1>
                    <small className="text-neutral-500">
                      {type.join(", ")}
                    </small>
                  </div>
                  <div>
                    <div
                      className={`flex justify-between w-fit gap-2 items-center mt-5 py-1 px-2 rounded-full border-2 border-b-4 text-justify text-xs ${
                        projectStatus === "In Progress"
                          ? "border-blue-300 bg-blue-200"
                          : "border-orange-300 bg-orange-200"
                      }`}
                    >
                      <div
                        className={`w-2 h-2 ${
                          projectStatus === "In Progress"
                            ? "bg-blue-500"
                            : "bg-orange-500"
                        } rounded-full`}
                      ></div>
                      {projectStatus}
                    </div>
                  </div>
                </div>
                <p className="mt-5 text-justify text-sm">{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default UpcomingProjects;
