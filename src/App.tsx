import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import * as Types from "./types";
// import { useRef } from "react";

const project1: Types.Project = {
  title: "GAINZ",
  techStack: [
    "React Native",
    "TypeScript",
    "Python",
    "AWS",
    "Clerk",
    "Tamagui",
  ],
  description:
    "Co-developed a React Native/Expo mobile app for fitness tracking and social networking. Designed a RESTful API on AWS using API Gateway and Lambda functions to manage and process data with DynamoDB. Integrated Clerk for user authentication and built the frontend using TypeScript and Tamagui.",
  github: "https://github.com/kushaldevv",
  demo: "https://github.com/kushaldevv",
};

const projects: Types.Project[] = [project1, project1, project1, project1];

function App() {
  // const contactRef = useRef<HTMLElement | null>(null);
  
  // const handleScroll = () => {
  //   contactRef.current?.scrollIntoView({ behavior: "smooth" });
  // };

  return (
    <>
      <Navbar />
      <Hero />
      <div className="mt-20 space-y-20 lg:mt-0 lg:space-y-32">
        <Experience />
        <Skills />
        <div id='projects' className="space-y-36 lg:space-y-44">
          {projects.map((project, index) => (
            <Project key={index} project={project} reversed={index % 2 == 1} />
          ))}
        </div>
        <Contact />
      </div>
      <div className="mx-auto flex max-w-7xl p-10 pt-24 lg:px-8">
        <a className="w-full self-center text-center">
          © 2024 Kushal Devkota. All rights reserved
          <br />
          Built with ❤️ in Maryland, US
        </a>
      </div>
    </>
  );
}

export default App;
