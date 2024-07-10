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
      {/* <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          autoPlay: true,
          background: {
            color: {
              value: "#203354",
            },
            image: "",
            position: "",
            repeat: "",
            size: "",
            opacity: 1,
          },
          backgroundMask: {
            composite: "destination-out",
            cover: {
              color: {
                value: "#fff",
              },
              opacity: 1,
            },
            enable: false,
          },
          clear: true,
          defaultThemes: {},
          delay: 0,
          fullScreen: {
            enable: true,
            zIndex: -2,
          },
          detectRetina: true,
          duration: 0,
          fpsLimit: 120,
          interactivity: {
            detectsOn: "window",
            events: {
              onClick: {
                enable: true,
                mode: "repulse",
              },
              onDiv: {
                selectors: [],
                enable: false,
                mode: [],
                type: "circle",
              },
              onHover: {
                enable: true,
                mode: "bubble",
                parallax: {
                  enable: false,
                  force: 2,
                  smooth: 10,
                },
              },
              resize: {
                delay: 0.5,
                enable: true,
              },
            },
            modes: {
              trail: {
                delay: 1,
                pauseOnStop: false,
                quantity: 1,
              },
              attract: {
                distance: 200,
                duration: 0.4,
                easing: "ease-out-quad",
                factor: 1,
                maxSpeed: 50,
                speed: 1,
              },
              bounce: {
                distance: 200,
              },
              bubble: {
                distance: 400,
                duration: 2,
                mix: false,
                opacity: 0.8,
                size: 40,
                divs: {
                  distance: 200,
                  duration: 0.4,
                  mix: false,
                  selectors: [],
                },
              },
              connect: {
                distance: 80,
                links: {
                  opacity: 0.5,
                },
                radius: 60,
              },
              grab: {
                distance: 100,
                links: {
                  blink: false,
                  consent: false,
                  opacity: 1,
                },
              },
              push: {
                default: true,
                groups: [],
                quantity: 4,
              },
              remove: {
                quantity: 2,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
                factor: 100,
                speed: 1,
                maxSpeed: 50,
                easing: "ease-out-quad",
                divs: {
                  distance: 200,
                  duration: 0.4,
                  factor: 100,
                  speed: 1,
                  maxSpeed: 50,
                  easing: "ease-out-quad",
                  selectors: [],
                },
              },
              slow: {
                factor: 3,
                radius: 200,
              },
              light: {
                area: {
                  gradient: {
                    start: {
                      value: "#ffffff",
                    },
                    stop: {
                      value: "#000000",
                    },
                  },
                  radius: 1000,
                },
                shadow: {
                  color: {
                    value: "#000000",
                  },
                  length: 2000,
                },
              },
            },
          },
          manualParticles: [],
          particles: {
            bounce: {
              horizontal: {
                value: 1,
              },
              vertical: {
                value: 1,
              },
            },
            collisions: {
              absorb: {
                speed: 2,
              },
              bounce: {
                horizontal: {
                  value: 1,
                },
                vertical: {
                  value: 1,
                },
              },
              enable: true,
              maxSpeed: 50,
              mode: "bounce",
              overlap: {
                enable: true,
                retries: 0,
              },
            },
            color: {
              value: "#ffffff",
              animation: {
                h: {
                  count: 0,
                  enable: false,
                  speed: 1,
                  decay: 0,
                  delay: 0,
                  sync: true,
                  offset: 0,
                },
                s: {
                  count: 0,
                  enable: false,
                  speed: 1,
                  decay: 0,
                  delay: 0,
                  sync: true,
                  offset: 0,
                },
                l: {
                  count: 0,
                  enable: false,
                  speed: 1,
                  decay: 0,
                  delay: 0,
                  sync: true,
                  offset: 0,
                },
              },
            },
            effect: {
              close: true,
              fill: true,
              options: {},
              type: [],
            },
            groups: {},
            move: {
              angle: {
                offset: 0,
                value: 90,
              },
              attract: {
                distance: 200,
                enable: true,
                rotate: {
                  x: 3000,
                  y: 3000,
                },
              },
              center: {
                x: 50,
                y: 50,
                mode: "percent",
                radius: 0,
              },
              decay: 0,
              distance: {},
              direction: "right",
              drift: 0,
              enable: true,
              gravity: {
                acceleration: 9.81,
                enable: false,
                inverse: false,
                maxSpeed: 50,
              },
              path: {
                clamp: true,
                delay: {
                  value: 0,
                },
                enable: false,
                options: {},
              },
              outModes: {
                default: "out",
                bottom: "out",
                left: "out",
                right: "out",
                top: "out",
              },
              random: false,
              size: false,
              speed: 2,
              spin: {
                acceleration: 0,
                enable: false,
              },
              straight: false,
              trail: {
                enable: false,
                length: 10,
                fill: {},
              },
              vibrate: false,
              warp: false,
            },
            number: {
              density: {
                enable: true,
                width: 1920,
                height: 1080,
              },
              limit: {
                mode: "delete",
                value: 0,
              },
              value: 80,
            },
            opacity: {
              value: 1,
              animation: {
                count: 0,
                enable: false,
                speed: 2,
                decay: 0,
                delay: 0,
                sync: false,
                mode: "auto",
                startValue: "random",
                destroy: "none",
              },
            },
            reduceDuplicates: false,
            shadow: {
              blur: 0,
              color: {
                value: "#000",
              },
              enable: true,
              offset: {
                x: 0,
                y: 0,
              },
            },
            shape: {
              close: true,
              fill: true,
              options: {
                image: [
                  {
                    name: "logo",
                  },
                  {
                    name: "logo1",
                  },
                  {
                    name: "logo2",
                  },
                  {
                    name: "logo3",
                  },
                  {
                    name: "logo4",
                  },
                  {
                    name: "logo5",
                  },
                  {
                    name: "logo6",
                  },
                ],
              },
              type: "image",
            },
            size: {
              value: 20,
              animation: {
                count: 0,
                enable: true,
                speed: 5,
                decay: 0,
                delay: 0,
                sync: false,
                mode: "auto",
                startValue: "random",
                destroy: "none",
              },
            },
            stroke: {
              width: 0,
            },
            zIndex: {
              value: 0,
              opacityRate: 1,
              sizeRate: 1,
              velocityRate: 1,
            },
            destroy: {
              bounds: {},
              mode: "none",
              split: {
                count: 1,
                factor: {
                  value: 3,
                },
                rate: {
                  value: {
                    min: 4,
                    max: 9,
                  },
                },
                sizeOffset: true,
                particles: {},
              },
            },
            roll: {
              darken: {
                enable: false,
                value: 0,
              },
              enable: false,
              enlighten: {
                enable: false,
                value: 0,
              },
              mode: "vertical",
              speed: 25,
            },
            tilt: {
              value: 0,
              animation: {
                enable: false,
                speed: 0,
                decay: 0,
                sync: false,
              },
              direction: "clockwise",
              enable: false,
            },
            twinkle: {
              lines: {
                enable: false,
                frequency: 0.05,
                opacity: 1,
              },
              particles: {
                enable: false,
                frequency: 0.05,
                opacity: 1,
              },
            },
            wobble: {
              distance: 5,
              enable: false,
              speed: {
                angle: 50,
                move: 10,
              },
            },
            life: {
              count: 0,
              delay: {
                value: 0,
                sync: false,
              },
              duration: {
                value: 0,
                sync: false,
              },
            },
            rotate: {
              value: {
                min: 0,
                max: 360,
              },
              animation: {
                enable: true,
                speed: 5,
                decay: 0,
                sync: false,
              },
              direction: "random",
              path: false,
            },
            orbit: {
              animation: {
                count: 0,
                enable: false,
                speed: 1,
                decay: 0,
                delay: 0,
                sync: false,
              },
              enable: false,
              opacity: 1,
              rotation: {
                value: 45,
              },
              width: 1,
            },
            links: {
              blink: false,
              color: {
                value: "#fff",
              },
              consent: false,
              distance: 100,
              enable: false,
              frequency: 1,
              opacity: 1,
              shadow: {
                blur: 5,
                color: {
                  value: "#000",
                },
                enable: false,
              },
              triangles: {
                enable: false,
                frequency: 1,
              },
              width: 1,
              warp: false,
            },
            repulse: {
              value: 0,
              enabled: false,
              distance: 1,
              duration: 1,
              factor: 1,
              speed: 1,
            },
          },
          pauseOnBlur: true,
          pauseOnOutsideViewport: true,
          responsive: [],
          smooth: true,
          style: {},
          themes: [],
          zLayers: 100,
          name: "Images",
          preload: [
            {
              src: "https://ik.imagekit.io/vituepzjm/SanTech%20(5).svg",
              gif: false,
              height: 32,
              name: "logo",
              width: 32,
            },
            {
              src: "https://ik.imagekit.io/vituepzjm/10.svg",
              gif: false,
              height: 32,
              name: "logo1",
              width: 32,
            },
            {
              src: "https://ik.imagekit.io/vituepzjm/11.svg",
              gif: false,
              height: 32,
              name: "logo2",
              width: 32,
            },
            {
              src: "https://ik.imagekit.io/vituepzjm/9.svg",
              gif: false,
              height: 32,
              name: "logo3",
              width: 32,
            },
            {
              src: "https://ik.imagekit.io/vituepzjm/12.svg",
              gif: false,
              height: 32,
              name: "logo4",
              width: 32,
            },
            {
              src: "https://ik.imagekit.io/vituepzjm/13.svg",
              gif: false,
              height: 32,
              name: "logo5",
              width: 32,
            },
            {
              src: "https://ik.imagekit.io/vituepzjm/14.svg",
              gif: false,
              height: 32,
              name: "logo6",
              width: 32,
            },
          ],
          motion: {
            disable: false,
            reduce: {
              factor: 4,
              value: true,
            },
          },
        }}
      /> */}
      <section class="text-gray-600 h-[90vh] body-font">
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
