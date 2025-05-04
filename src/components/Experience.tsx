import styles from "@/styles/Experience.module.css";
import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  return (
    <div className={styles.experience}>
      <h1 className={styles.title}>Experience</h1>
      <div className={styles.cards}>
        
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
