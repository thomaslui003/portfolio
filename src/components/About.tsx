import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "@/styles/About.module.css";
import headshot from "../../public/images/headshot1.jpg";
export default function About() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.about}>
      {isMobile && <h1 className={styles.h1}>About</h1>}
      <Image src={headshot} alt="headshot" className={styles.headshot}></Image>

      <div className={styles.text}>
        {!isMobile && <h1 className={styles.h1}>About</h1>}
        <h3 className={styles.h3}>Hello there!</h3>
        <p className={styles.description}>
          
          I&apos;m Thomas, a software developer with a passion for building smart solutions to real-world problems.
          I&apos;m currently a new Computer Science graduate at the Simon Fraser University.
        </p>
        <p className={styles.description}>
          
          Outside of my academic and professional pursuits, you can find me tossing a disc on the ultimate frisbee field, shredding the slopes on my snowboard 🏂, or immersing myself in video games. 
          <br/>
          When I’m not gaming or collaborating on innovative projects, I’m all about connecting with others who share my love for problem-solving and bringing ideas to life. 
          <br/>
          <br/>
          Let’s create something amazing together!
          
        </p>
      </div>
    </div>
  );
}
