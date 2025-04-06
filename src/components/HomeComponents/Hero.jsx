import React, { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

function Hero() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);
  return (
    <div id="home" className="w-full bg-gradient-to-b from-[#203354] to-[#17263f]">
      <section class="text-gray-600 h-auto min-h-[90vh] body-font">
        <div class="mx-auto flex p-5 md:flex-row flex-col items-center justify-evenly">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
            <img
              class="object-cover md:drop-shadow-4xl object-center rounded"
              alt="hero"
              src={require("../../asserts/hello.png")}
            />
          </div>
          <div class=" w-fit md:bg-[#0b1423] md:bg-opacity-40 md:backdrop-blur-sm text-white py-5 md:py-10 md:shadow md:px-10 rounded-md flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class=" sm:text-4xl text-xl mb-4 font-semibold md:leading-[50px]">
              Hello There 👋, <br /> I'm <span className="md:text-5xl">S</span>
              anthosh <span className="md:text-5xl">S</span>hanmugam
            </h1>
            <p class="mb-8 leading-relaxed break-words">
              I design and code beautiful simple things, and I love what I do.
            </p>
            <div class="flex justify-center">
              <a
                href="mailto:shamugamsanthosh22@gmail.com"
                class="relative px-8 py-2 rounded-md isolation-auto z-10 border-2 border-[#de1342] before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#de1342] before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700"
              >
                Let's Talk !
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
