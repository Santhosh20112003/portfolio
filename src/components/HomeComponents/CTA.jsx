import React from "react";
import { Link } from "react-router-dom";

function CTA() {
  return (
    <section class="text-gray-600 bg-white max-w-7xl mx-auto pb-12 md:pb-0 md:pt-6 body-font">
      <div class="md:pe-5 flex md:flex-row flex-col items-center justify-center">
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-fit mb-10 md:mb-0">
          <img
            class="object-cover object-center hidden md:block max-h-[400px] rounded"
            alt="hero"
            src={require("../../asserts/hey.png")}
          />
          <img
            class="object-cover object-center md:hidden max-h-[300px] rounded"
            alt="hero"
            src={require("../../asserts/hi.png")}
          />
        </div>
        <div class="lg:flex-grow md:w-1/2 md:pl-16 flex-col gap-5 md:items-start md:text-left items-center text-center">
          <h1 class="title-font text-[#203354] sm:text-5xl leading-10 break-words font-semibold text-3xl mb-4 ">
            Let's Start a Project Together ❤️
          </h1>
          <form  action="https://formsubmit.co/santhoshtechnologies22@gmail.com" method="POST" class="flex w-full md:flex-row flex-col items-center justify-center md:justify-start mt-3 mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 md:items-end">
          <div class="relative flex-grow w-full md:max-w-[150px]">
              <label
                for="name"
                class="leading-7 hidden md:block text-sm text-gray-600"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="Name"
                placeholder="Name here..."
                class="w-full bg-gray-100 bg-opacity-50 rounded-xl md:rounded border border-blue-950 placeholder:text-[#203354] focus:border-[#82a9ec] focus:bg-transparent focus:ring-2 focus:ring-[#82a9ec] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative flex-grow w-full md:max-w-[200px]">
              <label
                for="email"
                class="leading-7 hidden md:block text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email id here..."
                class="w-full bg-gray-100 bg-opacity-50 rounded-xl md:rounded border border-blue-950 placeholder:text-[#203354] focus:border-[#82a9ec] focus:bg-transparent focus:ring-2 focus:ring-[#82a9ec] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <input type="hidden" name="_autoresponse" value="Hello, I am Santhosh Shanmugam from SanTech. Thank you for your submission. To maintain communication, please email me at santhoshtechnologies22@gmail.com." />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_subject" value="New Form Submission From SanTech Portfolio Website" />
            <button type="submit" class="text-white bg-[#203354] rounded-2xl md:rounded-lg border-0 py-2 px-6 focus:outline-none hover:bg-[#2a4169] text-lg">
              Ready to chat ?
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default CTA;
