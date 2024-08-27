import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Project from "./components/Project";
import Contact from "./components/Contact";
import * as Types from "./types";

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

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="space-y-14 lg:space-y-28">
        <Project project={project1} reversed={false} />
        <Project project={project1} reversed={true} />
        <Project project={project1} reversed={false} />
        <Project project={project1} reversed={true} />
      </div>
      <Contact />
      <div className="mx-auto flex max-w-7xl p-12 lg:px-8">
        <a className="w-full self-center text-center">
          © 2024 Kushal Devkota. All rights reserved
          <br />
          Built with ❤️ in Maryland, US
        </a>
      </div>
    </div>
  );
}

export default App;
