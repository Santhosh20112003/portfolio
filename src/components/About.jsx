import React from "react";
import Header from "./HomeComponents/Header";
import Gallery from "./AboutComponents/Gallery";
import Footer from "./HomeComponents/Footer";
import Hero from "./AboutComponents/Hero";
import WorkExperience from "./AboutComponents/WorkExperience";
import Hobby from "./AboutComponents/Hobby";
import Journey from "./AboutComponents/Journey";

function About() {
  return (
    <div className=" w-full min-h-screen">
      <div className="bg-[#203354]">
        <Header />
      </div>
      <div className="">
        <Hero />
      </div>
      <div className="">
        <WorkExperience />
      </div>
      <div className="">
        <Hobby />
      </div>
      <div className="">
        <Journey />
      </div>
      <div className="">
        <Gallery />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}

export default About;
