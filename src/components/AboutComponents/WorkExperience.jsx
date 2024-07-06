import React from "react";
import { Link } from "react-router-dom";
import * as Dialog from "@radix-ui/react-dialog";

function WorkExperience() {
  return (
    <div className="px-4 md:px-6 lg:px-24 py-12">
      <h2 class="text-gray-600 text-center capitalize text-3xl md:text-4xl font-bold leading-normal lg:text-start mb-6 md:mb-10">
        My Work Experience
      </h2>
      <ol className="items-center lg:flex">
        <li className="relative mb-10 lg:mb-0">
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-10 h-10 md:w-8 md:h-8 bg-blue-100 rounded-full ring-0 ring-white shrink-0">
              <svg
                className="md:w-3 md:h-3 w-4 h-4 text-[#203354]"
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

            <Dialog.Root>
              <Dialog.Trigger asChild>
                <button className="inline-flex items-center px-4 mt-5 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-[#203354] focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-[#203354]">
                  <i className="w-3.5 h-3.5 me-2.5 fas fa-binoculars"></i>
                  Offer Letter
                </button>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="bg-blackA6 z-[100] data-[state=open]:animate-overlayShow fixed inset-0" />
                <Dialog.Content className="data-[state=open]:animate-contentShow flex items-center justify-center bg-transparent z-[1000] fixed top-[50%] left-[50%] max-h-[80vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] focus:outline-none">
                  <img
                    src="https://ik.imagekit.io/vituepzjm/Adobe%20Scan%2001%20Jul%202024_1.jpg?updatedAt=1719852348670"
                    alt="Oneyes Internship Resume"
                    className="object-contain md:h-[80vh] bg-gray-200 md:bg-transparent w-[80vw]"
                  />
                  <Dialog.Close asChild>
                    <button className="bg-black bg-opacity-25 px-[10px] py-[3px] rounded-full absolute top-3 right-6 md:right-10">
                      <i className="text-white fas fa-xmark "></i>
                    </button>
                  </Dialog.Close>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </div>
        </li>
        <li className="relative mb-6 lg:mb-0">
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-10 h-10 md:w-8 md:h-8 bg-blue-100 rounded-full ring-0 ring-white shrink-0">
              <svg
                className="md:w-3 md:h-3 w-4 h-4 text-[#203354]"
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

            <Dialog.Root>
              <Dialog.Trigger asChild>
                <button className="inline-flex items-center px-4 mt-5 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-[#203354] focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-[#203354]">
                  <i className="w-3.5 h-3.5 me-2.5 fas fa-binoculars"></i>
                  Offer Letter
                </button>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="bg-blackA6 z-[100] data-[state=open]:animate-overlayShow fixed inset-0" />
                <Dialog.Content className="data-[state=open]:animate-contentShow flex items-center justify-center  bg-transparent z-[1000] fixed top-[50%] left-[50%] max-h-[80vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] focus:outline-none">
                  <img
                    src="https://ik.imagekit.io/vituepzjm/IMG-20240307-WA0001(1).jpg?updatedAt=1719847726370"
                    alt="Nexcap Internship Resume"
                    className="object-contain md:h-[80vh] bg-gray-200 md:bg-transparent h-fit w-[80vw]"
                  />
                  <Dialog.Close asChild>
                    <button className="bg-black bg-opacity-25 px-[10px] py-[3px] rounded-full absolute top-3 right-6 md:right-10">
                      <i className="text-white fas fa-xmark "></i>
                    </button>
                  </Dialog.Close>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </div>
        </li>
        <li className="relative mb-6 lg:mb-0">
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-10 h-10 md:w-8 md:h-8 bg-blue-100 rounded-full ring-0 ring-white shrink-0">
              <svg
                className="md:w-3 md:h-3 w-4 h-4 text-[#203354]"
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
              Gained practical cybersecurity experience through a hands-on
              internship at Pantech eLearning Pvt Ltd. Developed skills in
              Basics of Cyber Security.
            </p>
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <button className="inline-flex items-center px-4 mt-5 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-[#203354] focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-[#203354]">
                  <i className="w-3.5 h-3.5 me-2.5 fas fa-binoculars"></i>
                  Offer Letter
                </button>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="bg-blackA6 z-[100] data-[state=open]:animate-overlayShow fixed inset-0" />
                <Dialog.Content className="data-[state=open]:animate-contentShow flex items-center justify-center bg-transparent z-[1000] fixed top-[50%] left-[50%] max-h-[80vh] w-[90vw] max-w-[700px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] focus:outline-none">
                  <img
                    src="https://ik.imagekit.io/vituepzjm/pantech.png?updatedAt=1719849565699"
                    alt="pantech Internship Resume"
                    className="object-contain  bg-gray-200 w-[80vw]"
                  />
                  <Dialog.Close asChild>
                    <button className="bg-black bg-opacity-25 px-[10px] py-[3px] rounded-full absolute top-3 right-6 md:right-3">
                      <i className="text-white fas fa-xmark "></i>
                    </button>
                  </Dialog.Close>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </div>
        </li>
      </ol>
    </div>
  );
}

export default WorkExperience;
