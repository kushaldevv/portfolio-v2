// import React from 'react'

import RadialGradient from "./RadialGradient";

function Project() {
  return (
    <div className="mx-auto flex w-[60rem] justify-between">
      <div className="w-1/2">
        <a className="text-3xl font-bold tracking-tight">Project Name</a>
        <br />
        {["React", "Python", "Tailwind"].map((item, index) => (
          <a
            key={index}
            className="text-accent text-xs font-medium"
          >{`${item}${index !== 2 ? ", " : ""}`}</a>
        ))}
        <div className="w-[32rem] mt-5 h-32 items-center rounded-md border border-gray-100 bg-purple-600/50 bg-opacity-20 bg-clip-padding p-5 text-xs opacity-50 backdrop-blur-md backdrop-filter">
          <a className="text-white">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries.
          </a>
        </div>
        <div className="mt-5 space-x-2">
          <button className="rounded-full text-xs bg-slate-600 p-2 px-3 font-semibold">Demo</button>
          <button className="rounded-full text-xs bg-slate-600 p-2 px-3 font-semibold">Github</button>
        </div>
      </div>
      <div className="bg h-[275px] w-1/2 bg-navbar rounded-xl">
        test
        
        <div className="absolute  z-10 bg-red-500">
          {/* <RadialGradient width={400} height={400} className="absolute" /> */}
        </div>
      </div>
    </div>
  );
}

export default Project;
