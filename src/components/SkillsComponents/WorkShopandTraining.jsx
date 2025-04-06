import React, { useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { workshop } from "../../common/Links";
import Aos from "aos";

function WorkShopandTraining() {
  useEffect(() => {
    Aos.init();
  });
  return (
    <div className="pb-12 md:pb-24  max-w-7xl mx-auto px-5 md:px-12">
      <h1 class="text-[#203354] text-center md:ps-4 md:border-s-4 md:border-[#203354] md:w-fit font-semibold  md:text-5xl mb-10 text-3xl leading-tight">
        Workshops and Hackathons Attended
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-3 xl:grid-cols-4">
        {workshop.map((item, index) => (
          <div
            data-aos-duration="1000"
            data-aos-delay={index * 100}
            data-aos="fade-up"
            class="group pb-20 relative rounded-lg shadow-lg overflow-hidden"
          >
            <div class=" transition-all duration-700 translate-y-full top-0 right-0 left-0 absolute z-10"></div>
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <span className="cursor-pointer">
                  <img
                    src={item.image}
                    class="transition-all object-cover group-hover:object-top h-[200px] brightness-90 duration-700 w-full"
                    alt={item.name}
                  />

                  <button className="absolute top-3 right-3 bg-black bg-opacity-30 rounded-lg py-1 px-2">
                    <i className="fas fa-expand text-white"></i>
                  </button>
                </span>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="bg-blackA6 z-[100] data-[state=open]:animate-overlayShow fixed inset-0" />
                <Dialog.Content
                  className={`data-[state=open]:animate-contentShow flex items-center justify-center bg-transparent z-[1000] fixed top-[50%] left-[50%] max-h-[80vh] w-[90vw] ${
                    item.name == "C++ Programming"
                      ? "max-w-[400px]"
                      : "max-w-[800px]"
                  } translate-x-[-50%] translate-y-[-50%] rounded-[6px] focus:outline-none`}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="object-contain rounded-md border-b-4 border-gray-100 w-[80vw]"
                  />
                  <Dialog.Close asChild>
                    <button className="bg-black hidden lg:block bg-opacity-25 px-[10px] py-[3px] rounded-full absolute top-3 right-5">
                      <i className="text-white fas fa-xmark "></i>
                    </button>
                  </Dialog.Close>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
            <div class="bg-gray-100 absolute z-10 border-t-[3px] border-gray-400 bottom-0 left-0 w-full h-20 flex flex-col justify-center items-center">
              <h2 class="font-bold  px-5 py-8 leading-5 text-center break-words">
                {item.name}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkShopandTraining;
