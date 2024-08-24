import React from "react";

function Hero() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="flex mx-auto max-w-3xl py-32 sm:py-48 lg:py-56 space-x-5">
        {/* <img
          width={200}
          src="https://avatars.githubusercontent.com/u/67920321?v=4"
        /> */}
        <div className="text-left">
          <p className="text-7xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Hello, I'm Kushal 👋 .
          </p>
          <p className="mt-6 text-xl text-left leading-8 text-gray-300">
            I'm a <b>Software Engineer</b> based in Maryland, driven by the challenge of
            transforming concepts into innovative software solutions.
            <br />
            Dive into my latest experience, projects, and education, where I showcase my expertise
            in creating cutting-edge technology across various platforms.
          </p>
        </div>
      </div>
      <div />
    </div>
  );
}

export default Hero;
