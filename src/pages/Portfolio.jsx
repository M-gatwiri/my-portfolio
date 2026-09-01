import React from "react";

function Portfolio() {
  return (
    <section className="portfolio-page">

      {/* Page Heading */}
      <div className="portfolio-heading">
        <p className="portfolio-label">MY WORK</p>

        <h1>
          My <span>Projects</span>
        </h1>

        <p className="portfolio-description">
          Here are some of the projects I've built while developing my
          skills in frontend and full-stack development.
        </p>
      </div>


      
      <div className="featured-project">

        <div className="project-image">
          <img
            src="/northstar.png"
            alt="Northstar Support Deflection MVP"
          />
        </div>

        <div className="featured-content">

          <p className="featured-label">FEATURED PROJECT</p>

          <h2>Northstar Support Deflection MVP</h2>

          <p>
            A customer support application designed to reduce repetitive
            support requests by allowing customers to check order status
            and manage return and refund requests.
          </p>

          <div className="technologies">
            <span>React</span>
            <span>JavaScript</span>
            <span>Vite</span>
            <span>CSS</span>
            <span>Node.js</span>
          </div>

          <div className="project-buttons">
            <a
              href="https://northstar-support-deflection-mvp.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo →
            </a>

            <a
              href="https://github.com/M-gatwiri/northstar-support-deflection-mvp"
              target="_blank"
              rel="noreferrer"
              className="github-button"
            >
              GitHub →
            </a>
          </div>

        </div>
      </div>


      
      <div className="other-projects">

        <h2 className="projects-subheading">Other Projects</h2>

        <div className="projects-grid">

          
          <article className="project-card">

            <div className="project-card-image">
              <img
                src="/usepopcorn.png"
                alt="UsePopcorn movie application"
              />
            </div>

            <div className="project-card-content">

              <h3>UsePopcorn</h3>

              <p>
                A movie discovery application that allows users to search
                for movies, view movie details, rate movies and keep track
                of movies they have watched.
              </p>

              <div className="technologies">
                <span>React</span>
                <span>JavaScript</span>
                <span>Vite</span>
                <span>API</span>
              </div>

              <div className="project-links">

                <a
                  href="https://use-popcorn-react-movie-fetcher.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo →
                </a>

                <a
                  href="https://github.com/M-gatwiri/use-popcorn-react-movie-fetcher"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub →
                </a>

              </div>

            </div>
          </article>

          <article className="project-card">

            <div className="project-card-image">
              <img
                src="/fullstack.png"
                alt="Fullstack MongoDB CRUD application"
              />
            </div>

            <div className="project-card-content">

              <h3>Fullstack CRUD Application</h3>

              <p>
                A full-stack application demonstrating CRUD operations
                using a React frontend, Node.js backend and MongoDB
                database.
              </p>

              <div className="technologies">
                <span>React</span>
                <span>Node.js</span>
                <span>Express</span>
                <span>MongoDB</span>
              </div>

              <div className="project-links">

                <a
                  href="https://mongodb-crud-smoky-five.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo →
                </a>

                <a
                  href="https://github.com/M-gatwiri/fullstack"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub →
                </a>

              </div>

            </div>
          </article>

        </div>
      </div>

    </section>
  );
}

export default Portfolio;