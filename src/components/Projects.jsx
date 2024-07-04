import React from "react";
import Header from "./HomeComponents/Header";
import Footer from "./HomeComponents/Footer";
import Hero from "./ProjectsComponents/Hero";
import Abstract from "./ProjectsComponents/Abstract";
import Projects2 from "./ProjectsComponents/Projects";
import FutureProjects from "./ProjectsComponents/FutureProjects";
import Products from "./ProjectsComponents/Products";

function Projects() {
  return (
    <div className="bg-[#203354] w-full h-screen">
      <div className="">
        <Header />
      </div>
      <div className="bg-[#203354]">
        <Hero />
      </div>
      <div className="bg-white">
        <Projects2 />
      </div>
      <div className="bg-white">
        <Abstract />
      </div>
      <div className="bg-white">
        <FutureProjects />
      </div>
      <div className="bg-white">
        <Products />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}

export default Projects;
