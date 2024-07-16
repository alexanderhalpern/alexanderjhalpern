// pages/index.js
"use client";
import React, { useRef, useState } from "react";
import Header from "../components/Header";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import JazzPiano from "../components/JazzPiano";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const [youtubeEvent, setYoutubeEvent] = useState<any>(null);
  return (
    <div className="min-h-screen font-sans">
      <Header youtubeEvent={youtubeEvent} />
      <AboutMe />
      <Projects />
      <Experience />
      <JazzPiano setYoutubeEvent={setYoutubeEvent} />
      <Footer />
    </div>
  );
};
export default Home;
