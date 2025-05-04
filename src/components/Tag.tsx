import Image from "next/image";
import styles from "@/styles/Tag.module.css";
import reactLogo from "../../public/images/react.png";
import nodeLogo from "../../public/images/node.png";
import firebaseLogo from "../../public/images/firebase.png";
import flaskLogo from "../../public/images/flask.png";
import javascriptLogo from "../../public/images/javascript.png";
import typescriptLogo from "../../public/images/typescript.png";
import nextLogo from "../../public/images/next.png";
import postgresqlLogo from "../../public/images/postgresql.png";
import pythonLogo from "../../public/images/python.png";
import d3Logo from "../../public/images/d3logo.png";
import springLogo from "../../public/images/springBootLogo.png";
import s3Logo from "../../public/images/s3logo.png";
import javaLogo from "../../public/images/javaLogo1.png";
import matlabLogo from "../../public/images/matlabLogo.png";
import unityLogo from "../../public/images/unityLogo.png";
import cSharpLogo from "../../public/images/csharp.png";
import mayaLogo from "../../public/images/mayaLogo.png";

const logos = {
  React: reactLogo,
  "Node.js": nodeLogo,
  Firebase: firebaseLogo,
  Flask: flaskLogo,
  Javascript: javascriptLogo,
  Typescript: typescriptLogo,
  "Next.js": nextLogo,
  PostgreSQL: postgresqlLogo,
  Python: pythonLogo,
  "D3.js": d3Logo,
  "SpringBoot": springLogo,
  "AWS S3": s3Logo,
  Java: javaLogo,
  Matlab: matlabLogo,
  Unity: unityLogo,
  "C#": cSharpLogo,
  Maya: mayaLogo
} as const;

type LogoKeys = keyof typeof logos;

interface TagProps {
  skill: LogoKeys;
}

export default function Tag({ skill }: TagProps) {
  const logo = logos[skill];
  return (
    <div className={styles.tag}>
      <Image src={logo} alt={skill} className={styles.logo} />
      <p className={styles.skill}>{skill}</p>
    </div>
  );
}
