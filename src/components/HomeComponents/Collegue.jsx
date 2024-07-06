import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "../css/shine.css";
import { slides } from "../../common/Links";

function Collegue() {
  return (
    <div className="w-full bg-[#203354] px-6 md:py-14  pb-12">
      <div className="flex flex-col md:flex-row md:items-center justify-start md:gap-16 gap-10">
        <h1 className="text-[2rem] h-fit hidden md:block pl-2 border-l-[6px] border-[#82a9ec] w-fit md:text-[4.9rem] vertical break-words leading-[1.2] tracking-[6px] uppercase rotate-180">
        Remarks
        </h1>
        <h1 className="text-[3rem] h-fit text-[#82a9ec] md:hidden pl-4 border-l-[5px] border-[#82a9ec] w-fit leading-[3.5rem] tracking-[3px] uppercase">
        Remarks
        </h1>
        <div className="w-full md:w-[80%] hidden md:flex items-center justify-center">
          <Swiper
            effect={"coverflow"}
            spaceBetween={50}
            grabCursor={true}
            centeredSlides={true}
            initialSlide={1}
            slidesPerView={"3"}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            coverflowEffect={{
              rotate: 0,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="mySwiper flex items-center overflow-hidden justify-center"
          >
            {slides.map((item, index) => (
              <SwiperSlide className="bg-[#82a9ec] my-auto border-t-4 rounded-md text-[#203354]">
                <div class="flex flex-wrap -m-4">
                  <div class="h-full p-8 rounded">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      class="block w-5 h-5 text-gray-100 mb-4"
                      viewBox="0 0 975.036 975.036"
                    >
                      <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                    </svg>
                    <p class="leading-relaxed mb-6 break-words">
                      {item.review}
                    </p>
                    <a class="inline-flex items-center">
                      <img
                        alt="testimonial"
                        src={item.img}
                        class="w-14 h-14 rounded-full border-2 shadow-lg shadow-[#20335480] flex-shrink-0 object-cover object-center"
                      />
                      <span class="flex-grow flex  flex-col pl-4">
                        <span class="title-font text-gray-200 tracking-wider text-xl font-semibold ">
                          {item.userName}
                        </span>
                        <span class=" font-semibold leading-4 text-sm">
                          {item.designation}
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="w-full md:w-[80%] flex md:hidden items-center justify-center">
        
          <Swiper
            effect={"coverflow"}
            spaceBetween={50}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"1"}
            initialSlide={1}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            coverflowEffect={{
              rotate: 0,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination, Autoplay ,Scrollbar]}
            className="mySwiper flex md:hidden items-center overflow-hidden justify-center"
          >
            {slides.map((item, index) => (
              <SwiperSlide className="bg-[#82a9ec] border-t-4 rounded-md text-[#203354]">
                <div class="flex flex-wrap -m-4">
                  <div class="h-full p-8 rounded">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      class="block w-5 h-5 text-gray-100 mb-4"
                      viewBox="0 0 975.036 975.036"
                    >
                      <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                    </svg>
                    <p class="leading-relaxed mb-6 break-words">
                      {item.review}
                    </p>
                    <a class="inline-flex items-center">
                      <img
                        alt="testimonial"
                        src={item.img}
                        class="w-14 h-14 rounded-full border-2 shadow-lg shadow-[#20335480] flex-shrink-0 object-cover object-center"
                      />
                      <span class="flex-grow flex  flex-col pl-4">
                        <span class="title-font text-gray-200 tracking-wider text-xl font-semibold ">
                          {item.userName}
                        </span>
                        <span class=" font-semibold leading-4 text-sm">
                          {item.designation}
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Collegue;
