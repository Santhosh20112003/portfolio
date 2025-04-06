import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonial() {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    centerMode: true,
    centerPadding: "60px",
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  const settings2 = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    centerMode: true,
    centerPadding: "60px",
    autoplaySpeed: 2000,
    cssEase: "linear",
    rtl: true,
  };

  const settings3 = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    centerMode: true,
    centerPadding: "60px",
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  const settings4 = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    centerMode: true,
    centerPadding: "60px",
    autoplaySpeed: 2000,
    cssEase: "linear",
    rtl: true,
  };
  return (
    <div className="w-full bg-[#203354]  overflow-hidden py-20">
      <div className="hidden md:block  text-white">
        <Slider {...settings} className="mb-7 ">
          <div className=" px-5">
            <div className="bg-gray-200 bg-opacity-30 uppercase gap-3 flex justify-center items-center rounded-2xl  py-5">
              <i className="fab fa-react text-2xl text-[#5ed3f3]"></i>
              <h1 className="">React JS</h1>
            </div>
          </div>
          <div className=" px-5">
            <div className="bg-gray-200 bg-opacity-30 uppercase gap-3 flex justify-center items-center rounded-2xl py-5">
              <i className="fab fa-angular text-2xl text-[#dd0031]"></i>
              <h1 className="">Angular</h1>
            </div>
          </div>
          <div className=" px-5">
            <div className="bg-gray-200 bg-opacity-30 uppercase gap-3 flex justify-center items-center rounded-2xl py-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0 0 48 48"
              >
                {" "}
                <path
                  fill="#00acc1"
                  d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z"
                ></path>{" "}
              </svg>
              <h1 className="">Tailwindcss</h1>
            </div>
          </div>
          <div className=" px-5">
            <div className="bg-gray-200 bg-opacity-30 uppercase gap-3 flex justify-center items-center rounded-2xl py-5">
              <i className="fab fa-bootstrap text-2xl text-[#e8def0]"></i>
              <h1 className="">Bootstrap</h1>
            </div>
          </div>
          <div className=" px-5">
            <div className="bg-gray-200 bg-opacity-30 uppercase gap-3 flex justify-center items-center rounded-2xl py-5">
              <i className="fab fa-js-square text-2xl text-[#efd81d]"></i>
              <h1 className="">JavaScript</h1>
            </div>
          </div>
        </Slider>
        <Slider {...settings2} className="mt-7 text-white ">
          <div className=" px-5">
            <div className="bg-[#82a9ec] backdrop-blur-sm bg-opacity-30 gap-3 flex justify-center items-center rounded-2xl  py-5">
              <i className="fab fa-node-js text-2xl text-[#8bbf3d]"></i>
              <h1 className="">Node JS</h1>
            </div>
          </div>
          <div className=" px-5">
            <div className="bg-[#82a9ec] backdrop-blur-sm bg-opacity-30 gap-3 flex justify-center items-center rounded-2xl  py-5">
              <img
                src="https://ik.imagekit.io/vituepzjm/firebase_28dp.png?updatedAt=1716284775458"
                alt="Firebase"
                className="w-6 h-6"
              />
              <h1 className="">Firebase</h1>
            </div>
          </div>
          <div className=" px-5">
            <div className="bg-[#82a9ec] backdrop-blur-sm bg-opacity-30 gap-3 flex justify-center items-center rounded-2xl  py-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="26"
                height="26"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#F44336"
                  d="M23.65,24.898c-0.998-1.609-1.722-2.943-2.725-5.455C19.229,15.2,31.24,11.366,26.37,3.999c2.111,5.089-7.577,8.235-8.477,12.473C17.07,20.37,23.645,24.898,23.65,24.898z"
                ></path>
                <path
                  fill="#F44336"
                  d="M23.878,17.27c-0.192,2.516,2.229,3.857,2.299,5.695c0.056,1.496-1.447,2.743-1.447,2.743s2.728-0.536,3.579-2.818c0.945-2.534-1.834-4.269-1.548-6.298c0.267-1.938,6.031-5.543,6.031-5.543S24.311,11.611,23.878,17.27z"
                ></path>
                <g>
                  <path
                    fill="#1565C0"
                    d="M32.084 25.055c1.754-.394 3.233.723 3.233 2.01 0 2.901-4.021 5.643-4.021 5.643s6.225-.742 6.225-5.505C37.521 24.053 34.464 23.266 32.084 25.055zM29.129 27.395c0 0 1.941-1.383 2.458-1.902-4.763 1.011-15.638 1.147-15.638.269 0-.809 3.507-1.638 3.507-1.638s-7.773-.112-7.773 2.181C11.683 28.695 21.858 28.866 29.129 27.395z"
                  ></path>
                  <path
                    fill="#1565C0"
                    d="M27.935,29.571c-4.509,1.499-12.814,1.02-10.354-0.993c-1.198,0-2.974,0.963-2.974,1.889c0,1.857,8.982,3.291,15.63,0.572L27.935,29.571z"
                  ></path>
                  <path
                    fill="#1565C0"
                    d="M18.686,32.739c-1.636,0-2.695,1.054-2.695,1.822c0,2.391,9.76,2.632,13.627,0.205l-2.458-1.632C24.271,34.404,17.014,34.579,18.686,32.739z"
                  ></path>
                  <path
                    fill="#1565C0"
                    d="M36.281,36.632c0-0.936-1.055-1.377-1.433-1.588c2.228,5.373-22.317,4.956-22.317,1.784c0-0.721,1.807-1.427,3.477-1.093l-1.42-0.839C11.26,34.374,9,35.837,9,37.017C9,42.52,36.281,42.255,36.281,36.632z"
                  ></path>
                  <path
                    fill="#1565C0"
                    d="M39,38.604c-4.146,4.095-14.659,5.587-25.231,3.057C24.341,46.164,38.95,43.628,39,38.604z"
                  ></path>
                </g>
              </svg>
              <h1 className="">Java</h1>
            </div>
          </div>
          <div className=" px-5">
            <div className="bg-[#82a9ec] backdrop-blur-sm bg-opacity-30 gap-3 flex justify-center items-center rounded-2xl  py-5">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAB40lEQVR4nLXVzUvCYAAG8PfQJboH3fonunTqkpWi9kGUkFmRFdW0tIUGtco+oBILP5iszLLvxD7WWFqwEu2bCPoHunXoGgQRvfEKhnNeNucDz3HPjw32vgCIyPiZbSnwGKgGhYgjNqFrIJW/OIO/cxxXJO/4uaOynqyDao8CNm81w+kLx51s484bZ7Eu0PiNxlF1OzpYt6aEzmvnpiwAFu59TY+j6vf1KUAbrIerd6uKvMbnWaJc66v5H0ftOOhIAahWGn/PCxiKDNxmjqN2HXb+A6jUA9UoGWjN+PbpGsPdPICIES+SxokkUar28j8Pal+kjwe07eh/JAGTrN2cPY46cNLPA1Al/Xw22hLKBZhOMAFA3pCYaAA/MrG5ADNtFgCepGdONDBGW7dzAZazYQHgTrjnRQOTrM2eC8CZEQFAPVAtooHFqLVE46sVAKMMzhtXr2tg6ClUBqTEsNHymQ2MMFYeMEQPfwCpIRj7aDaAHQ/yAFdixQ3ySXvWW2QeFcZwz1fed8Pi1VRF+i5QexVQv9eeGtcEtdB/7zcAOTITJUzoVG0iVRCLYFC5poKu+DIF5MxCbHahf90A/ewSDCaoZ1CIhA+83GVs+60g4yjsacAS5w7vCwZw7G5VMn4UFfPQH1x+rOEeQytpAAAAAElFTkSuQmCC"
                alt="mongoDb"
              />
              <h1 className="">MongoDB</h1>
            </div>
          </div>
          <div className=" px-5">
            <div className="bg-[#82a9ec] backdrop-blur-sm bg-opacity-30 gap-3 flex justify-center items-center rounded-2xl  py-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="26"
                height="26"
                viewBox="0 0 48 48"
              >
                <circle cx="24" cy="24" r="20" fill="#216287"></circle>
                <circle cx="24" cy="24" r="18" fill="#e87912"></circle>
                <path
                  fill="#216287"
                  d="M29.69,31.95c0,4.35-3.09,7.98-7.19,8.82l-0.55,0.1C13.53,39.87,7,32.7,7,24c0-9.39,7.61-17,17-17 c0.17,0,0.35,0,0.52,0.01c-3.5,1.23-6.02,4.56-6.02,8.49c0,1.49,0.36,2.9,1.01,4.14c0.86,1.66,2.3,2.94,3.97,3.78l1.22,0.61 c1.67,0.84,3.12,2.12,3.98,3.78C29.32,29.05,29.69,30.46,29.69,31.95z"
                ></path>
                <path
                  fill="#fff"
                  d="M24,6C14.059,6,6,14.059,6,24c0,8.671,6.132,15.906,14.295,17.614l0.012,0.063l0.159-0.029 C21.609,41.876,22.79,42,24,42c9.941,0,18-8.059,18-18C42,14.059,33.941,6,24,6z M8,24c0-7.935,5.813-14.521,13.4-15.769 C19.309,9.994,18,12.626,18,15.5c0,1.519,0.367,3.029,1.062,4.368c0.865,1.668,2.316,3.051,4.197,3.996l1.219,0.613 c1.691,0.852,2.991,2.084,3.759,3.564c0.63,1.214,0.949,2.528,0.949,3.907c0,3.645-2.35,6.857-5.711,8.024 C14.897,39.693,8,32.645,8,24z M25.905,39.876c2.599-1.721,4.281-4.668,4.281-7.927c0-1.52-0.367-3.029-1.062-4.368 c-0.865-1.668-2.316-3.051-4.197-3.996l-1.219-0.613c-1.692-0.852-2.991-2.083-3.759-3.564C19.319,18.193,19,16.879,19,15.5 c0-3.173,1.781-6.017,4.464-7.473C23.643,8.021,23.819,8,24,8c8.822,0,16,7.178,16,16C40,32.177,33.831,38.93,25.905,39.876z"
                ></path>
                <path
                  fill="#fff"
                  d="M38.458,27.528c-0.776-0.927-2.018-1.829-2.809-3.135c-0.111-0.184-0.053-0.407,0.135-0.507 C36.799,23.342,36.978,23.441,38,23c-1-1-2.037-1.36-3.681-1.774c-0.322-0.067-0.507-0.337-0.561-0.634 c-0.088-0.323-0.275-0.87-0.471-1.307c-1.421-2.871-3.192-6.625-6.786-6.907c-0.237-0.003-0.463-0.099-0.62-0.257 c-0.453-0.432-1.087-0.967-1.67-1.055c-0.115,0.011-0.057-0.028-0.146,0.054c-0.233,0.273-0.186,0.283-0.026,0.63 c0.216,0.369,0.628,0.791,1.033,1.208c0.411,0.531,0.126,1.308,0.396,1.904c0.111,0.423,0.344,0.923,0.603,1.229 c0.125,0.161,0.163,0.365,0.124,0.55c-0.288,1.377-0.491,2.862-0.212,4.241c0.006,0.147,0.15,0.202,0.256,0.149 c0.033-0.026,0.032-0.008,0.16-0.233C26.556,20.448,27.675,18.307,28,19c0.473,1.538,1.13,4.53,2.522,5.455 c0.059,0.025,0.013,0.122-0.045,0.089c-1.454-0.751-2.631-2.682-2.978-3.984c-0.27,0.023-0.512,0.242-0.648,0.493 c-0.205,0.719-1.26,0.756-1.449-0.013c-0.076-0.298-0.138-0.6-0.167-0.905c-0.111-1.11-0.041-2.753,0.211-3.582 c-0.704-0.76-1.098-2.227-1.005-2.995c-0.413-0.418-0.847-0.829-1.17-1.344c-0.608-0.774-0.076-2.132,0.967-2.083 c0.924,0.077,1.672,0.707,2.33,1.301c0.729-0.065,2.173,0.444,2.982,0.991c1.834,1.191,2.799,3.236,3.847,5.078 c0.409,0.836,1.142,2.25,1.123,2.924c1.866,0.578,3.975,1.277,5.039,3.046c0.019,0.035,0.001,0.08-0.038,0.091 c0,0-2.9,0.91-2.9,0.91l1.921,3C38.575,27.522,38.495,27.584,38.458,27.528L38.458,27.528z"
                ></path>
                <path
                  fill="#fff"
                  d="M27.046,13.688l0.833,1.189C27.879,14.878,28.83,13.53,27.046,13.688z"
                ></path>
                <g>
                  <path
                    fill="#fff"
                    d="M9.762,20.071c0.776,0.927,2.018,1.829,2.809,3.135c0.111,0.184,0.053,0.407-0.135,0.507 c-1.015,0.543-1.193,0.444-2.215,0.886c1,1,2.037,1.36,3.681,1.774c0.322,0.067,0.507,0.337,0.561,0.634 c0.088,0.323,0.275,0.87,0.471,1.307c1.421,2.871,3.192,6.625,6.786,6.907c0.237,0.003,0.463,0.099,0.62,0.257 c0.453,0.432,1.087,0.967,1.67,1.055c0.115-0.011,0.057,0.028,0.146-0.054c0.233-0.273,0.186-0.283,0.026-0.63 c-0.216-0.369-0.628-0.791-1.033-1.208c-0.411-0.531-0.126-1.308-0.396-1.904c-0.111-0.423-0.344-0.923-0.603-1.229 c-0.125-0.161-0.163-0.365-0.124-0.55c0.288-1.377,0.491-2.862,0.212-4.241c-0.006-0.147-0.15-0.202-0.256-0.149 c-0.033,0.026-0.032,0.008-0.16,0.233c-0.158,0.348-1.277,2.49-1.602,1.796c-0.473-1.538-1.13-4.53-2.522-5.455 c-0.059-0.025-0.013-0.122,0.045-0.089c1.454,0.751,2.631,2.682,2.978,3.984c0.27-0.023,0.512-0.242,0.648-0.493 c0.205-0.719,1.26-0.756,1.449,0.013c0.076,0.298,0.138,0.6,0.167,0.905c0.111,1.11,0.041,2.753-0.211,3.582 c0.704,0.76,1.098,2.227,1.005,2.995c0.413,0.418,0.847,0.829,1.17,1.344c0.608,0.774,0.076,2.132-0.967,2.083 c-0.924-0.077-1.672-0.707-2.33-1.301c-0.729,0.065-2.173-0.444-2.982-0.991c-1.834-1.191-2.799-3.236-3.847-5.078 c-0.409-0.836-1.142-2.25-1.123-2.924c-1.866-0.578-3.975-1.277-5.039-3.046c-0.019-0.035-0.001-0.08,0.038-0.091 c0,0,2.9-0.91,2.9-0.91l-1.921-3C9.645,20.077,9.725,20.016,9.762,20.071L9.762,20.071z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M21.174,33.911l-0.833-1.189C20.342,32.722,19.39,34.07,21.174,33.911z"
                  ></path>
                </g>
              </svg>
              <h1 className="">MySql</h1>
            </div>
          </div>
        </Slider>
      </div>
      <div className="block md:hidden ">
        <Slider {...settings3} className="mb-7 md:hidden text-white">
          <div className=" px-5">
            <div className="bg-gray-200 bg-opacity-30 uppercase gap-3 flex justify-center items-center rounded-2xl  py-5">
              <i className="fab fa-react text-2xl text-[#5ed3f3]"></i>
              <h1 className="">React JS</h1>
            </div>
          </div>
          <div className=" px-5">
            <div className="bg-gray-200 bg-opacity-30 uppercase gap-3 flex justify-center items-center rounded-2xl py-5">
              <i className="fab fa-angular text-2xl text-[#dd0031]"></i>
              <h1 className="">Angular</h1>
            </div>
          </div>
          <div className=" px-5">
            <div className="bg-gray-200 bg-opacity-30 uppercase gap-3 flex justify-center items-center rounded-2xl py-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0 0 48 48"
              >
                {" "}
                <path
                  fill="#00acc1"
                  d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z"
                ></path>{" "}
              </svg>
              <h1 className="">Tailwindcss</h1>
            </div>
          </div>
          <div className=" px-5">
            <div className="bg-gray-200 bg-opacity-30 uppercase gap-3 flex justify-center items-center rounded-2xl py-5">
              <i className="fab fa-bootstrap text-2xl text-[#e8def0]"></i>
              <h1 className="">Bootstrap</h1>
            </div>
          </div>
          <div className=" px-5">
            <div className="bg-gray-200 bg-opacity-30 uppercase gap-3 flex justify-center items-center rounded-2xl py-5">
              <i className="fab fa-js-square text-2xl text-[#efd81d]"></i>
              <h1 className="">JavaScript</h1>
            </div>
          </div>
        </Slider>
        <Slider {...settings4} className="mt-7 text-white md:hidden">
          <div className=" px-5">
            <div className="bg-[#82a9ec] backdrop-blur-sm bg-opacity-30 gap-3 flex justify-center items-center rounded-2xl  py-5">
              <i className="fab fa-node-js text-2xl text-[#8bbf3d]"></i>
              <h1 className="">Node JS</h1>
            </div>
          </div>
          <div className=" px-5">
            <div className="bg-[#82a9ec] backdrop-blur-sm bg-opacity-30 gap-3 flex justify-center items-center rounded-2xl  py-5">
              <img
                src="https://ik.imagekit.io/vituepzjm/firebase_28dp.png?updatedAt=1716284775458"
                alt="Firebase"
                className="w-6 h-6"
              />
              <h1 className="">Firebase</h1>
            </div>
          </div>
          <div className=" px-5">
            <div className="bg-[#82a9ec] backdrop-blur-sm bg-opacity-30 gap-3 flex justify-center items-center rounded-2xl  py-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="26"
                height="26"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#F44336"
                  d="M23.65,24.898c-0.998-1.609-1.722-2.943-2.725-5.455C19.229,15.2,31.24,11.366,26.37,3.999c2.111,5.089-7.577,8.235-8.477,12.473C17.07,20.37,23.645,24.898,23.65,24.898z"
                ></path>
                <path
                  fill="#F44336"
                  d="M23.878,17.27c-0.192,2.516,2.229,3.857,2.299,5.695c0.056,1.496-1.447,2.743-1.447,2.743s2.728-0.536,3.579-2.818c0.945-2.534-1.834-4.269-1.548-6.298c0.267-1.938,6.031-5.543,6.031-5.543S24.311,11.611,23.878,17.27z"
                ></path>
                <g>
                  <path
                    fill="#1565C0"
                    d="M32.084 25.055c1.754-.394 3.233.723 3.233 2.01 0 2.901-4.021 5.643-4.021 5.643s6.225-.742 6.225-5.505C37.521 24.053 34.464 23.266 32.084 25.055zM29.129 27.395c0 0 1.941-1.383 2.458-1.902-4.763 1.011-15.638 1.147-15.638.269 0-.809 3.507-1.638 3.507-1.638s-7.773-.112-7.773 2.181C11.683 28.695 21.858 28.866 29.129 27.395z"
                  ></path>
                  <path
                    fill="#1565C0"
                    d="M27.935,29.571c-4.509,1.499-12.814,1.02-10.354-0.993c-1.198,0-2.974,0.963-2.974,1.889c0,1.857,8.982,3.291,15.63,0.572L27.935,29.571z"
                  ></path>
                  <path
                    fill="#1565C0"
                    d="M18.686,32.739c-1.636,0-2.695,1.054-2.695,1.822c0,2.391,9.76,2.632,13.627,0.205l-2.458-1.632C24.271,34.404,17.014,34.579,18.686,32.739z"
                  ></path>
                  <path
                    fill="#1565C0"
                    d="M36.281,36.632c0-0.936-1.055-1.377-1.433-1.588c2.228,5.373-22.317,4.956-22.317,1.784c0-0.721,1.807-1.427,3.477-1.093l-1.42-0.839C11.26,34.374,9,35.837,9,37.017C9,42.52,36.281,42.255,36.281,36.632z"
                  ></path>
                  <path
                    fill="#1565C0"
                    d="M39,38.604c-4.146,4.095-14.659,5.587-25.231,3.057C24.341,46.164,38.95,43.628,39,38.604z"
                  ></path>
                </g>
              </svg>
              <h1 className="">Java</h1>
            </div>
          </div>
          <div className=" px-5">
            <div className="bg-[#82a9ec] backdrop-blur-sm bg-opacity-30 gap-3 flex justify-center items-center rounded-2xl  py-5">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAB40lEQVR4nLXVzUvCYAAG8PfQJboH3fonunTqkpWi9kGUkFmRFdW0tIUGtco+oBILP5iszLLvxD7WWFqwEu2bCPoHunXoGgQRvfEKhnNeNucDz3HPjw32vgCIyPiZbSnwGKgGhYgjNqFrIJW/OIO/cxxXJO/4uaOynqyDao8CNm81w+kLx51s484bZ7Eu0PiNxlF1OzpYt6aEzmvnpiwAFu59TY+j6vf1KUAbrIerd6uKvMbnWaJc66v5H0ftOOhIAahWGn/PCxiKDNxmjqN2HXb+A6jUA9UoGWjN+PbpGsPdPICIES+SxokkUar28j8Pal+kjwe07eh/JAGTrN2cPY46cNLPA1Al/Xw22hLKBZhOMAFA3pCYaAA/MrG5ADNtFgCepGdONDBGW7dzAZazYQHgTrjnRQOTrM2eC8CZEQFAPVAtooHFqLVE46sVAKMMzhtXr2tg6ClUBqTEsNHymQ2MMFYeMEQPfwCpIRj7aDaAHQ/yAFdixQ3ySXvWW2QeFcZwz1fed8Pi1VRF+i5QexVQv9eeGtcEtdB/7zcAOTITJUzoVG0iVRCLYFC5poKu+DIF5MxCbHahf90A/ewSDCaoZ1CIhA+83GVs+60g4yjsacAS5w7vCwZw7G5VMn4UFfPQH1x+rOEeQytpAAAAAElFTkSuQmCC"
                alt="mongoDb"
              />
              <h1 className="">MongoDB</h1>
            </div>
          </div>
          <div className=" px-5">
            <div className="bg-[#82a9ec] backdrop-blur-sm bg-opacity-30 gap-3 flex justify-center items-center rounded-2xl  py-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="26"
                height="26"
                viewBox="0 0 48 48"
              >
                <circle cx="24" cy="24" r="20" fill="#216287"></circle>
                <circle cx="24" cy="24" r="18" fill="#e87912"></circle>
                <path
                  fill="#216287"
                  d="M29.69,31.95c0,4.35-3.09,7.98-7.19,8.82l-0.55,0.1C13.53,39.87,7,32.7,7,24c0-9.39,7.61-17,17-17 c0.17,0,0.35,0,0.52,0.01c-3.5,1.23-6.02,4.56-6.02,8.49c0,1.49,0.36,2.9,1.01,4.14c0.86,1.66,2.3,2.94,3.97,3.78l1.22,0.61 c1.67,0.84,3.12,2.12,3.98,3.78C29.32,29.05,29.69,30.46,29.69,31.95z"
                ></path>
                <path
                  fill="#fff"
                  d="M24,6C14.059,6,6,14.059,6,24c0,8.671,6.132,15.906,14.295,17.614l0.012,0.063l0.159-0.029 C21.609,41.876,22.79,42,24,42c9.941,0,18-8.059,18-18C42,14.059,33.941,6,24,6z M8,24c0-7.935,5.813-14.521,13.4-15.769 C19.309,9.994,18,12.626,18,15.5c0,1.519,0.367,3.029,1.062,4.368c0.865,1.668,2.316,3.051,4.197,3.996l1.219,0.613 c1.691,0.852,2.991,2.084,3.759,3.564c0.63,1.214,0.949,2.528,0.949,3.907c0,3.645-2.35,6.857-5.711,8.024 C14.897,39.693,8,32.645,8,24z M25.905,39.876c2.599-1.721,4.281-4.668,4.281-7.927c0-1.52-0.367-3.029-1.062-4.368 c-0.865-1.668-2.316-3.051-4.197-3.996l-1.219-0.613c-1.692-0.852-2.991-2.083-3.759-3.564C19.319,18.193,19,16.879,19,15.5 c0-3.173,1.781-6.017,4.464-7.473C23.643,8.021,23.819,8,24,8c8.822,0,16,7.178,16,16C40,32.177,33.831,38.93,25.905,39.876z"
                ></path>
                <path
                  fill="#fff"
                  d="M38.458,27.528c-0.776-0.927-2.018-1.829-2.809-3.135c-0.111-0.184-0.053-0.407,0.135-0.507 C36.799,23.342,36.978,23.441,38,23c-1-1-2.037-1.36-3.681-1.774c-0.322-0.067-0.507-0.337-0.561-0.634 c-0.088-0.323-0.275-0.87-0.471-1.307c-1.421-2.871-3.192-6.625-6.786-6.907c-0.237-0.003-0.463-0.099-0.62-0.257 c-0.453-0.432-1.087-0.967-1.67-1.055c-0.115,0.011-0.057-0.028-0.146,0.054c-0.233,0.273-0.186,0.283-0.026,0.63 c0.216,0.369,0.628,0.791,1.033,1.208c0.411,0.531,0.126,1.308,0.396,1.904c0.111,0.423,0.344,0.923,0.603,1.229 c0.125,0.161,0.163,0.365,0.124,0.55c-0.288,1.377-0.491,2.862-0.212,4.241c0.006,0.147,0.15,0.202,0.256,0.149 c0.033-0.026,0.032-0.008,0.16-0.233C26.556,20.448,27.675,18.307,28,19c0.473,1.538,1.13,4.53,2.522,5.455 c0.059,0.025,0.013,0.122-0.045,0.089c-1.454-0.751-2.631-2.682-2.978-3.984c-0.27,0.023-0.512,0.242-0.648,0.493 c-0.205,0.719-1.26,0.756-1.449-0.013c-0.076-0.298-0.138-0.6-0.167-0.905c-0.111-1.11-0.041-2.753,0.211-3.582 c-0.704-0.76-1.098-2.227-1.005-2.995c-0.413-0.418-0.847-0.829-1.17-1.344c-0.608-0.774-0.076-2.132,0.967-2.083 c0.924,0.077,1.672,0.707,2.33,1.301c0.729-0.065,2.173,0.444,2.982,0.991c1.834,1.191,2.799,3.236,3.847,5.078 c0.409,0.836,1.142,2.25,1.123,2.924c1.866,0.578,3.975,1.277,5.039,3.046c0.019,0.035,0.001,0.08-0.038,0.091 c0,0-2.9,0.91-2.9,0.91l1.921,3C38.575,27.522,38.495,27.584,38.458,27.528L38.458,27.528z"
                ></path>
                <path
                  fill="#fff"
                  d="M27.046,13.688l0.833,1.189C27.879,14.878,28.83,13.53,27.046,13.688z"
                ></path>
                <g>
                  <path
                    fill="#fff"
                    d="M9.762,20.071c0.776,0.927,2.018,1.829,2.809,3.135c0.111,0.184,0.053,0.407-0.135,0.507 c-1.015,0.543-1.193,0.444-2.215,0.886c1,1,2.037,1.36,3.681,1.774c0.322,0.067,0.507,0.337,0.561,0.634 c0.088,0.323,0.275,0.87,0.471,1.307c1.421,2.871,3.192,6.625,6.786,6.907c0.237,0.003,0.463,0.099,0.62,0.257 c0.453,0.432,1.087,0.967,1.67,1.055c0.115-0.011,0.057,0.028,0.146-0.054c0.233-0.273,0.186-0.283,0.026-0.63 c-0.216-0.369-0.628-0.791-1.033-1.208c-0.411-0.531-0.126-1.308-0.396-1.904c-0.111-0.423-0.344-0.923-0.603-1.229 c-0.125-0.161-0.163-0.365-0.124-0.55c0.288-1.377,0.491-2.862,0.212-4.241c-0.006-0.147-0.15-0.202-0.256-0.149 c-0.033,0.026-0.032,0.008-0.16,0.233c-0.158,0.348-1.277,2.49-1.602,1.796c-0.473-1.538-1.13-4.53-2.522-5.455 c-0.059-0.025-0.013-0.122,0.045-0.089c1.454,0.751,2.631,2.682,2.978,3.984c0.27-0.023,0.512-0.242,0.648-0.493 c0.205-0.719,1.26-0.756,1.449,0.013c0.076,0.298,0.138,0.6,0.167,0.905c0.111,1.11,0.041,2.753-0.211,3.582 c0.704,0.76,1.098,2.227,1.005,2.995c0.413,0.418,0.847,0.829,1.17,1.344c0.608,0.774,0.076,2.132-0.967,2.083 c-0.924-0.077-1.672-0.707-2.33-1.301c-0.729,0.065-2.173-0.444-2.982-0.991c-1.834-1.191-2.799-3.236-3.847-5.078 c-0.409-0.836-1.142-2.25-1.123-2.924c-1.866-0.578-3.975-1.277-5.039-3.046c-0.019-0.035-0.001-0.08,0.038-0.091 c0,0,2.9-0.91,2.9-0.91l-1.921-3C9.645,20.077,9.725,20.016,9.762,20.071L9.762,20.071z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M21.174,33.911l-0.833-1.189C20.342,32.722,19.39,34.07,21.174,33.911z"
                  ></path>
                </g>
              </svg>
              <h1 className="">MySql</h1>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Testimonial;
