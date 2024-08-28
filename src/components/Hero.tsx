import RadialGradient from "./RadialGradient";
import { scrollTo } from "./util";

function Hero() {
  return (
    <section id='hero' className="h-dvh px-6 py-32 sm:py-48 lg:px-8 lg:py-72">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-20">
          <div className="relative mx-auto my-auto mb-8 aspect-square w-full max-w-[275px] items-center lg:mx-0 lg:mb-0">
            <div className="absolute inset-0 z-10 translate-x-[-20%] translate-y-[-20%]">
              <RadialGradient width={400} height={400} className="absolute" />
            </div>
            <img
              src="https://i.ibb.co/MZ4M0yv/pfp.png"
              // src='pfp.png'
              className="relative z-20 mt-16 h-3/4 w-3/4 rounded-full object-cover opacity-70 sm:mt-0 sm:h-full sm:w-full"
              alt="Kushal's avatar"
            />
          </div>
          <div className="text-left">
            <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
              Hello, I'm{" "}
              <span className="to-accent bg-gradient-to-br from-purple-400 bg-clip-text font-bold text-transparent">
                Kushal
              </span>{" "}
              👋 .
            </h1>
            <p className="mb-10 mt-6 text-xl leading-8 text-gray-300">
              I'm a <strong>Software Engineer</strong> based in Maryland, driven
              by the challenge of transforming concepts into innovative software
              solutions.
              <br />
              Dive into my latest experience, projects, and education, where I
              showcase my expertise in creating cutting-edge technology across
              various platforms.
            </p>
            <a
              onClick={() => {
                scrollTo("contact");
              }}
              className="to-accent cursor-pointer rounded-md bg-gradient-to-br from-purple-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gradient-to-br hover:from-purple-600 hover:to-purple-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Message
            </a>
            <a
              onClick={() => {
                scrollTo("experience");
              }}
              className="ml-6 cursor-pointer text-sm font-semibold leading-6 text-white hover:text-gray-300"
            >
              Scroll down<span aria-hidden="true"> ↓</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
