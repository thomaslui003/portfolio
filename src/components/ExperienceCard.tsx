import Role, { RoleProps } from "@/components/Role";
import styles from "@/styles/ExperienceCard.module.css";
import Image from "next/image";

interface ExperienceCardProps {
  company: string;
  logo: string;
  roles: RoleProps[];
}

export default function ExperienceCard({ company, logo, roles }: ExperienceCardProps) {
  return (
    <div className={styles.experienceCard}>
      <div className={styles.title}>
        <Image
          src={logo}
          alt={company}
          className={styles.logo}
          width={company === "SAP" ? 50 : 40}
          height={company === "SAP" ? 30 : 40}
        ></Image>
        <h2 className={styles.company}>{company}</h2>
      </div>
      {roles.map((role, index) => (
        <Role key={index} {...role} />
      ))}
    </div>
  );
}
