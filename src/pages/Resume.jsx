import React from 'react';
import hubbell from '../assets/hubbell.png'
import ccsu from '../assets/ccsu.jpg';
import gbox from '../assets/gbox.jpg'
const images = { hubbell, ccsu, gbox };
import './Resume.css';


const Resume = () => {
  return (
    <div className="professional-roles">
      <div className="container">
        <h1>Christiano Carta</h1>
        <h2>Software Engineer</h2>
        <title>Resume</title>
        <h2 className="section-header">Experience</h2>
        <div className="roles-list">
          <div className="role-entry">
            <img src={hubbell} alt="Hubbell Incorporated Logo" className="role-logo" />
            <span className="role-title">Embedded Software Engineer</span>
            <span className="role-date">09/2024 – 05/2025</span>
          </div>
          <div className="role-entry">
            <img src={gbox} alt="Grey-Box Logo" className=" role-logo--gbox" />
            <span className="role-title">Software Engineering Intern</span>
            <span className="role-date">01/2024 - 05/2024</span>
          </div>
          <div className="role-entry">
            <img src={hubbell} alt="Hubbell Incorporated Logo" className="role-logo" />
            <span className="role-title">Embedded Software Engineering Intern</span>
            <span className="role-date">05/2023 - 08/2023</span>
          </div>
        </div>

        <h2 className="section-header">Education</h2>
        <div className="roles-list">
          <div className="role-entry">
            <img src={ccsu} alt="Central Connecticut State University Logo" className="role-logo" />
            <span className="role-title">B.S. in Computer Science Honors</span>
            <span className="role-date">2024</span>
          </div>
        </div>
      </div>
    </div>
  );
};



export default Resume;
