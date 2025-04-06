import React, { useEffect } from "react";
import Hero from "./HomeComponents/Hero";
import Header from "./HomeComponents/Header";
import Quote from "./HomeComponents/Quote";
import Testimonial from "./HomeComponents/Testimonial";
import Blog from "./HomeComponents/Blog";
import Collegue from "./HomeComponents/Collegue";
import CTA from "./HomeComponents/CTA";
import Footer from "./HomeComponents/Footer";
import { Helmet } from "react-helmet";


const Home = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="">
      <Helmet>
        <title>Home | Santech</title>
        <meta name="description" content="Welcome to my portfolio website. Explore my projects, skills, and professional experience." />
        <meta name="keywords" content="portfolio, projects, professional, skills, experience,santech, santhosh technologies,santechh" />
        <meta property="og:title" content="Portfolio | Home" />
        <meta property="og:description" content="Welcome to Santech website. Explore my projects, skills, and professional experience." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://santechh.online/home" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Portfolio | Home" />
        <meta name="twitter:description" content="Welcome to Santech website. Explore my projects, skills, and professional experience." />
        <link rel="canonical" href="https://santechh.online/home" />
      </Helmet>
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
