import React from "react";
import PurpleGradient from "../assets/PurpleGradient.svg";
function Hero() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-5xl py-32 sm:py-48 lg:py-56">
        <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-20">
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={600}
              height={600}
              viewBox="50 -50 500 500"
              fill="none"
              className="absolute"
            >
              <ellipse
                cx="192.5"
                cy="215.5"
                rx="192.5"
                ry="215.5"
                fill="url(#paint0_radial_16_10)"
              />
              <defs>
                <radialGradient
                  id="paint0_radial_16_10"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(192.5 215.5) rotate(90) scale(215.5 192.5)"
                >
                  <stop stop-color="#763CAC" />
                  <stop
                    offset="1"
                    stop-color="#320F85"
                    stop-opacity="0"
                  />
                </radialGradient>
              </defs>
            </svg>
            <img
              src="https://avatars.githubusercontent.com/u/67920321?v=4"
              className="w-52 h-52 rounded-full object-cover z-10 self-center opacity-95"
              alt="Kushal's avatar"
            />
          </>
          <div className="text-left">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
              Hello, I'm <span className="text-accent">Kushal</span> 👋 .
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-300">
              I'm a <b>Software Engineer</b> based in Maryland, driven by the challenge of
              transforming concepts into innovative software solutions.
              <br />
              Dive into my latest experience, projects, and education, where I showcase my expertise
              in creating cutting-edge technology across various platforms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
