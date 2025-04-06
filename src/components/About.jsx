import React, { useEffect } from "react";
import Header from "./HomeComponents/Header";
import Gallery from "./AboutComponents/Gallery";
import Footer from "./HomeComponents/Footer";
import AboutMe from "./AboutComponents/About";
import WorkExperience from "./AboutComponents/WorkExperience";
import Hobby from "./AboutComponents/Hobby";
import Journey from "./AboutComponents/Journey";
import Hero from "./AboutComponents/Hero";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

function About() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className=" w-full min-h-screen">
      <Helmet>
        <title>About Me | Santech</title>
        <meta name="description" content="Learn about my background, work experience, hobbies, and professional journey." />
        <meta name="keywords" content="portfolio, work experience, about me, developer, professional,santhosh,santhosh shanmugam,santhosh about, santech about,santechh about" />
        <meta property="og:title" content="About Me | Portfolio" />
        <meta property="og:description" content="Learn about my background, work experience, hobbies, and professional journey." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Me | Portfolio" />
        <meta property="og:url" content={window.location.href} />
        <link rel="canonical" href={window.location.href} />
        <meta name="twitter:description" content="Learn about my background, work experience, hobbies, and professional journey." />
      </Helmet>
      <div className="bg-[#203354]">
        <Header />
      </div>
      <div className="">
        <Hero />
      </div>
      <div className="">
        <AboutMe />
      </div>
      <div className="">
        <Hobby />
      </div>
      <div className="">
        <WorkExperience />
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
