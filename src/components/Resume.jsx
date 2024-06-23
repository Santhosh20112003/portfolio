import React from "react";
import Header from "./HomeComponents/Header";
import "./css/shine.css";

function Resume() {
  return (
    <div className="bg-[#203354] w-full min-h-screen">
      <div>
        <Header />
      </div>
      <div className="w-full px-5 py-6 flex items-center justify-center flex-col gap-10">
        <h1 className="text-2xl pt-6 text-center capitalize leading-snug md:text-4xl text-white">
          My resume showcases my professionalism and allure ❤️
        </h1>
        <object
          data={require("../asserts/resume.pdf")}
          type="application/pdf"
          className="w-full pdf max-w-5xl rounded-xl border-4 bg-white border-white h-[550px]"
        >
          <p>
            Alternative text - include a link{" "}
            <a href="http://africau.edu/images/default/sample.pdf">
              to the PDF!
            </a>
          </p>
        </object>
      </div>
    </div>
  );
}

export default Resume;
