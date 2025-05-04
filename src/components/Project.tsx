import styles from "@/styles/Project.module.css";
import ProjectCard from "./ProjectCard";

export default function Project() {
  return (
    <div className={styles.projects}>
      <h1 className={styles.title}>Projects</h1>
      <div className={styles.cards}>
        <ProjectCard
          name="Interactive CO2 Emissions Data Visualization"
          startDate="Dec 2024"
          endDate=""
          description={[
            "Designed and implemented an interactive data visualization of global CO2 emissions (1990–2019) using the World Bank dataset, featuring choropleth maps, pie charts, and bar graphs",
            "Developed the application using JavaScript and D3, enabling users to select countries, explore yearly CO2 trends, and interact with color-encoded maps via a range slider and hover features",
            "Utilized Python (Pandas, NumPy) for data cleaning and preparation, and integrated TopoJSON files for accurate world mapping and data visualization",
            "Enhanced user interaction by displaying detailed country-level information on emissions, population, and world total ratio through hover and selection functionalities"
          ]}
          tags={["Python","Javascript", "D3.js"]}
          link="https://github.com/thomaslui003/Global-CO2-Emissions-DataVisualization"
          imageLink="https://thomaslui003.github.io/Global-CO2-Emissions-DataVisualization/"
          image="/images/CO2Dash.png"
          extra=""
        />
        <ProjectCard
          name="Full-Stack SpringBoot Web App (ClientTrack)"
          startDate="Sept 2024"
          endDate=""
          description={[
            "Engineered a full-stack application with React (vite.js) and Spring Boot 3, creating a RESTful API for seamless client information management and profile image uploads to AWS S3",
            "Deployed the backend API on AWS EC2 and the frontend on an S3 bucket, leveraging AWS RDS PostgreSQL for relational database management, enhancing cloud-based scalability and data integrity",
            "Integrated Docker to streamline development with containerized environments for PostgreSQL, Spring Boot API, and React.js, ensuring consistent deployment and testing",
            "Implemented user authentication with secure login and signup functionalities, including Spring Security configurations, to protect user data and manage access",
            "Utilized Mockito for Spring Boot unit testing, validating API endpoints and ensuring robust application functionality through automated test cases"
          ]}
          tags={["React", "SpringBoot", "PostgreSQL", "AWS S3"]}
          link="https://github.com/thomaslui003/SpringBoot-Webapp-with-S3-Image-Uploader/"
          imageLink="http://client-track-frontend.s3-website-us-west-1.amazonaws.com/dashboard"
          image="/images/interfaceClientTrack.png"
          extra=""
        />
        <ProjectCard
          name="Tic Tac Toe with Adversarial Search AI"
          startDate="Mar 2024"
          endDate=""
          description={[
            "Developed an interactive Tic Tac Toe game using Python and Tkinter, offering a dynamic graphical interface that allows players to compete against each other or an AI opponent",
            "Implemented various AI adversarial algorithms, including MinMax, AlphaBeta pruning, Expectimax, and a Random player, providing different levels of challenge and gameplay strategies",
            "Enabled customizable gameplay settings by supporting different board sizes and winning conditions, enhancing the game's flexibility and replayability",
            "Optimized AI decision-making processes using AlphaBeta pruning to reduce computational overhead, resulting in faster move evaluations and a more responsive gaming experience"
          ]}
          tags={["Python"]}
          link="https://github.com/thomaslui003/Tic_Tac_Toe_Adversarial_Search_AI"
          image="/images/TicTacToeInterface.png"
          extra=""
        />
        <ProjectCard
          name="New Invasive Species Reporting Tool"
          startDate="May 2023"
          endDate=""
          description={[
            "Developed a web application for reporting and tracking invasive species sightings, implementing CRUD operations connected to a PostgreSQL database to manage and store user-submitted reports",
            "Implemented user authentication with role-based access control, ensuring secure login and differentiated permissions for regular users and administrators",
            "Designed and developed the backend using Java Servlets and JSP, following the MVC architecture to handle business logic and database interactions, and built a responsive frontend with HTML, CSS, and JavaScript",
            "Automated testing processes by integrating Selenium for functional tests and JUnit for unit tests, enhancing the robustness and reliability of the application"
          ]}
          tags={["Java", "Javascript", "PostgreSQL"]}
          link="https://github.com/thomaslui003/Invasive-Species-Reporting-Tool/"
          image="/images/invasiveAppInterface.jpg"
          extra=""
        />
        <ProjectCard
          name="SIFT-like Descriptors and Feature Matching"
          startDate="Jul 2022"
          endDate=""
          description={[
            "Utilized Matlab and Implemented a computer vision algorithm for Harris Corner detector with a few tunable parameters for corners visualization within an image",
            "Developed a Scale Invariant Feature Transform (SIFT)-like Descriptor for each Harris Corners detected on the input image. With each descriptor, it takes into consideration of the orientation and gradient magnitude at each pixel around the key point location of the Harris Corner with Gaussian weighted factors",
            "Combined both the Harris Corner detector algorithm and SIFT descriptors to create a feature matching method that can match similar corners based on SIFT descriptors across two different images of the same objects"
          ]}
          tags={["Matlab"]}
          link="https://github.com/thomaslui003/Harris-Corner-Detection-and-SIFT-like-Descriptor-Feature-Matching"
          image="/images/featureMatchingProj.png"
          extra=""
        />
        <ProjectCard
          name="Path of WuXia"
          startDate="Aug 2021"
          endDate=""
          description={[
            "Co-developed a first-person Unity adventure puzzle game as part of a team of four, featuring immersive Chinese mythology and tales",
            "Utilized C# with an object-oriented approach to build the gameplay mechanic and used Maya for 3D modeling and animation",
            "Responsible for programming gameplay mechanics for NPC interactions, initial battle scenes, and animations for NPC walking and interactions",
            "Worked closely with concept/visual designer, 3D modeler, animator, and gameplay programmer to build the Unity application"
          ]}
          tags={["C#", "Unity", "Maya"]}
          link="https://0919azi.wixsite.com/iat445/final-project"
          image="/images/pathOfWuxia.png"
          extra="Unity Immersive Environment Game"
        />
      </div>
    </div>
  );
}
