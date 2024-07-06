import React, { useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { abstract } from "../../common/Links";
import Aos from "aos";

function Abstract() {
  useEffect(() => {
    Aos.init();
  });
  return (
    <div className="pb-12 md:pb-24 px-5 md:px-12">
      <h1 className="text-[#203354] text-center md:ps-4 md:border-s-4 md:border-[#203354] md:w-fit font-semibold  md:text-5xl mb-10 text-3xl leading-tight">
        My Works in a Nutshell
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-3 xl:grid-cols-4">
        {abstract.map((item, index) => (
          <div
            data-aos-duration="1000"
            data-aos-delay={index*100}
            data-aos="fade-up"
            key={index}
            className="group pb-20 relative rounded-lg shadow-lg overflow-hidden"
          >
            <div className="transition-all duration-700 translate-y-full top-0 right-0 left-0 absolute z-10"></div>
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <span className="cursor-pointer">
                  <img
                    src={item.image}
                    className="transition-all object-cover group-hover:object-top h-[220px] brightness-90 duration-700 w-full"
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
                  className={`data-[state=open]:animate-contentShow flex items-center justify-center bg-transparent z-[1000] fixed top-[50%] left-[50%]  
                   translate-x-[-50%] translate-y-[-50%] max-h-[80vh] w-[90vw] max-w-[400px] rounded-[6px] focus:outline-none`}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="object-contain rounded-md border-b-4 border-gray-100 w-[80vw]"
                  />
                  <Dialog.Close asChild>
                    <button className="bg-black hidden lg:block bg-opacity-25 px-[10px] py-[3px] rounded-full absolute top-0 right-2">
                      <i className="text-white fas fa-times"></i>
                    </button>
                  </Dialog.Close>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
            <div className="bg-gray-100 absolute z-10 border-t-[3px] border-gray-900 bottom-0 left-0 w-full h-20 flex flex-col justify-center items-center">
              <h2 className="font-bold px-5 py-8 text-gray-600 capitalize leading-5 text-center text-lg break-words">
                {item.name}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Abstract;
