import React from "react";
import Header from "./HomeComponents/Header";
import Footer from "./HomeComponents/Footer";
import TechStack from "./SkillsComponents/TechStack";
import GithubProgress from "./SkillsComponents/GithubProgress";
import Certifications from "./SkillsComponents/Certifications";
import Badges from "./SkillsComponents/Badges";
import WorkShopandTraining from "./SkillsComponents/WorkShopandTraining";
import Hero from "./SkillsComponents/Hero";

function Skills() {
  return (
    <div className="bg-white w-full h-screen">
      <div className="bg-[#203354]">
        <Header />
      </div>
      <div className="">
        <Hero />
      </div>
      <div className="">
        <TechStack />
      </div>
      <div className="">
        <GithubProgress />
      </div>
      <div className="">
        <Certifications />
      </div>
      <div className="">
        <Badges />
      </div>
      <div className="">
        <WorkShopandTraining />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}

export default Skills;
