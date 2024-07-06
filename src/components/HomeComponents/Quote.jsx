import React from "react";
import "../css/shine.css";
import { TypeAnimation } from "react-type-animation";

function Quote() {
  return (
    <div className="w-full bg-[#82a9ec] px-5 py-12 md:px-14 md:py-16">
      {/* <TypeAnimation
        sequence={[
          `It's not at all important to get it right the first time,`,
          500,
          `It's not at all important to get it right the first time, It's
        Visually important to get it right the last time ❤️`,
          ,
          500,
          `It's not at all important to get it right the first time, It's
        Visually important to get it right the last time ❤️`,
          500,
        ]}
        speed={{ type: "keyStrokeDelayInMs", value: 100 }}
        className="text-5xl tracking-[3px] bg-gradient-to-r from-[#2b3b58] to-[#203354] text-transparent bg-clip-text leading-[60px] md:text-7xl font-extrabold md:leading-[100px] text-[#203354] uppercase text-center"
        repeat={Infinity}
      /> */}

      <p className="text-2xl text-center tracking-[2px] md:tracking-[3px] bg-gradient-to-r from-[#2b3b58] to-[#203354] text-transparent bg-clip-text leading-[50px] md:leading-[60px] lg:leading-[80px] md:text-4xl lg:text-5xl font-extrabold  text-[#203354] uppercase">
        It's not at all important to get it right the first time, It's Visually
        important to get it right the last time ! <div className="text-4xl md:text-4xl mt-6 lg:text-6xl">❤️</div>
      </p>
    </div>
  );
}

export default Quote;
