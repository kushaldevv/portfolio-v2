import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Tools from "./components/Tools";
import Project from "./components/Project";
import Contact from "./components/Contact";
import * as Types from "./types";
import terpExchangeUrl from "./assets/terpExchange.png";
import sortingUrl from "./assets/sorting.png";
import gainzUrl from "./assets/gainz.png";
// import comingSoonUrl from "./assets/comingSoon.png";

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
  image: gainzUrl,
  github: "https://github.com/kushaldevv/gainzApp",
  demo: "https://www.youtube.com/watch?v=iAC8FYCfB2A",
};

const project2: Types.Project = {
  title: "Sorting Algorithm Visualizer",
  techStack: ["Javascript", "React"],
  description:
    "Created a website using React.js that simulates sorting algorithms, providing a hands-on and interactive learning experience. Incorporated time complexity, auxiliary space, and stability analysis for each sorting algorithm. Assisted peers in improving their test scores by 15% through the utilization of the simulator as a study resource.",
  image: sortingUrl,
  github: "https://github.com/kushaldevv/Sorting-Visualizer",
  demo: "https://sorting-algorithms-viz.web.app/",
};

const project3: Types.Project = {
  title: "TerpExchange",
  techStack: ["Swift", "Firebase"],
  description:
    "Led a team to develop an iOS application in Swift, enabling campus students to buy and sell products. Integrated Firebase Cloud Firestore for real-time data management, including peer-to-peer chat functionality. Optimized Firebase Storage, reducing product image storage overhead by 40%. Implemented Firebase Authentication to restrict access to campus students only.",
  image: terpExchangeUrl,
  github: "https://github.com/kushaldevv/terpXchange",
  demo: "https://www.youtube.com/watch?v=CR91i9f5n8U",
};

const projects: Types.Project[] = [project1, project2, project3];

function App() {
  // const contactRef = useRef<HTMLElement | null>(null);

  // const handleScroll = () => {
  //   contactRef.current?.scrollIntoView({ behavior: "smooth" });
  // };

  return (
    <>
      <Navbar />
      <Hero />
      <div className="space-y-20 lg:space-y-32">
        <div className="space-y-20 lg:space-y-28">
          <Experience />
          <Tools />
        </div>
        <div id="projects" className="space-y-36 lg:space-y-44">
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
          Built with <span className="animate-pulse">❤️</span>  in Maryland, US
        </a>
      </div>
    </>
  );
}

export default App;
