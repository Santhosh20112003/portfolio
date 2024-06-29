import React from "react";
import { Link } from "react-router-dom";

function WorkExperience() {
  return (
    <div className="px-4 md:px-6 lg:px-24 py-12">
      <h2 class="text-gray-600 text-center capitalize text-2xl md:text-4xl font-bold leading-normal lg:text-start mb-5 md:mb-10">
        My Work Experience
      </h2>
      <ol className="items-center lg:flex">
        <li className="relative mb-6 lg:mb-0">
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full ring-0 ring-white shrink-0">
              <svg
                className="w-3 h-3 text-[#203354]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </div>
            <div className="hidden lg:flex w-full bg-gray-200 h-0.5"></div>
          </div>
          <div className="mt-3 sm:pe-8">
            <Link
              to="https://oneyesinfotechsolutions.com/"
              target="_blank"
              className=""
            >
              <h3 className="text-lg font-semibold text-gray-900">
                Oneyes Infotech Solutions
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400">
                March 2023 - Present
              </time>
            </Link>

            <p className="text-base font-normal break-words text-gray-500">
              Contributed to the development of Loan Management System as an Web
              Application Development Intern at Oneyes Infotech Solutions,
              enhancing my skills in Full Stack Development.
            </p>
          </div>
        </li>
        <li className="relative mb-6 lg:mb-0">
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full ring-0 ring-white shrink-0">
              <svg
                className="w-3 h-3 text-[#203354]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </div>
            <div className="hidden lg:flex w-full bg-gray-200 h-0.5"></div>
          </div>
          <div className="mt-3 sm:pe-8">
            <Link to="https://www.nexcap.net" target="_blank" className="">
              <h3 className="text-lg font-semibold text-gray-900">NEXCAP</h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400">
                Released on March 19, 2024
              </time>
            </Link>
            <p className="text-base font-normal text-gray-500">
              Gained valuable practical experience in web development while
              interning at Nexcap, working on real-world projects and learning
              best practices from experienced professionals.
            </p>
          </div>
        </li>
        <li className="relative mb-6 lg:mb-0">
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full ring-0 ring-white shrink-0">
              <svg
                className="w-3 h-3 text-[#203354]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </div>
            <div className="hidden lg:flex w-full bg-gray-200 h-0.5"></div>
          </div>
          <div className="mt-3 sm:pe-8">
            <Link
              to="https://www.pantechelearning.com"
              target="_blank"
              className=""
            >
              <h3 className="text-lg font-semibold text-gray-900">
                Pantech E Learning Pvt Ltd
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400">
                Released on July 15, 2023
              </time>
            </Link>
            <p className=" md:text-base font-normal text-gray-500">
            Gained practical cybersecurity experience through a hands-on internship at Pantech eLearning Pvt Ltd. Developed skills in Basics of Cyber Security.
            </p>
          </div>
        </li>
      </ol>
    </div>
  );
}

export default WorkExperience;
