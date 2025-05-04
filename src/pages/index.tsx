import Head from "next/head";
import Navbar from "@/components/Navbar";
import Intro from "@/components/Intro";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Project from "@/components/Project";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";


export default function Home() {
  const [isVisible, setIsVisible] = useState({
    intro: false,
    about: false,
    experience: false,
    projects: false,
    footer: false
  });

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;

      const offsets = {
        intro: document.getElementById("intro")!.getBoundingClientRect().top,
        about: document.getElementById("about")!.getBoundingClientRect().top,
        experience: document.getElementById("experience")!.getBoundingClientRect().top,
        projects: document.getElementById("projects")!.getBoundingClientRect().top,
        footer: document.getElementById("footer")!.getBoundingClientRect().top
      };

      setIsVisible({
        intro: offsets.intro <= viewportHeight,
        about: offsets.about <= viewportHeight,
        experience: offsets.experience <= viewportHeight,
        projects: offsets.projects <= viewportHeight,
        footer: offsets.footer <= viewportHeight
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Thomas Lui</title>
        <meta name="description" content="My portfolio site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="container">
        <div id="intro">
          <Intro />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="experience" className={isVisible.experience ? "visible" : "hidden"}>
          <Experience />
        </div>
        <div id="projects" className={isVisible.projects ? "visible" : "hidden"}>
          <Project />
        </div>
        <div id="footer" className={isVisible.footer ? "visible" : "hidden"}>
          <Footer />
        </div>
      </div>

      {/* <Credits /> */}
    </>
  );
}
