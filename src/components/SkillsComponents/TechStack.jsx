import React from "react";
import * as Tooltip from "@radix-ui/react-tooltip";
import {
  Devpatterns,
  backend,
  cloudoperations,
  database,
  frontend,
  testing,
} from "../../common/Links";

function TechStack() {
  return (
    <section className="md:px-5 px-6 lg:px-8 py-12">
      <h1 class="text-[#203354] text-center ps-4 border-s-4 border-[#203354] w-fit font-semibold text-2xl md:text-5xl mb-10 min-[500px]:text-3xl leading-tight">
       My ToolBox 
      </h1>
      <div className="w-full  mx-auto">
        <div className="grid grid-cols-1 break-words sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-6">
          <div className="sm:col-span-4  border-2 border-gray-300 rounded-lg gap-3 grid-cols-1 lg:grid-cols-3 grid p-5 ">
            <div className="sm:col-span-2 order-2 lg:order-1 grid mt-5 lg:mt-0 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
              {frontend.map((item) => (
                <Tooltip.Provider>
                  <Tooltip.Root>
                    <Tooltip.Trigger asChild>
                      <span className="place-content-center place-self-center p-3 py-5 lg:py-3 ">
                        <img
                          src={item.logo}
                          alt={item.name}
                          className="h-[64px] transition-all w-[64px]"
                        />
                      </span>
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                      <Tooltip.Content
                        className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-gray-500 select-none rounded-[4px] bg-gray-200 px-[15px] py-[10px] text-[15px] leading-none will-change-[transform,opacity]"
                        sideOffset={5}
                      >
                        {item.name}
                        <Tooltip.Arrow className="fill-gray-200" />
                      </Tooltip.Content>
                    </Tooltip.Portal>
                  </Tooltip.Root>
                </Tooltip.Provider>
              ))}
            </div>
            <div class="group order-1 lg:order-2 relative w-full break-words flex flex-col items-center justify-center h-full bg-gradient-to-br to-sky-200 from-sky-300 rounded-xl px-5 py-8 transition-all duration-500  ">
              <div class=" rounded-full flex justify-center fill-gray-700 items-center mb-5 w-10 h-10">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                  <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
                </svg>
              </div>
              <h4 class="text-2xl font-semibold text-center mb-3 text-gray-700 capitalize transition-all duration-500 ">
                Frontend Languages
              </h4>
            </div>
          </div>
          <div className="md:col-span-4 lg:col-span-1 border-2 border-gray-300 rounded-lg grid grid-cols-4 md:grid-cols-2 p-5">
            <span className="bg-gradient-to-br py-6 from-sky-200 to-sky-300 gap-2 rounded-lg md:col-span-1 col-span-4 w-full h-full flex flex-col items-center justify-center">
              <div class="rounded-full flex justify-center text-gray-700 items-center w-10 h-10">
                <i className="fas fa-vial text-4xl"></i>
              </div>
              <h1 className="text-lg font-semibold  text-gray-700 text-center leading-8 capitalize transition-all duration-500 ">
                Testing Tools
              </h1>
            </span>
            {testing.map((item) => (
              <Tooltip.Provider>
                <Tooltip.Root>
                  <Tooltip.Trigger asChild>
                    <span className="place-content-center place-self-center p-3 py-5 lg:py-3 ">
                      <img
                        src={item.logo}
                        alt={item.name}
                        className="h-[64px] object-cover transition-all w-[64px]"
                      />
                    </span>
                  </Tooltip.Trigger>
                  <Tooltip.Portal>
                    <Tooltip.Content
                      className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-gray-500 select-none rounded-[4px] bg-gray-200 px-[15px] py-[10px] text-[15px] leading-none will-change-[transform,opacity]"
                      sideOffset={5}
                    >
                      {item.name}
                      <Tooltip.Arrow className="fill-gray-200" />
                    </Tooltip.Content>
                  </Tooltip.Portal>
                </Tooltip.Root>
              </Tooltip.Provider>
            ))}
          </div>
          <div className="md:col-span-4 lg:col-span-2 border-2 border-gray-300 rounded-lg lg:grid-cols-3 grid p-5">
            <div class="group col-span-2 lg:col-span-1 relative w-full break-words flex items-center justify-center flex-col h-full bg-gradient-to-br to-sky-200 from-sky-300 rounded-xl px-5 py-8 transition-all duration-500  ">
              <div class=" rounded-full flex justify-center text-gray-700 items-center mb-5 w-10 h-10">
                <i class="fa-solid fa-terminal text-4xl"></i>
              </div>
              <h4 class="text-2xl text-center font-semibold  text-gray-700 capitalize transition-all duration-500 ">
                Backend Languages
              </h4>
            </div>
            <div className="col-span-2 grid grid-cols-2">
              {backend.map((item) => (
                <Tooltip.Provider>
                  <Tooltip.Root>
                    <Tooltip.Trigger asChild>
                      <span className="place-content-center place-self-center p-3 py-5 lg:py-3 ">
                        <img
                          src={item.logo}
                          alt={item.name}
                          className="h-[64px] transition-all w-[64px]"
                        />
                      </span>
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                      <Tooltip.Content
                        className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-gray-500 select-none rounded-[4px] bg-gray-200 px-[15px] py-[10px] text-[15px] leading-none will-change-[transform,opacity]"
                        sideOffset={5}
                      >
                        {item.name}
                        <Tooltip.Arrow className="fill-gray-200" />
                      </Tooltip.Content>
                    </Tooltip.Portal>
                  </Tooltip.Root>
                </Tooltip.Provider>
              ))}
            </div>
          </div>
          <div className="md:col-span-4 border-2  border-gray-300 pt-5 relative rounded-lg grid lg:col-span-1 grid-cols-2 p-5">
            {database.map((item) => (
              <Tooltip.Provider>
                <Tooltip.Root>
                  <Tooltip.Trigger asChild>
                    <span className="place-content-center place-self-center p-3 py-5 lg:py-3 ">
                      <img
                        src={item.logo}
                        alt={item.name}
                        className="h-[64px] transition-all w-[64px]"
                      />
                    </span>
                  </Tooltip.Trigger>
                  <Tooltip.Portal>
                    <Tooltip.Content
                      className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-gray-500 select-none rounded-[4px] bg-gray-200 px-[15px] py-[10px] text-[15px] leading-none will-change-[transform,opacity]"
                      sideOffset={5}
                    >
                      {item.name}
                      <Tooltip.Arrow className="fill-gray-200" />
                    </Tooltip.Content>
                  </Tooltip.Portal>
                </Tooltip.Root>
              </Tooltip.Provider>
            ))}
            <span className="bg-gradient-to-br from-sky-200 to-sky-300 gap-2 col-span-2 rounded-lg w-full h-full flex flex-col items-center justify-center">
              <div class="rounded-full flex justify-center text-gray-700 mb-2 items-center w-10 h-10">
                <i className="fas fa-database text-4xl"></i>
              </div>
              <h1 className="text-2xl font-semibold  text-gray-700 text-center leading-8 capitalize transition-all duration-500 ">
                Database Tools
              </h1>
            </span>
          </div>
          <div className="md:col-span-4 lg:col-span-2 border-2 border-gray-300 rounded-lg grid-cols-1 lg:grid-cols-3 grid p-5">
            <div class="group w-full justify-center items-center flex flex-col break-words h-full bg-gradient-to-br to-sky-200 from-sky-300 rounded-xl px-5 py-5 transition-all duration-500  ">
              <div class=" rounded-full flex justify-center text-gray-700 items-center mb-2 ms-2 w-10 h-10">
                <i class="fas fa-cloud text-4xl"></i>
              </div>
              <h4 class="text-2xl font-semibold  text-gray-700 text-center leading-8 capitalize transition-all duration-500 ">
                Cloud & Operation Tools
              </h4>
            </div>
            <div className="grid-cols-3 col-span-2 grid">
              {cloudoperations.map((item) => (
                <Tooltip.Provider>
                  <Tooltip.Root>
                    <Tooltip.Trigger asChild>
                      <span className="place-content-center place-self-center px-3 py-5 lg:py-8 ">
                        <img
                          src={item.logo}
                          alt={item.name}
                          className="h-[64px] transition-all w-[64px]"
                        />
                      </span>
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                      <Tooltip.Content
                        className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-gray-500 select-none rounded-[4px] bg-gray-200 px-[15px] py-[10px] text-[15px] leading-none will-change-[transform,opacity]"
                        sideOffset={5}
                      >
                        {item.name}
                        <Tooltip.Arrow className="fill-gray-200" />
                      </Tooltip.Content>
                    </Tooltip.Portal>
                  </Tooltip.Root>
                </Tooltip.Provider>
              ))}
            </div>
          </div>
          <div className="md:col-span-4 lg:col-span-2 border-2 border-gray-300 rounded-lg grid grid-cols-1 lg:grid-cols-3 p-5">
            <div class="group w-full justify-center items-center flex flex-col break-words h-full bg-gradient-to-br to-sky-200 from-sky-300 rounded-xl px-5 py-5 transition-all duration-500  ">
              <div class=" rounded-full flex justify-center text-gray-700 items-center mb-3 w-10 h-10">
                <i class="fa-solid fa-gear text-4xl"></i>
              </div>
              <h4 class="text-2xl font-semibold  text-gray-700 text-center capitalize transition-all duration-500 ">
                Development Patterns
              </h4>
            </div>
            <div className="grid-cols-3 col-span-2 grid">
              {Devpatterns.map((item) => (
                <Tooltip.Provider>
                  <Tooltip.Root>
                    <Tooltip.Trigger asChild>
                      <span className="place-content-center place-self-center p-3 py-5 lg:py-3 ">
                        <img
                          src={item.logo}
                          alt={item.name}
                          className="h-[64px] transition-all w-[64px] object-cover"
                        />
                      </span>
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                      <Tooltip.Content
                        className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-gray-500 select-none rounded-[4px] bg-gray-200 px-[15px] py-[10px] text-[15px] leading-none will-change-[transform,opacity]"
                        sideOffset={5}
                      >
                        {item.name}
                        <Tooltip.Arrow className="fill-gray-200" />
                      </Tooltip.Content>
                    </Tooltip.Portal>
                  </Tooltip.Root>
                </Tooltip.Provider>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechStack;
