import React from "react";
import { social } from "../../common/Links";

function SocialLinks() {
  return (
    <section class="py-20 ">
      <div class="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <h1 class="text-2xl text-center md:text-start md:text-xl ms-5 text-gray-600 font-semibold mb-10 underline ">
          React me out Here !
        </h1>

        <div class="grid grid-cols-1 gap-8 md:grid-cols-2  xl:grid-cols-5">
          {social.map((item) => (
            <a
              href={item.link}
              title={item.name}
              target="_blank"
              class={`text-gray-600 hover:shadow-md transition-shadow flex justify-center gap-5 items-center border border-solid border-gray-200 h-24 rounded-2xl`}
            >
              <i className={`${item.svgcode} text-4xl`}></i>
              <p className="text-2xl">{item.name}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SocialLinks;
