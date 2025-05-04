import styles from "@/styles/Role.module.css";

export interface RoleProps {
  title: string;
  startDate: string;
  endDate: string;
  description: string[];
}

export default function Role({ title, startDate, endDate, description }: RoleProps) {
  return (
    <div className={styles.role}>
      <div className={styles.timeline}>
        <div className={styles.dot}></div>
        <div className={styles.line}></div>
      </div>
      <div className={styles.roleInfo}>
        <h3 className={styles.title}>{title}</h3>
        {startDate && endDate && (
          <p className={styles.date}>
            {startDate} - {endDate}
          </p>
        )}
        <ul className={styles.description}>
          {description.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
