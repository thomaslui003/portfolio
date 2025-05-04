import React, { useEffect, useState } from "react";
import styles from "@/styles/ProjectCard.module.css";
import Tag from "./Tag";
import externalLink from "../../public/images/link.svg";
import github from "../../public/images/github.svg";
import arrow from "../../public/images/arrow-top-right.svg";
import Image from "next/image";
import Link from "next/link";

const ValidTags = [
  "Firebase",
  "Flask",
  "Javascript",
  "Typescript",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "Python",
  "React",
  "Typescript",
  "D3.js",
  "SpringBoot",
  "Java",
  "AWS S3",
  "Matlab",
  "C#",
  "Unity",
  "Maya"
] as const;

type ValidTag = (typeof ValidTags)[number];

interface ProjectCardProps {
  name: string;
  startDate: string;
  endDate: string;
  description: string[];
  tags: ValidTag[];
  link: string;
  imageLink?: string; // New link specifically for the image
  extra: string;
  image?: string; // Example usage: image="/images/headshot.jpg"
}

export default function ProjectCard({ 
  name, 
  startDate, 
  endDate, 
  description, 
  tags, 
  link, 
  imageLink,
  extra,
  image 
}: ProjectCardProps) {
  const icon = link.includes("github") ? github : externalLink;
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
    <div className={styles.projectCard}>
      <div className={styles.contentWrapper}>
        {image && (
          <div className={styles.imageContainer}>
            <Link href={imageLink || link}>
              <Image 
                src={image} 
                alt={`${name} preview`} 
                className={styles.projectImage}
                width={400}
                height={300}
                objectFit="cover"
              />
            </Link>
          </div>
        )}
        <div className={styles.projectContent}>
          {isMobile && extra && <p className={styles.extra}>{extra}</p>}
          <div className={styles.header}>
            <div className={styles.headerLeft}>
              <span className={styles.name}>{name}</span>
              {link && (
                <Link href={link}>
                  <Image src={icon} alt={link} className={styles.icon} />
                </Link>
              )}
            </div>

            <p className={styles.date}>
              {startDate} {endDate ? `- ${endDate}` : ""}
            </p>
          </div>
          {!isMobile && extra && <p className={styles.extra}>{extra}</p>}
          <div className={styles.tags}>
            {tags.map((tag, index) => (
              <Tag skill={tag} key={index} />
            ))}
          </div>
          <ul className={styles.description}>
            {description.map((desc, index) => (
              <li key={index}>{desc}</li>
            ))}
          </ul>

          {link && (
            <Link href={link} className={styles.viewProject}>
              view project
              <Image src={arrow} alt={link} className={styles.viewProjectIcon} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
