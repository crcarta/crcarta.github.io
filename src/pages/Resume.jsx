import React, { useEffect } from 'react';
import hubbell from '../assets/hubbell.png'
import ccsu from '../assets/ccsu.png'
import gbox from '../assets/gbox.jpg'
import gt from '../assets/gt.png'
const images = { hubbell, ccsu, gbox };
import './Resume.css';


const Resume = () => {
  useEffect(() => {
    const entries = document.querySelectorAll('.role-entry');

    // Reset visibility so animation restarts
    entries.forEach((el) => el.classList.remove('role-entry--visible'));

    const observer = new IntersectionObserver(
      (items) => {
        items.forEach((item) => {
          if (item.isIntersecting) {
            item.target.classList.add('role-entry--visible');
            observer.unobserve(item.target);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    entries.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

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
            <span className="role-title">Software Engineer Intern</span>
            <span className="role-date">01/2024 - 05/2024</span>
          </div>
          <div className="role-entry">
            <img src={hubbell} alt="Hubbell Incorporated Logo" className="role-logo" />
            <span className="role-title">Embedded Software Engineer Intern</span>
            <span className="role-date">05/2023 - 08/2023</span>
          </div>
        </div>

        <h2 className="section-header">Education</h2>
        <div className="roles-list">
          <div className="role-entry">
            <img src={gt} alt="Georgia Tech" className="role-logo" />
            <span className="role-title">M.S. in Computer Science</span>
            <span className="role-date">Incoming, Fall 2026</span>
          </div>
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
