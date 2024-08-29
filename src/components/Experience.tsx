import * as Types from "../types";
import contructionUrl from "../assets/construction.png";
import devtaxUrl from "../assets/devtax.png";
import { useState } from "react";
import Modal from "./Modal";

const experience1: Types.Experience = {
  companyName: "Dev Tax & Accounting",
  image: devtaxUrl,
  date: "May 2022 - August 2023",
  shortDescription: "Fullstack Software Engineer intern",
  longDescription: [
    "• Developed a fully responsive website using React.js and Chakra UI.",
    "• Integrated a secure file transfer system for users to upload files securely, while also implementing backend email functionality for the contact form to ensure seamless communication.",
    "• Executed SEO best practices, including establishing a sitemap, implementing semantic HTML, and optimizing keywords, resulting in a 25% increase in customer engagement.",
    "• Launched AWS EC2 virtual servers to enable remote work and increase employee access. Configured security and networking settings for client data protection"
  ],
};

const experience2: Types.Experience = {
  companyName: "Under Construction",
  image: contructionUrl,
  date: "",
  shortDescription: "",
  longDescription: ["This section is under construction. Please check back later. 🗿"],
};

const experiences: Types.Experience[] = [experience1, experience2];

function Experience() {
  const [showModal, setShowModal] = useState(false);
  const [experience, setExperience] = useState(experiences[0]);
  return (
    <div id="experience" className="mx-auto max-w-6xl px-3">
      <h2 className="mb-12 text-center text-5xl font-bold tracking-tight text-white">
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
              className="aspect-square w-32 rounded-lg"
            />
            <div className="ml-4 text-left">
              <h2 className="text-2xl font-semibold text-white">
                {experience.companyName}
              </h2>
              <p className="text-xs">{experience.shortDescription}</p>
              <p className="text-xs text-gray-400">{experience.date}</p>
              <button
                onClick={() => {
                  setExperience(experience);
                  setShowModal(true);
                }}
                className="bg-accent/15 border-accent hover:bg-accent/50 mt-3 rounded-xl border-2 px-4 py-2 text-xs font-medium text-white"
              >
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
      <Modal
        open={showModal}
        setOpen={setShowModal}
        title={experience.companyName}
        description={experience.longDescription}
      />
    </div>
  );
}

export default Experience;
