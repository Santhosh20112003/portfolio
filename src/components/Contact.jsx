import React, { useEffect } from "react";
import Header from "./HomeComponents/Header";
import Footer from "./HomeComponents/Footer";
import Hero from "./ContactComponents/Hero";
import Form from "./ContactComponents/Form";
import SocialLinks from "./ContactComponents/SocialLinks";
import { Helmet } from "react-helmet";

function Contact() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="w-full min-h-screen">
      <Helmet>
        <title>Contact | Santech</title>
        <meta name="description" content="Get in touch with me for collaborations, inquiries, or just to say hello!" />
        <meta name="keywords" content="contact, portfolio, inquiries, collaborations, santech, santechh" />
        <meta property="og:title" content="Contact | My Portfolio" />
        <meta property="og:description" content="Get in touch with me for collaborations, inquiries, or just to say hello!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
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
