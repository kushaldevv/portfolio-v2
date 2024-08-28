import * as Types from "../types";
function Project({
  project,
  reversed,
}: {
  project: Types.Project;
  reversed: boolean;
}) {
  const content = (
    <div key={project.title} className="max-w-[36rem]">
      <div className={`${reversed && "text-right"}`}>
        <h2 className={`text-4xl font-bold tracking-tight text-blue-100`}>
          {project.title}
        </h2>
        <div>
          {project.techStack.map((item, index) => (
            <span key={index} className={`text-sm font-medium text-purple-400`}>
              {item}
              {index !== project.techStack.length - 1 ? ", " : ""}
            </span>
          ))}
        </div>
      </div>
      <div
        className={`${reversed && "lg:-translate-x-[7.5%]"} relative z-20 mt-5 items-center rounded-lg bg-gradient-to-br from-[#763CAC50] from-0% via-[#6EBFF422] via-75% to-[#4690D401] to-100% p-5 backdrop-blur-md backdrop-filter lg:w-[107.5%]`}
      >
        <p className="text-sm text-blue-100">{project.description}</p>
      </div>
      <div className={`${reversed && "text-right"} my-5 space-x-2`}>
        {project.github && (
          <button
            className="rounded-lg bg-white p-1.5 px-4 text-sm font-semibold text-purple-900 hover:bg-gray-300"
            onClick={() => window.open(project.github, "_blank")}
          >
            Github
          </button>
        )}
        {project.demo && (
          <button
            className="flex rounded-lg bg-white p-1.5 px-4 text-sm font-semibold text-purple-900 hover:bg-gray-300"
            onClick={() => window.open(project.demo, "_blank")}
          >
            Demo
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-5"
            >
              <path
                fillRule="evenodd"
                d="M15.75 2.25H21a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.81L8.03 17.03a.75.75 0 0 1-1.06-1.06L19.19 3.75h-3.44a.75.75 0 0 1 0-1.5Zm-10.5 4.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V10.5a.75.75 0 0 1 1.5 0v8.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.25a3 3 0 0 1 3-3h8.25a.75.75 0 0 1 0 1.5H5.25Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );

  const image = (
    <div
      key={project.title + "2"}
      className="relative aspect-video w-full max-w-[36rem] lg:h-72"
    >
      <div
        className={`absolute -inset-1/2 -translate-x-24`}
        style={{
          backgroundImage:
            "radial-gradient(circle, #763CAC 0%, #763CAC80 30%, rgba(118, 60, 172, 0) 45%)",
        }}
      />
      <div className="bg-navbar relative h-full w-full overflow-hidden rounded-lg">
        <div
          className={`absolute bottom-0 ${reversed ? "left-0 rounded-tr-xl" : "right-0 rounded-tl-xl"} h-[93.5%] w-[97%] bg-gray-100`}
        >
          🗿
        </div>
      </div>
    </div>
  );
  return (
    <div
      className={`mx-auto flex flex-col items-center px-3 lg:flex lg:max-w-6xl ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"} lg:justify-between`}
    >
      {[content, image]}
    </div>
  );
}

export default Project;
