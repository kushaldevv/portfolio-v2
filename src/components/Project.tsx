import * as Types from "../types";
function Project({
  project,
  reversed,
}: {
  project: Types.Project;
  reversed: boolean;
}) {
  const content = (
    <div key={project.title} className="w-3/4 py-2 lg:h-72 lg:w-1/2">
      <div className={`${reversed && "text-right"}`}>
        <h2 className={`text-4xl font-bold tracking-tight text-blue-100`}>{project.title}</h2>
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
      <div className={`${reversed && "text-right"} mt-5 space-x-2`}>
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
            className="rounded-lg bg-white p-1.5 px-4 text-sm font-semibold text-purple-900 hover:bg-gray-300"
            onClick={() => window.open(project.demo, "_blank")}
          >
            Demo
          </button>
        )}
      </div>
    </div>
  );

  const image = (
    <div key={project.title + '2'} className="relative aspect-video w-3/4 lg:h-72 lg:w-1/2">
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
        ></div>
      </div>
    </div>
  );
  return (
    <div className="mx-auto flex flex-col items-center px-6 lg:flex lg:max-w-6xl lg:flex-row lg:justify-between">
        {reversed ? [image, content] : [content, image]}
    </div>
  );
}

export default Project;
