import styles from "@/styles/Intro.module.css";
import ProfileIcons from "./ProfileIcons";
import { m } from "framer-motion";
import dynamic from 'next/dynamic';
import { TypeAnimation } from "react-type-animation";

const VanillaThreeScene = dynamic(() => import('./VanillaThreeScene'), {
  ssr: false,
  loading: () => (
    <div className={styles.loadingMessage}>
      Loading 3D Scene
    </div>
  ),
});

const descriptions = [
  "a new CS graduate.",
  1000,
  "a software developer.",
  1000,
  "an ultimate frisbee player.",
  1000,
  "a photographer.",
  1000
];

export default function Intro() {
  return (
    <div className={styles.intro}>
      <div className={styles.introText}>
        <h1 className={styles.text}>
          Hi, I&apos;m Thomas
          <m.div
            className={styles.wave}
            animate={{ rotate: [0, 15, 0] }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 0,
              type: "tween"
            }}
          >
            👋
          </m.div>
        </h1>

        <TypeAnimation
          className={styles.descriptionText}
          sequence={descriptions}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          speed={25}
        />

        <div className={styles.profileIcons}>
          <ProfileIcons />
        </div>
      </div>

      <div className={styles.cartoon}> <VanillaThreeScene /> </div>
    </div>
  );
}
