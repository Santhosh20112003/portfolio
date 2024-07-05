import React, { useEffect } from "react";
import { hobbies } from "../../common/Links";
import * as Tooltip from "@radix-ui/react-tooltip";
import Aos from "aos";

function Hobby() {
  useEffect(() => {
    Aos.init();
    // document.title = "IETE - About";
  });
  return (
    <section class="py-16">
      <div class="mx-auto max-w-[85rem] px-4 sm:px-6 lg:px-8">
        <div class="md:mb-20 mb-10 text-center">
          <h2 class="text-gray-600 text-center capitalize text-2xl md:text-4xl font-bold leading-normal lg:text-start mb-5 md:mb-10">
            My Hobbies
          </h2>
        </div>
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2  xl:grid-cols-4">
          {hobbies.map((item, index) => (
            <Tooltip.Provider>
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <div
                    data-aos-delay={index * 100}
                    data-aos-duration="700"
                    data-aos="fade-up"
                    className="flex items-center cursor-pointer justify-center"
                  >
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="h-44 transition-all ease-in-out duration-300 "
                    />
                  </div>
                </Tooltip.Trigger>
                <Tooltip.Portal>
                  <Tooltip.Content
                    className="break-words data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-gray-500 select-none rounded-[4px] bg-gray-200 px-[15px] py-[10px] text-[15px] leading-none will-change-[transform,opacity]"
                    sideOffset={5}
                    side="top"
                  >
                    {item.name}
                    <Tooltip.Arrow className="fill-gray-300" />
                  </Tooltip.Content>
                </Tooltip.Portal>
              </Tooltip.Root>
            </Tooltip.Provider>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hobby;
