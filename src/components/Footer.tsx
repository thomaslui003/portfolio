import styles from "@/styles/Footer.module.css";
import ProfileIcons from "./ProfileIcons";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <h1 className={styles.text}>Let&apos;s Chat! 👋</h1>
      <div className={styles.icons}>
        <ProfileIcons />
      </div>
    </footer>
  );
}
