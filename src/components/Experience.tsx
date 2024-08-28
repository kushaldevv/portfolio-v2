import * as Types from "../types";

const experience1: Types.Experience = {
  companyName: "Dev Tax & Accounting",
  image: "",
  date: "May 2022 - August 2023",
  shortDescription: "Fullstack Software Engineer intern",
};

const experience2: Types.Experience = {
  companyName: "Company Name",
  image: "",
  date: "",
  shortDescription: "",
};

const experiences: Types.Experience[] = [experience1, experience2];

function Experience() {
  return (
    <div className="mx-auto max-w-6xl px-3">
      <h2 className="mb-8 text-center text-5xl font-bold tracking-tight text-white">
        Experience
      </h2>
      <div className="flex flex-col items-center lg:flex-row lg:justify-center lg:space-x-4">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="border-accent mb-4 flex h-48 w-full max-w-[36rem] items-center justify-center rounded-lg border-t-4 lg:mb-0"
            style={{
              backgroundImage:
                "linear-gradient(145deg, #130428 7%, #251043 34%, #38126D 57%, #261045 85%, #190634 100%)",
            }}
          >
            <img
              src={experience.image}
              alt={experience.companyName}
              className="aspect-square w-28 bg-red-400"
            />
            <div className="ml-4 text-left">
              <h2 className="text-2xl font-semibold text-white">
                {experience.companyName}
              </h2>
              <p className="text-xs">{experience.shortDescription}</p>
              <p className="text-xs text-gray-400">{experience.date}</p>
              <button className="bg-accent/15 border-accent mt-3 rounded-xl border-2 px-4 py-2 text-xs font-medium text-white hover:bg-accent/50">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
