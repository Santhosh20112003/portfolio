import React from "react";
import Header from "./HomeComponents/Header";
import Gallery from "./AboutComponents/Gallery";
import Footer from "./HomeComponents/Footer";

function About() {
  return (
    <div className="bg-[#203354] w-full min-h-screen">
      <div className="">
        <Header />
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
