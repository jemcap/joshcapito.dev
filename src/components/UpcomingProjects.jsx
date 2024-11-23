import { projectsInProgress } from "../constants/lists";

const UpcomingProjects = () => {
  return (
    <>
      <div className="flex flex-col gap-10 align-elements pb-20 max-w-xl">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Projects in Progress</h1>
          <p>
            Here are some projects I'm currently contributing to or building
          </p>
        </div>
        <div>
          {projectsInProgress.map((project) => {
            const { id, title, type, description } = project;
            return (
              <div
                key={id}
                className="border-b-2 border-b-slate-100 text-start py-10"
              >
                <h1 className="text-xl font-bold">{title}</h1>
                <small className="text-neutral-500">{type}</small>
                <p className="mt-5">{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default UpcomingProjects;
