import RadialGradient from "./RadialGradient";

function Hero() {
  return (
    <section className="px-6 py-32 pt-14 sm:py-48 lg:px-8 lg:py-56 h-dvh">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-20">
          <div className="relative mx-auto my-auto mb-8 aspect-square w-full max-w-[275px] items-center lg:mx-0 lg:mb-0">
            <div className="absolute inset-0 z-10 translate-x-[-20%] translate-y-[-20%]">
              <RadialGradient width={400} height={400} className="absolute" />
              <RadialGradient width={400} height={400} className="absolute opacity-25" />
            </div>
            <img
              src="https://i.ibb.co/MZ4M0yv/pfp.png"
              // src='pfp.png'
              className="relative z-20 mt-16 h-3/4 w-3/4 rounded-full object-cover opacity-75 sm:mt-0 sm:h-full sm:w-full"
              alt="Kushal's avatar"
            />
          </div>
          <div className="text-left">
            <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
              Hello, I'm <span className="text-accent">Kushal</span> 👋 .
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-300">
              I'm a <strong>Software Engineer</strong> based in Maryland, driven
              by the challenge of transforming concepts into innovative software
              solutions.
              <br />
              Dive into my latest experience, projects, and education, where I
              showcase my expertise in creating cutting-edge technology across
              various platforms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
