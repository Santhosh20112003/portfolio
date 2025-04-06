import React from "react";
import { Link } from "react-router-dom";
import * as Dialog from "@radix-ui/react-dialog";
import { clientprojects } from "../../common/Links";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

function Clients() {

    return (
        <div className="pb-12 md:pb-24  max-w-7xl mx-auto px-5 md:px-12" >
            <h1 className="text-[#203354] text-center md:ps-4 md:border-s-4 md:border-[#203354] md:w-fit font-semibold  md:text-5xl mb-10 text-3xl leading-tight">
                Client Projects
            </h1>
            <div className="flex items-center flex-col rounded-lg md:bg-gray-200 gap-12">
                {clientprojects.map((item) => (
                    <div class="relative flex group p-5 md:p-8 bg-gray-200 rounded-xl gap-5  text-gray-700 w-full flex-col even:md:flex-row-reverse odd:md:flex-row">
                        <div class="relative w-full p-2 md:p-4 md:w-2/5 m-0 overflow-hidden md:rounded-r-none rounded-b-none md:rounded-bl-xl bg-clip-border rounded-xl shrink-0">
                            <img
                                src={item?.image}
                                alt="card-image"
                                class="w-fit rounded-xl shadow-lg border group-hover:scale-95  group-even:group-hover:-rotate-2  group-odd:group-hover:rotate-2 transition-all h-full max-h-[70vh]"
                            />
                        </div>
                        <div class="px-5 flex justify-center flex-col  py-3 md:p-6">
                            <h4 class="block mb-2 text-lg md:text-4xl text-center md:text-start antialiased font-bold leading-snug tracking-normal text-blue-gray-900">
                                {item?.name}
                            </h4>
                            <h2 className="block mb-4 text-lg md:text-xl text-center md:text-start antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                {item?.short_desc}
                            </h2>
                            <p class="block mb-5 text-sm text-justify md:text-base antialiased font-normal leading-relaxed text-gray-700">
                                {item?.desc}
                            </p>

                            <span className="flex items-center justify-center md:justify-start gap-5">
                                <Link to={item?.link} target="_blank" class="inline-flex items-center  px-5 py-2 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-[#203354] focus:outline-none active:scale-95 transition-all duration-150 ease-in-out">
                                    <i className="fas fa-link text-sm"></i> &nbsp; Check out
                                </Link>
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Clients;
