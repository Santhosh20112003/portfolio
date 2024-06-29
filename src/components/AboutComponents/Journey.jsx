import React, { useEffect } from "react";
import { journeyData } from "../../common/Links";
import Aos from "aos";
import "aos/dist/aos.css";

function Journey() {
  useEffect(() => {
    Aos.init();
    // document.title = "IETE - About";
  });
  return (
    <section className="md:px-24  md:py-24 px-6 py-12">
      <div className="space-y-20 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
        {journeyData.map((item, index) => (
          <div
            data-aos-duration="1000"
            data-aos="fade-up"
            key={index}
            className="relative flex items-start justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
          >
            <div className="flex items-center justify-center w-10 h-10 scale-110 rounded-full border border-white bg-[#203354] text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <div
                className="fill-white scaling"
                dangerouslySetInnerHTML={{ __html: item.svg }}
              />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
              <div className="flex items-center justify-between space-x-2 mb-1">
                <div className="font-bold text-lg md:text-xl text-gray-600 capitalize">
                  {item.title}
                </div>
                <time className="font-caveat text-xs md:text-base font-medium text-[#203354]">
                  {item.date}
                </time>
              </div>
              <div
                className="text-slate-500"
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Journey;
