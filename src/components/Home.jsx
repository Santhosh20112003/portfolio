import React, { useState } from "react";
import { Links } from "../common/Links";
import { Link, useLocation } from "react-router-dom";
import Hero from "./HomeComponents/Hero";
import Header from "./HomeComponents/Header";
import Quote from "./HomeComponents/Quote";
import Testimonial from "./HomeComponents/Testimonial";
import Blog from "./HomeComponents/Blog";
import Collegue from "./HomeComponents/Collegue";

const Home = () => {

  return (
    <div>
      <Header/>
      <Hero/>
      <Quote/>
      <Blog/>
      <Testimonial/>
      <Collegue />
    </div>
  );
};

export default Home;
