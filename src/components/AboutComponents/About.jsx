import React from "react";

function Hero() {
  return (
    <section class="md:py-12 pt-12 pb-5 relative xl:mr-0 lg:mr-5 mr-0">
      <div class="w-full px-6 lg:px-24 mx-auto">
        <div class="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
          <div class="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
            <div class="w-full flex-col justify-center items-start gap-8 flex">
              <div class="flex-col justify-start lg:items-start items-center gap-4 flex">
                <div class="w-full flex-col items-center justify-start lg:items-start gap-3 flex">
                  <h2 class="text-[#203354] text-center capitalize text-4xl font-bold font-manrope leading-normal lg:text-start ">
                    I'm Santhosh Shanmugam
                  </h2>
                  <p class="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                    a passionate full-stack developer with a keen eye for UI/UX
                    design. I'm skilled in a range of technologies, including
                    JavaScript, React, Angular, Node.js, and more, enabling me
                    to create exceptional web experiences from start to finish.
                    My strengths lie in user-centered design, problem-solving,
                    and collaboration. I'm always eager to learn and expand my
                    skillset, and I'm excited to connect with other developers
                    and build amazing web solutions together.
                  </p>
                </div>
              </div>
              <div class="w-full flex-col justify-center items-start gap-6 flex">
                <div class="w-full justify-start capitalize items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                  <div class="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-500 hover:bg-gray-100 cursor-pointer transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                    <h4 class="text-gray-900 text-2xl font-bold font-manrope leading-9">
                      2+ Years
                    </h4>
                    <p class="text-gray-500 text-base font-normal leading-relaxed">
                      Passionate Web Developer with Proven Results
                    </p>
                  </div>
                  <div class="w-full h-full  p-3.5 rounded-xl border border-gray-200 hover:border-gray-500 hover:bg-gray-100 cursor-pointer transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                    <h4 class="text-gray-900 text-2xl font-bold font-manrope leading-9">
                      8+ Projects
                    </h4>
                    <p class="text-gray-500 text-base font-normal leading-relaxed">
                      consistently delivering high-quality outcomes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full justify-center items-start flex">
            <div class="sm:w-[564px] w-full sm:h-[500px] h-full sm:bg-gray-100 rounded-3xl sm:border border-gray-200 relative">
              <img
                class="sm:mt-5 sm:ml-5 object-cover object-top rounded-3xl w-full h-full"
                src="https://ik.imagekit.io/vituepzjm/WhatsApp%20Image%202024-06-29%20at%2001.09.52_c27287e2.jpg?updatedAt=1719603703329"
                alt="about Us image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
