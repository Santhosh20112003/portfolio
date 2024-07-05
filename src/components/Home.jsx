import React, { useEffect, useState } from "react";
import { Links } from "../common/Links";
import { Link, useLocation } from "react-router-dom";
import Hero from "./HomeComponents/Hero";
import Header from "./HomeComponents/Header";
import Quote from "./HomeComponents/Quote";
import Testimonial from "./HomeComponents/Testimonial";
import Blog from "./HomeComponents/Blog";
import Collegue from "./HomeComponents/Collegue";
import CTA from "./HomeComponents/CTA";
import Footer from "./HomeComponents/Footer";
import toast from "react-hot-toast";

const Home = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div>
      <Header />
      <Hero />
      <Quote />
      <Blog />
      <Testimonial />
      <Collegue />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;
