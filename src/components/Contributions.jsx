import { projectsContributions } from "../constants/lists";

const Contributions = () => {
  return (
    <>
      <div className="flex flex-col gap-10 align-elements pb-20 max-w-xl">
        <div className="text-center">
          <h1 className="text-3xl font-bold">2024/2025 Contributions</h1>
          <p>Below are some other projects I have contributed to</p>
        </div>
        <div>
          {projectsContributions.map((project) => {
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

export default Contributions;
