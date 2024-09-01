import javaLogo from "../assets/logos/java.svg";
import pythonLogo from "../assets/logos/python.svg";
import javascriptLogo from "../assets/logos/javascript.svg";
import typescriptLogo from "../assets/logos/typescript.svg";
import cLogo from "../assets/logos/c.svg";
import swiftLogo from "../assets/logos/swift.svg";
import reactLogo from "../assets/logos/react.svg";
import awsLogo from "../assets/logos/aws.svg";
import firebaseLogo from "../assets/logos/firebase.svg";
import mongodbLogo from "../assets/logos/mongodb.svg";
import sqlLogo from "../assets/logos/sql.svg";
import nodeLogo from "../assets/logos/node.svg";
import expressLogo from "../assets/logos/express.svg";
import tamaguiLogo from "../assets/logos/tamagui.svg";
import gitLogo from "../assets/logos/git.svg";
// ;)
const tools = [
  { name: "Java", logo: javaLogo },
  { name: "Python", logo: pythonLogo },
  { name: "JavaScript", logo: javascriptLogo },
  { name: "TypeScript", logo: typescriptLogo },
  { name: "C#", logo: cLogo },
  { name: "Swift", logo: swiftLogo },
  { name: "React", logo: reactLogo },
  { name: "AWS", logo: awsLogo },
  { name: "Google Firebase", logo: firebaseLogo },
  { name: "MongoDB", logo: mongodbLogo },
  { name: "SQL", logo: sqlLogo },
  { name: "Node", logo: nodeLogo },
  { name: "Express", logo: expressLogo },
  { name: "Tamagui", logo: tamaguiLogo },
  { name: "Git", logo: gitLogo },
];

function ToolSlide({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="slide">
      <div className="flex h-32 w-32 items-center justify-center p-4">
        <img
          src={logo}
          alt={`${name} logo`}
          className="max-h-full max-w-full object-contain"
        />
      </div>
      <p className="mt-2 w-32 text-center">{name}</p>
    </div>
  );
}

function Tools() {
  return (
    <div className="mx-auto max-w-6xl px-3">
      <h2 className="mb-4 text-center text-5xl font-bold tracking-tight text-white">
        Tools
      </h2>
      <div className="relative overflow-hidden py-8">
        <div className="absolute bottom-0 left-0 top-0 z-10 w-24 bg-gradient-to-r from-[#0f061b] to-transparent"></div>
        <div className="slide-track">
          {tools.concat(tools).map((tool, index) => (
            <ToolSlide key={`${tool.name}-${index}`} {...tool} />
          ))}
        </div>
        <div className="absolute bottom-0 right-0 top-0 z-10 w-24 bg-gradient-to-l from-[#0f061b] to-transparent"></div>
      </div>
    </div>
  );
}

export default Tools;
