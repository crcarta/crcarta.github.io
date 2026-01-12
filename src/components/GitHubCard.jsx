import React from 'react';
import './GitHubCard.css';

const GitHubCard = ({ title, description, repoUrl, status }) => {
  return (
    <div className="github-card">
      <div className="card-header">
        <h2>{title}</h2>
        {status && <span className={`status-dot ${status}`}></span>}
      </div>
      <p>{description}</p>
      <a href={repoUrl} target="_blank" rel="noreferrer" className="github-link">
        View on GitHub
      </a>
    </div>
  );
};

export default GitHubCard;
