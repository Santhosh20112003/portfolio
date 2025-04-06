import React, { useEffect } from "react";
import Header from "./HomeComponents/Header";
import Footer from "./HomeComponents/Footer";
import Hero from "./ProjectsComponents/Hero";
import Abstract from "./ProjectsComponents/Abstract";
import Projects2 from "./ProjectsComponents/Projects";
import FutureProjects from "./ProjectsComponents/FutureProjects";
import Products from "./ProjectsComponents/Products";
import Media from "./ProjectsComponents/Media";
import Clients from "./ProjectsComponents/Clients";
import { Helmet } from "react-helmet";

function Projects() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="bg-[#203354] w-full h-screen">
      <Helmet>
        <title>Projects | Santech</title>
        <meta name="description" content="Explore my portfolio of projects spanning web development, design, and more. See my work experience and technical expertise." />
        <meta name="keywords" content="portfolio, projects, web development, programming, design,santech, santech projects, santechh projects, projects, santhosh projects,santhosh works,projects" />
        <meta property="og:title" content="Projects | My Portfolio" />
        <meta property="og:description" content="Explore my portfolio of projects spanning web development, design, and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
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
        <Media />
      </div>
      <div className="bg-white">
        <FutureProjects />
      </div>
      <div className="bg-white">
        <Clients />
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
