import React from "react";
import Header from "./HomeComponents/Header";
import Footer from "./HomeComponents/Footer";
import Hero from "./SkillsComponents/Hero";
import GithubProgress from "./SkillsComponents/GithubProgress";

function Skills() {
  return (
    <div className="bg-[#203354] w-full h-screen">
      <div className="">
        <Header />
      </div>
      <div className="bg-white">
        <Hero />
      </div>
      <div className="bg-white">
        <GithubProgress />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}

export default Skills;
