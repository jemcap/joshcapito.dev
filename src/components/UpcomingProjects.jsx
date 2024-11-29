import { projectsInProgress } from "../constants/lists";

const UpcomingProjects = () => {
  return (
    <>
      <div className="flex flex-col gap-10 align-elements pb-20 border-b-2 border-neutral-300 border-t-2 border-t-neutral-300 py-20 my-20">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Projects in Progress</h1>
          <p>Here are some exciting projects I'm currently building</p>
        </div>
        <div>
          {projectsInProgress.map((project) => {
            const { id, title, type, description } = project;
            return (
              <div
                key={id}
                className="text-start md:mx-20 my-20 border-l-2 pl-5"
              >
                <h1 className="text-xl font-bold">{title}</h1>
                <small className="text-neutral-500">{type}</small>
                <p className="mt-5 text-justify">{description}</p>
              </div>
            );
          })}
        </div>
        <div>
          <a
            href="https://github.com/jemcap"
            target="_blank"
            noopener
            noreferrer
            className=" items-center text-white border bg-black rounded-full py-2 px-6 gap-2 inline-flex "
          >
            <span
              className="text-2xl lg:text-lg"
              aria-label="View GitHub Projects button"
            >
              View More Projects
            </span>
            <svg
              class="w-4"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              className="w-6 h-6 ml-2"
            >
              <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </>
  );
};

export default UpcomingProjects;
