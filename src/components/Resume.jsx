import React, { useEffect } from "react";
import Header from "./HomeComponents/Header";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "./css/shine.css";

function Resume() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="bg-[#203354] w-full min-h-screen">
      <div>
        <Header />
      </div>
      <div className="w-full px-5 py-6 pb-12 flex items-center justify-center flex-col gap-10">
        <h1 className="text-xl pt-6 text-center capitalize leading-snug md:text-4xl text-white">
          My resume showcases my professionalism and allure ❤️
        </h1>

        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
          <div className="w-full pdf max-w-5xl rounded-xl border-4 bg-white border-white h-[400px] md:h-[700px]">
            <Viewer fileUrl={require("../asserts/resume.pdf")} />
          </div>
        </Worker>

        {/* <div class="w-full max-w-6xl flex justify-center text-gray-200 items-center">
          <span class="w-full border border-gray-200"></span>
          <span class="px-4">Or</span>
          <span class="w-full border border-gray-200"></span>
        </div>

        <img
          src="https://ik.imagekit.io/vituepzjm/Resume.png?updatedAt=1719859245333"
          alt="resume QR"
          className="w-full max-w-[22rem] bg-white rounded-2xl"
        /> */}
      </div>
    </div>
  );
}

export default Resume;
