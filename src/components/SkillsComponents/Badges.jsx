import React from "react";
import { Tilt } from "react-tilt";
import { badges } from "../../common/Links";
import { Link } from "react-router-dom";
import * as Tooltip from "@radix-ui/react-tooltip";

function Badges() {
  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 45, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };
  return (
    <div className="pb-12 md:pb-24  max-w-7xl mx-auto px-5 md:px-12">
      <h1 class="text-[#203354] text-center md:ps-4 md:border-s-4 md:border-[#203354] md:w-fit font-semibold  md:text-5xl mb-10 text-3xl leading-tight">
      My Completed Badges
      </h1>
      <div className=" grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10 lg:grid-cols-4 xl:grid-cols-5">
        {badges.map((item) => (
          <Tooltip.Provider>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <Link
                  to={item.link}
                  target="_blank"
                  className="flex items-center py-5 justify-center p-5"
                >
                  <Tilt
                    options={defaultOptions}
                    className="w-fit rounded-full cursor-pointer text-xs flex items-center justify-center md:text-7xl"
                  >
                    <img src={item.image} alt={item.name} className="h-36" />
                  </Tilt>
                </Link>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content
                  className="break-words data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-gray-500 select-none rounded-[4px] bg-gray-200 px-[15px] py-[10px] text-[15px] leading-none will-change-[transform,opacity]"
                  sideOffset={5}
                  side="bottom"
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
  );
}

export default Badges;
