import React from "react";
import "../css/shine.css";
import { TypeAnimation } from "react-type-animation";

function Quote() {
  return (
    <div className="w-full bg-[#82a9ec] px-5 py-5 md:px-14 md:py-16 min-h-[50vh]">
      <TypeAnimation
        sequence={[
          `It's not at all important to get it right the first time,`,
          500,
          `It's not at all important to get it right the first time, It's
        Visually important to get it right the last time ❤️`,
          ,
          500,
          `It's not at all important to get it right the first time, It's
        Visually important to get it right the last time ❤️`,
          500
        ]}
        speed={{ type: "keyStrokeDelayInMs", value: 100 }}
        className="text-5xl tracking-[3px] bg-gradient-to-r from-[#2b3b58] to-[#203354] text-transparent bg-clip-text leading-[60px] md:text-7xl font-extrabold md:leading-[100px] text-[#203354] uppercase text-center"
        repeat={Infinity}
      />
    </div>
  );
}

export default Quote;
