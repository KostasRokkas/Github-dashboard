import React from "react";
import classes from "./index.module.css";

const LandingPage = () => {
  return (
    <div className={classes.container}>
      {/* Hero Section */}
      <header className={`${classes.card} ${classes.hero}`}>
        <div className={classes.cardHeader}>
          <h1>Interview Project by Konstantinos Rokkas</h1>
        </div>
        <div className={classes.cardBody}>
          <h2>Frontend Developer | React Enthusiast | Problem Solver</h2>
          <p>
            Skilled in modern web development, with a passion for creating
            interactive and efficient applications.
          </p>
        </div>
      </header>

      {/* About Me Section */}
      <section className={classes.card}>
        <div className={classes.cardHeader}>
          <h3>About Me</h3>
        </div>
        <div className={classes.cardBody}>
          <p>
            I’m a frontend developer with 2 years of experience in building
            dynamic, responsive web applications. I specialize in React and API
            integration. This project demonstrates my ability to handle
            client-side development.
          </p>
          <h4>Key Skills:</h4>
          <ul>
            <li>React</li>
            <li>REST APIs</li>
            <li>JavaScript</li>
            <li>CSS Modules</li>
          </ul>
          <h4>Getting Started:</h4>
          <p>
            To start exploring the GitHub profile viewer, please choose the
            **"User Profile"** option from the navigation menu.
          </p>
        </div>
      </section>

      {/* Project Overview Section */}
      <section className={classes.card}>
        <div className={classes.cardHeader}>
          <h3>Project Overview</h3>
        </div>
        <div className={classes.cardBody}>
          <h4>Project Name: Github Dashboard</h4>
          <p>
            A brief description of the project’s goal: "A GitHub profile viewer
            that allows users to search for GitHub users, view their profiles,
            repositories, and followers."
          </p>
          <h4>Technologies Used:</h4>
          <ul>
            <li>React for frontend</li>
            <li>GitHub API integration</li>
            <li>React Query for data fetching</li>
            <li>CSS Modules for styling</li>
          </ul>
          <h4>Key Features:</h4>
          <ul>
            <li>GitHub profile search functionality</li>
            <li>Modal views for repositories and followers</li>
            <li>API error handling and loading states</li>
          </ul>
          <h4>Challenges & Solutions:</h4>
          <p>
            One key challenge was managing asynchronous API calls efficiently,
            which I overcame by implementing React Query to simplify data
            fetching.
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className={classes.card}>
        <div className={classes.cardHeader}>
          <h3>Next Steps</h3>
        </div>
        <div className={classes.cardBody}>
          <p>
            Feel free to check out the project on GitHub and explore the code.
          </p>
          <div className={classes.buttons}>
            <a
              href="https://github.com/KostasRokkas/Github-dashboard"
              className={classes.button}
            >
              View Project on GitHub
            </a>
            <a
              href="https://dainty-bunny-4d6596.netlify.app/"
              className={classes.button}
            >
              Live Demo
            </a>
          </div>
          <p>I welcome any feedback or questions you may have.</p>
        </div>
      </section>

      {/* Contact Section */}
      <footer className={classes.card}>
        <div className={classes.cardHeader}>
          <h3>Contact Me</h3>
        </div>
        <div className={classes.cardBody}>
          <p>
            You can reach me at:
            <a href="mailto:kostasrokkas@gmail.com">
              {" "}
              kostasrokkas@gmail.com
            </a>{" "}
            or on
            <a href="https://www.linkedin.com/in/konstantinos-rokkas/">
              LinkedIn
            </a>
            .
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
