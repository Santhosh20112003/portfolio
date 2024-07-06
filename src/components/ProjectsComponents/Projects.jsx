import React, { useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { projects } from "../../common/Links";
import { Link } from "react-router-dom";
import Aos from "aos";

function Projects() {
  useEffect(() => {
    Aos.init();
    // document.title = "IETE - About";
  });
  return (
    <div className="pb-12 md:pb-24 pt-12 px-5 md:px-12">
      <h1 class="text-[#203354] text-center md:ps-4 md:border-s-4 md:border-[#203354] md:w-fit font-semibold  md:text-5xl mb-10 text-3xl leading-tight">
        My Works
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-3 xl:grid-cols-4">
        {projects.map((item,index) => (
          <div
            data-aos-duration="1000"
            data-aos-delay={index * 100}
            data-aos="fade-up"
            class="group relative rounded-lg shadow-lg overflow-hidden"
          >
            <div class=" transition-all duration-700 translate-y-full top-0 right-0 left-0 absolute z-10"></div>
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <span className="cursor-pointer">
                  <img
                    src={item.banner}
                    class="transition-all object-cover group-hover:object-top h-[200px] brightness-90 duration-700 w-full"
                    alt={item.name}
                  />

                  <p className="absolute top-3 right-3 text-sm text-gray-50 bg-[#203354] bg-opacity-30 rounded-lg py-1 px-2">
                    <i className="fa fa-info-circle mr-1"></i> more info
                  </p>
                </span>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="bg-gray-900 bg-opacity-30 z-[100] data-[state=open]:animate-overlayShow fixed inset-0" />
                <Dialog.Content
                  className={`data-[state=open]:animate-contentShow flex items-center justify-center bg-transparent z-[1000] fixed top-[50%] left-[50%] max-h-[80vh] w-[90vw] translate-x-[-50%] translate-y-[-50%] rounded-[6px] focus:outline-none`}
                >
                  <div class="relative md:border-l-8 md:border-[#203354] flex group p-5 md:p-8 bg-clip-border gap-5 md:rounded-r-xl rounded-xl md:rounded-l-md bg-white  text-gray-700 shadow-md w-full max-w-[80vw] flex-col md:flex-row">
                    <div class="relative w-full p-2 md:p-4 md:w-2/5 m-0 overflow-hidden md:rounded-r-none rounded-b-none md:rounded-bl-xl bg-clip-border rounded-xl shrink-0">
                      <img
                        src={item.image}
                        alt="card-image"
                        class="w-fit rounded-xl shadow-xl border group-hover:scale-95 md:group-hover:rotate-2 transition-all h-full max-h-[70vh]"
                      />
                    </div>
                    <div class="px-5 flex justify-center flex-col  py-3 md:p-6">
                      <h4 class="block mb-4 text-lg md:text-3xl text-center md:text-start antialiased font-bold leading-snug tracking-normal text-blue-gray-900">
                        {item.name} - {item.short_desc}
                      </h4>
                      <p class="block mb-5 text-sm text-center md:text-start md:text-base antialiased font-normal leading-relaxed text-gray-700">
                        {item.desc}
                      </p>
                      <span className="mb-8 flex items-center justify-center md:justify-start flex-wrap gap-2">
                        {item.technologies.map((tech) => (
                          <h6 class="block bg-[#203354] w-fit text-xs rounded-full text-white px-5 py-2 uppercase">
                            {tech}
                          </h6>
                        ))}
                      </span>
                      <span className="flex items-center justify-center md:justify-start gap-5">
                        <Link target="_blank" to={item.link} className="w-fit">
                          <button class="inline-flex items-center px-5 py-2 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-[#de1243] focus:outline-none active:scale-95 transition-all duration-150 ease-in-out">
                            <i className="fa-arrow-up-right-from-square fas text-sm"></i>{" "}
                            &nbsp; Check out
                          </button>
                        </Link>
                      </span>
                    </div>
                  </div>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
            {/* <div class="bg-gray-100 absolute z-10 border-t-[3px] border-gray-400 bottom-0 left-0 w-full h-20 flex flex-col justify-center items-center">
              <h2 class="font-bold mt-3 px-5 py-12 leading-5 text-center break-words">
                {item.name}
              </h2>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
