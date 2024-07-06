import React from "react";
import "../css/contact.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section class="md:relative pt-16 md:pt-20 pb-16 bg-gradient-to-b from-[#203354] to-[#3c5f9b]">
      <div class="w-full px-5 lg:px-11 mx-auto max-md:px-4">
        
        <h1 class="text-white text-center font-semibold text-2xl md:text-4xl mb-3 min-[500px]:text-5xl leading-tight">
          Discover how My Work can benefit you !!
        </h1>
        <p className="text-gray-300 text-center text-sm md:text-lg mb-10 md:mb-16 leading-tight">
          Let's discuss how I can contribute to your creative vision.
        </p>

        <div class="data flex flex-wrap items-center justify-center lg:flex-nowrap gap-5">
          <a
            href="tel:9043112861"
            target="_blank"
            class="rounded-2xl border relative border-gray-200 bg-white p-7  transition-all duration-500 "
          >
            <p class="w-14 h-14  bg-[#203354] rounded-full flex items-center justify-center mb-5 transition-all duration-500 group-hover:bg-white cursor-pointer">
              <svg
                class="fill-white transition-all duration-500 group-hover:fill-[#203354]"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.84758 7.58462L4.63863 7.46524L4.63855 7.46473L3.84758 7.58462ZM23.693 27.4085L23.5227 28.1902L23.5232 28.1903L23.693 27.4085ZM24.3879 20.598L24.6727 19.8504L24.3879 20.598ZM10.8408 7.07147L10.0919 7.35301V7.35301L10.8408 7.07147ZM11.6654 10.4021L10.879 10.2555L11.6654 10.4021ZM11.535 8.91814L12.2839 8.6366L11.535 8.91814ZM11.2622 15.0393L11.9827 14.6915L11.2622 15.0393ZM11.0857 13.5119L11.8721 13.6585L11.0857 13.5119ZM18.0722 20.3301L17.92 19.5447L18.0722 20.3301ZM16.3099 20.069L15.9211 20.7682L16.3099 20.069ZM21.0165 19.7596L21.1687 20.545L21.0165 19.7596ZM22.5311 19.8906L22.2463 20.6382L22.5311 19.8906ZM18.8963 2.79564C18.4577 2.74255 18.0591 3.05509 18.006 3.49372C17.9529 3.93234 18.2654 4.33096 18.7041 4.38405L18.8963 2.79564ZM26.5498 12.1082C26.6098 12.546 27.0132 12.8523 27.4509 12.7923C27.8887 12.7324 28.195 12.329 28.135 11.8912L26.5498 12.1082ZM18.5736 7.39616C18.1349 7.34387 17.7369 7.65713 17.6846 8.09585C17.6323 8.53457 17.9455 8.93262 18.3843 8.98491L18.5736 7.39616ZM21.9524 12.4978C22.0116 12.9356 22.4144 13.2426 22.8523 13.1835C23.2901 13.1244 23.5972 12.7215 23.538 12.2836L21.9524 12.4978ZM20.8643 18.9742L17.92 19.5447L18.2244 21.1155L21.1687 20.545L20.8643 18.9742ZM16.6987 19.3699C14.4144 18.0995 12.9397 16.6739 11.9827 14.6915L10.5418 15.387C11.6752 17.7349 13.423 19.3789 15.9211 20.7682L16.6987 19.3699ZM11.8721 13.6585L12.4519 10.5487L10.879 10.2555L10.2992 13.3652L11.8721 13.6585ZM12.2839 8.6366L11.5896 6.78994L10.0919 7.35301L10.7862 9.19967L12.2839 8.6366ZM8.24537 4.4745H5.932V6.0745H8.24537V4.4745ZM5.932 4.4745C4.22338 4.4745 2.78466 5.91024 3.05662 7.70451L4.63855 7.46473C4.52906 6.74236 5.09463 6.0745 5.932 6.0745V4.4745ZM3.05654 7.704C3.53868 10.8987 4.97217 16.8037 9.24397 21.0755L10.3753 19.9441C6.46975 16.0385 5.10446 10.552 4.63863 7.46524L3.05654 7.704ZM9.24397 21.0755C13.7053 25.5368 20.0794 27.4401 23.5227 28.1902L23.8632 26.6269C20.4991 25.894 14.5022 24.0709 10.3753 19.9441L9.24397 21.0755ZM23.5232 28.1903C25.3821 28.594 26.9735 27.1319 26.9735 25.323H25.3735C25.3735 26.2068 24.6333 26.7941 23.8627 26.6268L23.5232 28.1903ZM26.9735 25.323V23.1891H25.3735V25.323H26.9735ZM24.6727 19.8504L22.816 19.143L22.2463 20.6382L24.1031 21.3456L24.6727 19.8504ZM26.9735 23.1891C26.9735 22.7447 26.9746 22.3461 26.938 22.0163C26.8991 21.6666 26.8117 21.3186 26.5874 20.9931L25.2699 21.901C25.2904 21.9307 25.3254 21.9915 25.3478 22.1929C25.3723 22.4141 25.3735 22.709 25.3735 23.1891H26.9735ZM24.1031 21.3456C24.5517 21.5165 24.8269 21.6226 25.0249 21.7243C25.2051 21.8169 25.2494 21.8712 25.2699 21.901L26.5874 20.9931C26.3631 20.6676 26.069 20.462 25.7561 20.3012C25.4609 20.1495 25.088 20.0087 24.6727 19.8504L24.1031 21.3456ZM11.5896 6.78994C11.4325 6.37206 11.2927 5.99701 11.1416 5.70004C10.9815 5.38519 10.7761 5.08922 10.4498 4.86331L9.53905 6.17878C9.56885 6.19941 9.62325 6.24403 9.71552 6.42544C9.81689 6.62473 9.92222 6.90162 10.0919 7.35301L11.5896 6.78994ZM8.24537 6.0745C8.7276 6.0745 9.02385 6.07565 9.24606 6.1004C9.44834 6.12293 9.50925 6.15814 9.53905 6.17878L10.4498 4.86331C10.1236 4.6374 9.77426 4.54934 9.42319 4.51023C9.09205 4.47335 8.6918 4.4745 8.24537 4.4745V6.0745ZM12.4519 10.5487C12.5145 10.2131 12.5798 9.89958 12.5514 9.57655L10.9575 9.71661C10.9624 9.77151 10.9573 9.83573 10.879 10.2555L12.4519 10.5487ZM10.7862 9.19967C10.9365 9.59936 10.9527 9.6617 10.9575 9.71661L12.5514 9.57655C12.523 9.25351 12.404 8.95621 12.2839 8.6366L10.7862 9.19967ZM11.9827 14.6915C11.8158 14.3457 11.8038 14.304 11.7945 14.2344L10.2085 14.4461C10.2579 14.8157 10.4002 15.0936 10.5418 15.387L11.9827 14.6915ZM10.2992 13.3652C10.2314 13.7288 10.1587 14.0724 10.2085 14.4461L11.7945 14.2344C11.7857 14.1687 11.7886 14.1065 11.8721 13.6585L10.2992 13.3652ZM17.92 19.5447C17.4 19.6455 17.3246 19.6491 17.2535 19.6378L17.0016 21.2179C17.414 21.2836 17.8072 21.1964 18.2244 21.1155L17.92 19.5447ZM15.9211 20.7682C16.2665 20.9602 16.5915 21.1525 17.0016 21.2179L17.2535 19.6378C17.1803 19.6261 17.1213 19.6048 16.6987 19.3699L15.9211 20.7682ZM21.1687 20.545C21.5971 20.4619 21.6627 20.4564 21.7188 20.4613L21.8567 18.8672C21.5267 18.8387 21.2068 18.9078 20.8643 18.9742L21.1687 20.545ZM22.816 19.143C22.49 19.0188 22.1867 18.8958 21.8567 18.8672L21.7188 20.4613C21.7748 20.4661 21.8385 20.4828 22.2463 20.6382L22.816 19.143ZM18.7041 4.38405C22.8983 4.8917 25.9767 7.92241 26.5498 12.1082L28.135 11.8912C27.4633 6.98479 23.8126 3.39069 18.8963 2.79564L18.7041 4.38405ZM18.3843 8.98491C20.2949 9.21265 21.6949 10.5909 21.9524 12.4978L23.538 12.2836C23.1828 9.65387 21.2086 7.71023 18.5736 7.39616L18.3843 8.98491Z"
                  fill=""
                />
              </svg>
            </p>
            <p className=" bg-[#203354] text-white transition-all duration-500 px-2.5 py-1 group-hover:bg-white group-hover:text-[#203354] rounded-full absolute right-3 text-sm top-3">
              Click me
            </p>
            <h5 class="text-[#203354] text-xl break-all font-semibold leading-8 mb-3 transition-all duration-500 group-hover:text-white">
              +91 9043112861
            </h5>
            <p class="text-[#203354] break-all text-sm font-normal leading-5 transition-all duration-500 group-hover:text-white">
              I'm eager to learn how your insights can contribute to my artistic
              evolution.
            </p>
          </a>
          <a
            href="mailto:shamugamsanthosh22@gmail.com"
            target="_blank"
            class="rounded-2xl border relative border-gray-200 bg-white p-7 transition-all duration-500 "
          >
            <p class="w-14 h-14  bg-[#203354] rounded-full flex items-center justify-center mb-5 transition-all duration-500 group-hover:bg-white cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="fill-white transition-all duration-500 group-hover:stroke-white stroke-[#203354] group-hover:fill-[#203354]"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </p>
            <p className=" bg-[#203354] text-white transition-all duration-500 px-2.5 py-1 group-hover:bg-white group-hover:text-[#203354] rounded-full absolute right-3 text-sm top-3">
              Click me
            </p>
            <h5 class="text-[#203354] text-xl break-all font-semibold leading-8 mb-3 transition-all duration-500 group-hover:text-white">
              shamugamsanthosh22@gmail.com
            </h5>
            <p class="text-[#203354] break-all text-sm font-normal leading-5 transition-all duration-500 group-hover:text-white">
              Let's brainstorm how your creativity can inspire and shape my
              creative vision.
            </p>
          </a>
          <a
            href="https://maps.app.goo.gl/nvtHPiq6dPJV1gEj8"
            target="_blank"
            class="rounded-2xl border relative border-gray-200 bg-white p-7 transition-all duration-500 "
          >
            <p class="w-14 h-14  bg-[#203354] rounded-full flex items-center justify-center mb-5 transition-all duration-500 group-hover:bg-white cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class=" transition-all duration-500 text-white group-hover:text-[#203354]"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                />
              </svg>
            </p>
            <p className=" bg-[#203354] text-white transition-all duration-500 px-2.5 py-1 group-hover:bg-white group-hover:text-[#203354] rounded-full absolute right-3 text-sm top-3">
              Click me
            </p>
            <h5 class="text-[#203354] text-xl break-all font-semibold leading-8 mb-3 transition-all duration-500 group-hover:text-white">
              Chennai , Tamil Nadu
            </h5>
            <p class="text-[#203354] text-sm break-all font-normal leading-5 transition-all duration-500 group-hover:text-white">
              I'd love to hear your thoughts on how we can collaborate to expand
              my creative horizons.
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
