import React, { useEffect } from 'react';
import GitHubCard from '../components/GitHubCard';
import './Portfolio.css';

const Portfolio = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.portfolio-fade-item');

    // Reset visibility so animation restarts
    cards.forEach((el) => el.classList.remove('portfolio-fade-item--visible'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('portfolio-fade-item--visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="portfolio-wrapper"> {/* <- top-level flex container */}
      <div className="container">
        <h1>Portfolio</h1>
        <h2 className="section-header"></h2>
        <title>Portfolio</title>
        <div className="portfolio-grid-wrapper">
          <div className="projects-grid portfolio-fade-item">
            <GitHubCard
              title="mp Music Player"
              description="C++ | Lightweight Music Player for Linux."
              repoUrl="https://github.com/crcarta/mp"
              status="in-progress"
            />
            <GitHubCard
              title="Bootloader"
              description="C | Simple Bootloader for ST NUCLEOF446RE board."
              repoUrl="https://github.com/crcarta/stbootloader"
              status="in-progress"
            />
            <GitHubCard
              title="Poker"
              description="C++ | Developing on ideas surrounding Texas Hold 'Em"
              repoUrl="https://github.com/crcarta/poker"
              status="in-progress"
            />
            <GitHubCard
              title="C++ Problems"
              description="Solutions to coding problems."
              repoUrl="https://github.com/crcarta/cpp_solutions"
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
              description="C | Working on a functional, basic chess AI."
              repoUrl="https://github.com/crcarta/computer-chess"
              status="in-progress"
            />
            <GitHubCard
              title="Python Solutions"
              description="Python | Solutions to coding problems."
              repoUrl="https://github.com/crcarta/PythonSolutions"
              status="in-progress"
            />
            <GitHubCard
              title="Data Science - Books"
              description="Python | Statistical analysis of a book dataset using Jupyter."
              repoUrl="https://github.com/crcarta/book_data_python"
              status="completed"
            />
          </div>


          <div className="status-key-side portfolio-fade-item">
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
