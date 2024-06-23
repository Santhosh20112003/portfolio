import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Links } from "../../common/Links";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

function Header() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const toggleNavbar = () => {
    setOpen(!open);
  };
  return (
    <div className="p-5">
      <header className="w-100 border border-gray-700 z-[50] bg-gray-600 bg-opacity-25 p-3.5 backdrop-blur-lg rounded-xl flex items-center justify-between">
        <span className="flex items-center gap-3">
          <Link to="/home">
            <img
              src={require("../../asserts/4.png")}
              alt="SanTech Logo"
              className="h-12 md:ml-4 drop-shadow-3xl"
            />
          </Link>
        </span>

        <span className="hidden md:flex md:mr-4 items-center gap-5">
          {Links.map((link) => (
            <a
              className={` ${
                location.pathname.includes(link.link)
                  ? "uppercase font-semibold"
                  : ""
              }  tracking-wide text-gray-300 hover:border-gray-200 border-b-2 border-transparent font-normal  text-lg `}
              href={link.link}
              key={link.name}
            >
              {location.pathname.includes(link.link) ? link.styled : link.name}
            </a>
          ))}
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <button class="cursor-pointer flex justify-between bg-gray-800 px-4 py-2 rounded-full text-white tracking-wider shadow-xl hover:bg-gray-900 hover:scale-105 duration-500 hover:ring-1 font-mono w-[120px]">
                RESUME
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="w-5 h-5 animate-bounce"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                  ></path>
                </svg>
              </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
              <DropdownMenu.Content
                className="mr-10 bg-white rounded-md p-[5px] shadow will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
                sideOffset={10}
              >
                <DropdownMenu.Arrow className="fill-white me-24" />
                <DropdownMenu.Item
                  className={`${
                    location.pathname.includes("/resume/preview")
                      ? "bg-[#203354] text-white"
                      : ""
                  }  text-sm leading-none text-[#203354] mb-1 rounded-md py-2 px-2 gap-10 select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-[#203354] data-[highlighted]:text-violet1`}
                >
                  <Link
                    to={"/resume/preview"}
                    className="flex items-center justify-between gap-10"
                  >
                    <h1 className="">Preview</h1>
                    <i className="fas fa-eye"></i>
                  </Link>
                </DropdownMenu.Item>
                <DropdownMenu.Item className=" text-sm leading-none text-[#203354] rounded-md  py-2 px-2 gap-10 select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-[#203354] data-[highlighted]:text-violet1">
                  <a
                    href={require("../../asserts/resume.pdf")}
                    download="Santhosh_Resume.pdf"
                    className="flex items-center justify-between gap-10"
                  >
                    <h1 className="">Download</h1>
                    <i className="fas fa-download"></i>
                  </a>
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </span>

        <span className="flex md:hidden lg:hidden" onClick={toggleNavbar}>
          <i className="text-2xl cursor-pointer fas fa-bars active:scale-110 transition-transform rounded-md transform text-white py-2 px-3"></i>

          <ul
            className={`md:flex  md:items-center md:pb-0 absolute md:static md:z-auto left-0 w-full z-[30] md:w-auto  md:bg-transparent bg-[#203354] border-[#7e8ca3] border rounded-lg transition-all duration-500 ease-in ${
              open ? "top-24 z-[-1]" : "top-[-490px] z-[-1]"
            }`}
          >
            <li className=" md:text-xl flex flex-col  items-center p-5 gap-3">
              {Links.map((link) => (
                <a
                  href={link.link}
                  key={link.name}
                  className="text-white active:bg-white active:text-[#203354] w-full uppercase p-3 rounded-md text-base"
                >
                  {link.name}
                </a>
              ))}
            </li>
            <div className="flex items-center ps-5 pb-8 justify-start">
              <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                  <button class="cursor-pointer flex justify-between bg-gray-800 px-4 py-2 rounded-full text-white tracking-wider shadow-xl hover:bg-gray-900 hover:scale-105 duration-500 hover:ring-1 font-mono w-[120px]">
                    RESUME
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      class="w-5 h-5 animate-bounce"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                      ></path>
                    </svg>
                  </button>
                </DropdownMenu.Trigger>

                <DropdownMenu.Portal>
                  <DropdownMenu.Content
                    className="ml-10 bg-white rounded-md p-[5px] shadow will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
                    sideOffset={10}
                  >
                    <DropdownMenu.Arrow className="fill-white ms-24" />
                    <DropdownMenu.Item
                      className={`${
                        location.pathname.includes("/resume/preview")
                          ? "bg-[#203354] text-white"
                          : ""
                      }  text-sm leading-none text-[#203354] mb-1 rounded-md py-2 px-2 gap-10 select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-[#203354] data-[highlighted]:text-violet1`}
                    >
                      <Link
                        to={"/resume/preview"}
                        className="flex items-center justify-between gap-10"
                      >
                        <h1 className="">Preview</h1>
                        <i className="fas fa-eye"></i>
                      </Link>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className=" text-sm leading-none text-[#203354] rounded-md  py-2 px-2 gap-10 select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-[#203354] data-[highlighted]:text-violet1">
                      <a
                        href={require("../../asserts/resume.pdf")}
                        download="Santhosh_Resume.pdf"
                        className="flex items-center justify-between gap-10"
                      >
                        <h1 className="">Download</h1>
                        <i className="fas fa-download"></i>
                      </a>
                    </DropdownMenu.Item>
                  </DropdownMenu.Content>
                </DropdownMenu.Portal>
              </DropdownMenu.Root>
            </div>
          </ul>
        </span>
      </header>
    </div>
  );
}

export default Header;
