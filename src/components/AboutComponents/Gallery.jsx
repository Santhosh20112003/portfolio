import Aos from "aos";
import React, { useEffect } from "react";
import "aos/dist/aos.css";

function Gallery() {
  useEffect(() => {
    Aos.init();
  });
  return (
    <div className="max-w-7xl mx-auto">
      <section class="md:pb-12 px-5">
        <div className="text-center mb-12">
          <p
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"
            className="text-lg font-medium text-gray-600 break-words"
          >
            "I do believe that <span className="line-through">actions</span>{" "}
            images speak louder than words. By looking at the pictures below,
            you can get a little grasp of what person I am outside of work"
          </p>
        </div>
        <div class="w-full px-6 lg:px-8 mx-auto">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-6">
            <div
              data-aos-duration="1000"
              data-aos-delay="100"
              data-aos="fade-up"
              class="sm:col-span-2 bg-cover relative group md:bg-center h-[350px] grayscale hover:grayscale-0 transition-all ease-linear duration-200 cursor-pointer  rounded-lg flex justify-end flex-col px-5 py-2 bg-left bg-[url(https://ik.imagekit.io/vituepzjm/431492999_416910024168937_3701154458708804327_n.jpeg?updatedAt=1719518713064)]"
            >
              <span className="w-fit h-fit px-3 group-hover:bg-opacity-65 group-hover:bg-[#212121] py-2">
                <h6 class="font-medium group-hover:opacity-100 transition-all ease-linear duration-200 opacity-0 text-xl text-white ">
                  Metro Railways
                </h6>
                <p class="text-base font-mono group-hover:opacity-100 transition-all ease-linear duration-200 opacity-0 font-normal text-white/70">
                  March, 2024
                </p>
              </span>
              <h1 className="absolute bottom-3 hidden lg:block right-5 group-hover:opacity-0 font-semibold transition-all ease-linear bg-[#212121] bg-opacity-60 rounded-lg px-3 py-1 duration-200 text-white">
                Hover me
              </h1>
              <h1 className="absolute bottom-3 block lg:hidden right-5 group-hover:opacity-0 font-semibold transition-all ease-linear bg-[#212121] bg-opacity-60 rounded-lg px-3 py-1 duration-200 text-white">
                Click me
              </h1>
            </div>
            <div
              data-aos-duration="1000"
              data-aos-delay="200"
              data-aos="fade-up"
              class="bg-cover relative group bg-top h-[350px] grayscale hover:grayscale-0 transition-all ease-linear duration-200 cursor-pointer  rounded-lg flex justify-end flex-col px-5 py-2 bg-[url('https://ik.imagekit.io/vituepzjm/1000019614-01.jpeg?updatedAt=1719518064249')]"
            >
              <span className="w-fit h-fit px-3 group-hover:bg-opacity-65 group-hover:bg-[#212121] py-2">
                <h6 class="font-medium group-hover:opacity-100 transition-all ease-linear duration-200 opacity-0 text-xl text-white ">
                  ECE Block - Culturals Day
                </h6>
                <p class="text-base font-mono group-hover:opacity-100 transition-all ease-linear duration-200 opacity-0 font-normal text-white/70">
                  April, 2024
                </p>
              </span>
              <h1 className="absolute bottom-3 hidden lg:block right-5 group-hover:opacity-0 font-semibold transition-all ease-linear bg-[#212121] bg-opacity-60 rounded-lg px-3 py-1 duration-200 text-white">
                Hover me
              </h1>
              <h1 className="absolute bottom-3 block lg:hidden right-5 group-hover:opacity-0 font-semibold transition-all ease-linear bg-[#212121] bg-opacity-60 rounded-lg px-3 py-1 duration-200 text-white">
                Click me
              </h1>
            </div>
            <div
              data-aos-duration="1000"
              data-aos-delay="300"
              data-aos="fade-up"
              class="bg-contain bg-no-repeat relative group bg-center h-[350px] grayscale hover:grayscale-0 transition-all ease-linear duration-200 cursor-pointer  rounded-lg flex justify-end flex-col px-5 py-2 bg-[url('https://ik.imagekit.io/vituepzjm/IMG-20240205-WA0005.jpg?updatedAt=1719518842719')]"
            >
              <span className="w-fit h-fit px-3 group-hover:bg-opacity-65 group-hover:bg-[#212121] py-2">
                <h6 class="font-medium group-hover:opacity-100 transition-all ease-linear duration-200 opacity-0 text-xl text-white ">
                Badminton Match
                </h6>
                <p class="text-base font-mono group-hover:opacity-100 transition-all ease-linear duration-200 opacity-0 font-normal text-white/70">
                  February, 2024
                </p>
              </span>
              <h1 className="absolute bottom-3 hidden lg:block right-5 group-hover:opacity-0 font-semibold transition-all ease-linear bg-[#212121] bg-opacity-60 rounded-lg px-3 py-1 duration-200 text-white">
                Hover me
              </h1>
              <h1 className="absolute bottom-3 block lg:hidden right-5 group-hover:opacity-0 font-semibold transition-all ease-linear bg-[#212121] bg-opacity-60 rounded-lg px-3 py-1 duration-200 text-white">
                Click me
              </h1>
            </div>
            <div data-aos-duration="1000"
              data-aos-delay="200" data-aos="fade-up" class="bg-cover sm:col-span-2 lg:col-span-1 relative group bg-center h-[350px] grayscale hover:grayscale-0 transition-all ease-linear duration-200 cursor-pointer  rounded-lg flex justify-end flex-col px-5 py-2 bg-[url('https://ik.imagekit.io/vituepzjm/IMG-20240427-WA0034.jpg?updatedAt=1719519938679')]">
              <span className="w-fit h-fit px-3 group-hover:bg-opacity-65 group-hover:bg-[#212121] py-2">
                <h6 class="font-medium group-hover:opacity-100 transition-all ease-linear duration-200 opacity-0 text-xl text-white ">
                  Culturals Day
                </h6>
                <p class="text-base font-mono group-hover:opacity-100 transition-all ease-linear duration-200 opacity-0 font-normal text-white/70">
                  April, 2024
                </p>
              </span>
              <h1 className="absolute bottom-3 hidden lg:block right-5 group-hover:opacity-0 font-semibold transition-all ease-linear bg-[#212121] bg-opacity-60 rounded-lg px-3 py-1 duration-200 text-white">
                Hover me
              </h1>
              <h1 className="absolute bottom-3 block lg:hidden right-5 group-hover:opacity-0 font-semibold transition-all ease-linear bg-[#212121] bg-opacity-60 rounded-lg px-3 py-1 duration-200 text-white">
                Click me
              </h1>
            </div>
            <div data-aos-duration="1000"
              data-aos-delay="300" data-aos="fade-up" class="sm:col-span-2 bg-cover relative group bg-center h-[350px] grayscale hover:grayscale-0 transition-all ease-linear duration-200 cursor-pointer  rounded-lg flex justify-end flex-col px-5 py-2 bg-[url('https://ik.imagekit.io/vituepzjm/Screenshot_20230324_195008.jpg?updatedAt=1719519260396')]">
              <span className="w-fit h-fit px-3 group-hover:bg-opacity-65 group-hover:bg-[#212121] py-2">
                <h6 class="font-medium group-hover:opacity-100 transition-all ease-linear duration-200 opacity-0 text-xl text-white ">
                  Placement Day
                </h6>
                <p class="text-base font-mono group-hover:opacity-100 transition-all ease-linear duration-200 opacity-0 font-normal text-white/70">
                  March, 2023
                </p>
              </span>
              <h1 className="absolute bottom-3 hidden lg:block right-5 group-hover:opacity-0 font-semibold transition-all ease-linear bg-[#212121] bg-opacity-60 rounded-lg px-3 py-1 duration-200 text-white">
                Hover me
              </h1>
              <h1 className="absolute bottom-3 block lg:hidden right-5 group-hover:opacity-0 font-semibold transition-all ease-linear bg-[#212121] bg-opacity-60 rounded-lg px-3 py-1 duration-200 text-white">
                Click me
              </h1>
            </div>
            <div data-aos-duration="1000"
              data-aos-delay="400" data-aos="fade-up" class="bg-cover relative group bg-center h-[350px] grayscale hover:grayscale-0 transition-all ease-linear duration-200 cursor-pointer  rounded-lg flex justify-end flex-col px-5 py-2 bg-[url('https://ik.imagekit.io/vituepzjm/328077672_895835955066052_1132139877755480089_n.jpeg?updatedAt=1719518713453')]">
              <span className="w-fit h-fit px-3 group-hover:bg-opacity-65 group-hover:bg-[#212121] py-2">
                <h6 class="font-medium group-hover:opacity-100 transition-all ease-linear duration-200 opacity-0 text-xl text-white ">
                  CSE Block DCE
                </h6>
                <p class="text-base font-mono group-hover:opacity-100 transition-all ease-linear duration-200 opacity-0 font-normal text-white/70">
                  January, 2023
                </p>
              </span>
              <h1 className="absolute bottom-3 hidden lg:block right-5 group-hover:opacity-0 font-semibold transition-all ease-linear bg-[#212121] bg-opacity-60 rounded-lg px-3 py-1 duration-200 text-white">
                Hover me
              </h1>
              <h1 className="absolute bottom-3 block lg:hidden right-5 group-hover:opacity-0 font-semibold transition-all ease-linear bg-[#212121] bg-opacity-60 rounded-lg px-3 py-1 duration-200 text-white">
                Click me
              </h1>
            </div>
            <div data-aos-duration="1000"
              data-aos-delay="300" data-aos="fade-up" class="bg-cover relative group bg-center h-[350px] grayscale hover:grayscale-0 transition-all ease-linear duration-200 cursor-pointer  rounded-lg flex justify-end flex-col px-5 py-2 bg-[url('https://ik.imagekit.io/vituepzjm/IMG_20220114_233906.jpg?updatedAt=1719519345619')]">
              <span className="w-fit h-fit px-3 group-hover:bg-opacity-65 group-hover:bg-[#212121] py-2">
                <h6 class="font-medium group-hover:opacity-100 transition-all ease-linear duration-200 opacity-0 text-xl text-white ">
                  Container Cafe
                </h6>
                <p class="text-base font-mono group-hover:opacity-100 transition-all ease-linear duration-200 opacity-0 font-normal text-white/70">
                  January, 2022
                </p>
              </span>
              <h1 className="absolute bottom-3 hidden lg:block right-5 group-hover:opacity-0 font-semibold transition-all ease-linear bg-[#212121] bg-opacity-60 rounded-lg px-3 py-1 duration-200 text-white">
                Hover me
              </h1>
              <h1 className="absolute bottom-3 block lg:hidden right-5 group-hover:opacity-0 font-semibold transition-all ease-linear bg-[#212121] bg-opacity-60 rounded-lg px-3 py-1 duration-200 text-white">
                Click me
              </h1>
            </div>
            <div data-aos-duration="1000"
              data-aos-delay="200" data-aos="fade-up" class="bg-cover md:col-span-2 lg:col-span-1 relative group bg-center h-[350px] grayscale hover:grayscale-0 transition-all ease-linear duration-200 cursor-pointer  rounded-lg flex justify-end flex-col px-5 py-2 bg-[url('https://ik.imagekit.io/vituepzjm/Screenshot_2021-07-13-14-41-16-437_com.adobe.lrmobile.jpg?updatedAt=1719519345940')]">
              <span className="w-fit h-fit px-3 group-hover:bg-opacity-65 group-hover:bg-[#212121] py-2">
                <h6 class="font-medium group-hover:opacity-100 transition-all ease-linear duration-200 opacity-0 text-xl text-white ">
                  Kolli Hills
                </h6>
                <p class="text-base font-mono group-hover:opacity-100 transition-all ease-linear duration-200 opacity-0 font-normal text-white/70">
                  January, 2021
                </p>
              </span>
              <h1 className="absolute bottom-3 hidden lg:block right-5 group-hover:opacity-0 font-semibold transition-all ease-linear bg-[#212121] bg-opacity-60 rounded-lg px-3 py-1 duration-200 text-white">
                Hover me
              </h1>
              <h1 className="absolute bottom-3 block lg:hidden right-5 group-hover:opacity-0 font-semibold transition-all ease-linear bg-[#212121] bg-opacity-60 rounded-lg px-3 py-1 duration-200 text-white">
                Click me
              </h1>
            </div>
            <div data-aos-duration="1000"
              data-aos-delay="100" data-aos="fade-up" class="md:col-span-2 bg-cover relative group bg-center h-[350px] grayscale hover:grayscale-0 transition-all ease-linear duration-200 cursor-pointer  rounded-lg flex justify-end flex-col px-5 py-2 bg-[url('https://ik.imagekit.io/vituepzjm/299893682_604967541373303_1393542170108623209_n.jpeg?updatedAt=1719518713400')]">
              <span className="w-fit h-fit px-3 group-hover:bg-opacity-65 group-hover:bg-[#212121] py-2">
                <h6 class="font-medium group-hover:opacity-100 transition-all ease-linear duration-200 opacity-0 text-xl text-white ">
                  Three Idiots Reunion
                </h6>
                <p class="text-base font-mono group-hover:opacity-100 transition-all ease-linear duration-200 opacity-0 font-normal text-white/70">
                  August, 2022
                </p>
              </span>
              <h1 className="absolute bottom-3 hidden lg:block right-5 group-hover:opacity-0 font-semibold transition-all ease-linear bg-[#212121] bg-opacity-60 rounded-lg px-3 py-1 duration-200 text-white">
                Hover me
              </h1>
              <h1 className="absolute bottom-3 block lg:hidden right-5 group-hover:opacity-0 font-semibold transition-all ease-linear bg-[#212121] bg-opacity-60 rounded-lg px-3 py-1 duration-200 text-white">
                Click me
              </h1>
            </div>
          </div>
          <h1 className="text-2xl text-gray-600 text-end font-semibold mb-8">
            {" "}
            The Story Continues .. &nbsp; &nbsp;
          </h1>
        </div>
      </section>
    </div>
  );
}

export default Gallery;
