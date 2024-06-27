import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Links, social } from "../../common/Links";

function Footer() {
  const location = useLocation();
  return (
    <footer class="w-full bg-[#203354]">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="py-10 flex justify-between items-center flex-col gap-8 lg:flex-row">
          <Link class="flex justify-center ">
            <img src={require("../../asserts/6.png")} alt="" className="h-16" />
          </Link>
          <ul class="text-lg text-center sm:flex items-center justify-center gap-14 lg:gap-10 xl:gap-14 transition-all duration-500">
            {Links.map((item) => (
              <li>
                <Link
                  to={item.link}
                  className={`text-white ${
                    location.pathname.includes(item.link)
                      ? "uppercase text-[#de1342] font-semibold"
                      : ""
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div class="flex  space-x-4 sm:justify-center  ">
            {social
              .filter((_, index) => index % 2 === 0)
              .map((item) => (
                <a
                  href={item.link}
                  title={item.name}
                  class="w-9 h-9 rounded-full bg-gray-800 flex justify-center items-center hover:bg-[#82a9ec]"
                >
                  <i className={`fab ${item.svgcode} text-white`}></i>
                </a>
              ))}
          </div>
        </div>

        <div class="pb-6">
          <div class="flex items-center justify-center">
            <span class="text-gray-300 ">
              ©{" "}
              <Link to={""} href="https://pagedone.io/">
                SanTech
              </Link>{" "}
              2024, All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
