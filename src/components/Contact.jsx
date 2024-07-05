import React, { useEffect } from "react";
import Header from "./HomeComponents/Header";
import Footer from "./HomeComponents/Footer";
import Hero from "./ContactComponents/Hero";
import Form from "./ContactComponents/Form";
import SocialLinks from "./ContactComponents/SocialLinks";

function Contact() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="w-full min-h-screen">
      <div className="bg-[#203354] w-full">
        <Header />
      </div>
      <div className="">
        <Hero />
      </div>
      <div className="">
        <SocialLinks />
      </div>
      <div className="">
        <Form />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}

export default Contact;
