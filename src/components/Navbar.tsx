import React, { useState, useEffect } from "react";
import styles from "@/styles/Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import ProfileIcons from "./ProfileIcons";
import { m, AnimatePresence, animate } from "framer-motion";
import menu from "../../public/images/menu.svg";
import close from "../../public/images/close.svg";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" }
  // { label: "Resume", href: "/Thomas_Lui_Resume.pdf" }
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [animating, setAnimating] = useState(false);
  const ANIMATION_DURATION = 0.3;

  const handleCloseMenu = () => {
    setAnimating(true);
    setTimeout(() => setMenuOpen(false), ANIMATION_DURATION * 1000);
  };

  const handleAnimationComplete = () => {
    setAnimating(false);
  };

  const scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId);

    if (!element) {
      console.error(`Element with id ${elementId} not found`);
      return;
    }

    const offset = window.innerWidth > 768 ? 125 : 80;
    const target = element.offsetTop - offset;
    animate(window.scrollY, target, {
      type: "tween",
      duration: 0,
      onUpdate: (latest) => {
        window.scrollTo(0, latest);
      }
    });
  };

  const handleNavClick = (href: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (href.endsWith(".pdf")) {
      window.open(href, "_blank");
      return;
    } else if (href === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (href.startsWith("/#")) {
      const elementId = href.substring(2);
      scrollToElement(elementId);
    } else {
      window.location.href = href;
    }
    handleCloseMenu();
  };

  const renderNavLinks = () =>
    navLinks.map((link, index) => (
      <Link key={index} href={link.href} onClick={(e) => handleNavClick(link.href, e)}>
        {link.label}
      </Link>
    ));

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("re                                                                                                                                                                                            size", handleResize);
  }, []);

  return (
    <div className={styles.navbarWrapper}>
      <header className={styles.navbar}>
        <Link legacyBehavior href="/">
          <a
            className={styles.logo}
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            TL
          </a>
        </Link>
        <ul className={styles.links}>{renderNavLinks()}</ul>

        {!menuOpen && !animating && (
          <button className={styles.menuButton} onClick={() => setMenuOpen(true)} aria-label="Open menu">
            <Image src={menu} alt="Menu" style={{ width: "24px", height: "auto" }} />
          </button>
        )}

        <AnimatePresence>
          {menuOpen && (
            <>
              <m.button
                className={styles.menuButton}
                onClick={handleCloseMenu}
                aria-label="Close menu"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: ANIMATION_DURATION }}
              >
                <Image src={close} alt="Close menu" style={{ width: "24px", height: "auto" }} />
              </m.button>
              <m.div
                className={styles.mobileMenu}
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                transition={{ duration: ANIMATION_DURATION }}
                exit={{ x: "100%" }}
                onAnimationComplete={handleAnimationComplete}
              >
                <div className={styles.contentWrapper}>
                  <ul className={styles.links}>{renderNavLinks()}</ul>
                  <ProfileIcons />
                </div>
              </m.div>
            </>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}
