import React, { useState, useEffect } from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Footer from "../components/Footer";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Technologies from "../components/Technologies";
import BackgroundVideo from "../components/BackgroundVideo";
import ScrollToTopButton from "../components/ScrollToTopButton";
import backgroundImage from "../assets/fundo.png"; 

export default function Home() {
  useDocumentTitle("Home Page");

  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[#000000] opacity-80"></div>
      <div className="relative z-10 flex flex-col items-center justify-center w-full min-h-screen">
        <BackgroundVideo />
        <main className="flex-grow flex flex-col items-center justify-center w-full">
          <AboutMe />
          <Projects />
          <Skills />
          <Technologies />
          <Contact />
        </main>
        <Footer />
      </div>
      <ScrollToTopButton show={showScrollToTop} />
    </div>
  );
}