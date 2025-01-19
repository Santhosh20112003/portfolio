import React, { useEffect } from "react";
import Hero from "./HomeComponents/Hero";
import Header from "./HomeComponents/Header";
import Quote from "./HomeComponents/Quote";
import Testimonial from "./HomeComponents/Testimonial";
import Blog from "./HomeComponents/Blog";
import Collegue from "./HomeComponents/Collegue";
import CTA from "./HomeComponents/CTA";
import Footer from "./HomeComponents/Footer";


const Home = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="">
      <Header />
      <Hero />
      <Quote />
      <Testimonial />
      <Blog />
      <Collegue />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;
