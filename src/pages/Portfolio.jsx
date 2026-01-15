import React from 'react';
import GitHubCard from '../components/GitHubCard';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <div className="portfolio-wrapper"> {/* <- top-level flex container */}
      <div className="container">
        <h1>Portfolio</h1>
        <h2 className="section-header"></h2>

        <div className="portfolio-grid-wrapper">
          <div className="projects-grid">
            <GitHubCard
              title="Poker"
              description={`C++ | Developing on ideas surrounding Texas Hold 'Em`}
              repoUrl="https://github.com/crcarta/poker"
              status="in-progress"
            />
            <GitHubCard
              title="Personal Website"
              description="My React + Vite personal website."
              repoUrl="https://github.com/crcarta/crcarta.github.io"
              status="in-progress"
            />
            <GitHubCard
              title="Computer Chess"
              description="Working on a functional, basic chess AI."
              repoURL="https://github.com/crcarta/computer-chess"
              status="in-progress"
            />
            <GitHubCard
              title="Python Solutions"
              description="Solutions to coding problems in the Python programing language."
              repoURL="https://github.com/crcarta/PythonSolutions"
              status="in-progress"
            />
            <GitHubCard
              title="Data Science - Books"
              description="Statistical analysis of a book dataset using Python."
              repoUrl="https://github.com/crcarta/book_data_python"
              status="completed"
            />
          </div>


          <div className="status-key-side">
            <div className="status-key-box">
              <div className="status-item">
                <span className="status-dot in-progress"></span> Active
              </div>
              <div className="status-item">
                <span className="status-dot completed"></span> Archived
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
