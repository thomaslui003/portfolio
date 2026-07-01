import styles from "@/styles/Experience.module.css";
import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  return (
    <div className={styles.experience}>
      <h1 className={styles.title}>Experience</h1>
      <div className={styles.cards}>
        <ExperienceCard
          company="Hutchison Ports, Hong Kong"
          logo="./images/hphLogo.jpeg"
          roles={[
            {
              title: "Full Stack Developer",
              startDate: "May 2025",
              endDate: "Present",
              description: [
                "Played a pivotal role in designing and developing a 3D terminal simulation engine from initial Proof of Concept (POC) to production-ready status, leveraging React TypeScript, Three.js, React Three Map, and a NestJS backend integrated with a workflow engine to connect with core terminal operating microservices for real-time simulation of terminal operations",
                "Designed and implemented workflow-based integration layers using a dedicated workflow engine to bridge and translate complex terminal operating business logic into simulation-ready processes, enabling high-fidelity modeling of equipment deployment, coordination, and operations on the 3D engine",
                "Developed a BullMQ-based time-grid scheduler that orchestrates multiple workflows on the 3D simulation engine, enabling dynamic, time-aware resource allocation, equipment deployment strategies, and operational testing under varying real-world conditions (e.g., weather, vessel schedules, and equipment availability), significantly enhancing simulation fidelity and planning capabilities",
                "Engineered the integration of AI capabilities into the Veronica Terminal Monitoring Geomap system using Spring AI and LangGraph4j, developing a task management panel with AI-assisted semi-automatic task execution; built a contextual Spring AI chatbot that ingests API specifications, workflows, and backend instruction files to steer the LLM via node-based instructions, providing relevant operational context and intelligent assistance that improved user productivity",
                "Actively participated in an Agile Scrum environment, closely collaborating with terminal operation teams to gather requirements, translate business needs into technical specifications, and co-design solutions that aligned the simulation engine with real-world operational workflows and objectives"
              ]
            }
          ]}
        />
        <ExperienceCard
          company="Natural Resouces Canada"
          logo="./images/nrcan.jpeg"
          roles={[
            {
              title: "Software Developer Intern",
              startDate: "MAY 2023",
              endDate: "DEC 2023",
              description: [
                "Contributed to the development and implementation of the Disturbance Data Foundation (DDF) geospatial data warehouse, which integrates over 1 TB of forest disturbance data (fire & harvest) from multiple Canadian jurisdictions. Leveraged Pentaho Data Integration and Java programs to design dataflow pipelines for complex ETL processes, transforming and harmonizing datasets for analysis and providing a web portal for visualizing both the original and harmonized data",
                "Developed a configuration file-driven ETL execution process, automating parameter entry while implementing a validation and logging system to improve pipeline efficiency, ensure accuracy, and streamline troubleshooting",
                "Led the design and implementation of a Grafana dashboard to visualize DDF harmonized disturbance event results, showcasing data comparisons across jurisdictions",
                "Automated the generation of quarterly jurisdictional disturbance event comparison reports for Canadian Council of Forest Ministers (CCFM) meetings by developing a customized Go-lang Grafana reporter API and shell scripting, resulting in a 90% reduction in manual report generation time",
                "Developed a new ETL dataset stream for a Canadian jurisdiction, adapting the DDF database schema and implementing data ingestion transformations",
                "Contributed to refining SQL scripts for the harmonization pipeline, including a script that denormalizes events for clustering disturbance events using PostGIS ST_ClusterDBSCAN, and a script that harmonizes events by ranking and selecting the best geographic representations based on vertices and collection methods, resulting in a 10% reduction in the pipeline's overall runtime",
                "Documented the DDF Harmonization SQL scripts, producing detailed logic walkthroughs, sample outputs, and data flow charts to assist developers",
                "Collaborated in Agile development processes, engaging in sprint planning, daily stand-ups, and sprint reviews to enable effective progress tracking and iterative adjustments based on stakeholder feedback, enhancing the development and implementation of the project"
              ]
            }
          ]}
        />
      </div>
    </div>
  );
}
