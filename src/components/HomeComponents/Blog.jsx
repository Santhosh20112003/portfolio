import React from "react";
import { data } from "../../common/blogData";
import {
  extractContent,
  getDate,
  getMonthFromDate,
} from "../../common/methods";
import { Link } from "react-router-dom";

function Blog() {
  return (
    <div className="bg-gray-50 ">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-10">
        <div class="flex flex-col ">
          <div class="h-1 ps-5 bg-gray-300 rounded overflow-hidden">
            <div class="w-24 h-full bg-[#82a9ec]"></div>
          </div>
          <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-5">
            <h1 class="sm:w-2/5 text-gray-900 font-medium title-font text-3xl mb-2 sm:mb-0">
              My Recent Blogs
            </h1>
          </div>
        </div>

        <div className="flex flex-wrap -m-4">
          {data.map((item, index) => (
            <div className="p-4 md:w-1/3" key={index}>
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <div className="relative">
                  <Link
                    to={"https://insightfulblog.vercel.app"}
                    className="z-10 bg-gray-100 p-2 rounded-full absolute right-3 top-3"
                  >
                    <img
                      src="https://ik.imagekit.io/vituepzjm/logo64-.png"
                      alt="insightful"
                      className="w-5 h-5"
                    />
                  </Link>
                  <img
                    className="lg:h-48 md:h-36 bg- w-full relative object-cover object-center"
                    src={item.image}
                    alt="blog"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-flex font-semibold items-start justify-evenly gap-3">
                    <div class="w-12 flex-shrink-0 flex flex-col text-center mt-1.5 leading-none">
                      <span class="text-gray-700 pb-1.5 mb-1.5 border-b-2 border-gray-400">
                        {getMonthFromDate(item.creation_time)}
                      </span>
                      <span class=" text-gray-700 title-font leading-none">
                        {getDate(item.creation_time)}
                      </span>
                    </div>
                    <h1 className="title-font text-lg break-words text-gray-800 mb-3">
                      {item.title}
                    </h1>
                  </span>
                  <p className="leading-relaxed break-words text-gray-500 mb-3">
                    {extractContent(item.content).slice(0, 120)}..
                  </p>
                  <div className="flex items-center justify-between flex-wrap">
                    {/* <Link
                    to={`https://insightfulblog.vercel.app/blogs/${btoa(
                      item.blogid
                    )}`}
                    className="text-[#729eec] font-semibold inline-flex items-center md:mb-2 lg:mb-0"
                  >
                    Read Blog
                    <svg
                      className="w-4 h-4 ml-2 "
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </Link> */}
                    <span class="inline-block uppercase py-1 px-2 rounded bg-indigo-100 text-[#213454] text-xs font-semibold tracking-widest">
                      {item?.tag[0]}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col mt-10">
          <div class="h-1 pe-5 bg-gray-300 rounded overflow-hidden">
            <div class="w-24 float-end h-full bg-[#82a9ec]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
