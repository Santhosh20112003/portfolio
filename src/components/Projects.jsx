import React from "react";
import Header from "./HomeComponents/Header";
import Footer from "./HomeComponents/Footer";
import Hero from "./ProjectsComponents/Hero";

function Projects() {
  return (
    <div className="bg-[#203354] w-full h-screen">
      <div className="">
        <Header />
      </div>
      <div className="bg-white">
        <Hero/>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}

export default Projects;
