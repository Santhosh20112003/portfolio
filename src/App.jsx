import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import ScrollTop from "./components/ScrollTop";
import toast, { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";
import PageProgress from "./components/PageProgress";
import Notificationbanner from "./components/Banner";

function App() {
  useEffect(() => {
    const handleOnline = () => {
      toast.success("Welcome Back to Online")
    };

    const handleOffline = () => {
      toast.error("Oops you're Offline")
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);
  return (
    <div>

      <Router>
        <Analytics />
        <Notificationbanner />
        <PageProgress />
        <Routes>
          <Route path="" element={<Navigate to="home" />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="skills" element={<Skills />} />
          <Route path="contact" element={<Contact />} />
          <Route path="resume/preview" element={<Resume />} />
          <Route path="*" element={<Navigate to="home" />} />
        </Routes>
      </Router>
      <div className="z-[100000000000000000000000000000000]">
        <Toaster />
      </div>
      <ScrollTop />
    </div>
  );
}

export default App;
