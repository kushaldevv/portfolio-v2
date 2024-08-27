import * as Types from "../types";

const experience1: Types.Experience = {
  companyName: "Company Name",
  image: "",
  shortDescription: "",
};

const experience2: Types.Experience = {
  companyName: "Company Name",
  image: "",
  shortDescription: "",
};

const experiences: Types.Experience[] = [experience1, experience2];

function Experience() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <h2 className="text-4xl font-bold tracking-tight text-white">
        Experience
      </h2>
      <div className="flex justify-between mt-8">
        {experiences.map((experience, index) => (
          <div key={index} className="rounded-lg border-t-4 border-accent h-48 w-[47.5%]"
          style={{
            backgroundImage: 'linear-gradient(145deg, #130428 7%, #251043 34%, #38126D 57%, #261045 85%, #190634 100%)'
          }}>
            {experience.companyName}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
