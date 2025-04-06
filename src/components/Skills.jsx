import React, { useEffect } from "react";
import Header from "./HomeComponents/Header";
import Footer from "./HomeComponents/Footer";
import TechStack from "./SkillsComponents/TechStack";
import GithubProgress from "./SkillsComponents/GithubProgress";
import Certifications from "./SkillsComponents/Certifications";
import Badges from "./SkillsComponents/Badges";
import WorkShopandTraining from "./SkillsComponents/WorkShopandTraining";
import Hero from "./SkillsComponents/Hero";
import { Helmet } from "react-helmet";

function Skills() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="bg-white w-full h-screen">
      <Helmet>
        <title>Skills | Santech</title>
        <meta name="description" content="Explore my technical skills, certifications, and training workshops." />
        <meta name="keywords" content="skills, certifications, training, workshops, portfolio,santech, santech skills, santechh skills, santhosh skills,santhosh shanmugam skills" />
        <meta property="og:title" content="Skills | My Portfolio" />
        <meta property="og:description" content="Explore my technical skills, certifications, and training workshops." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
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
