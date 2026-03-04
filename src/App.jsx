import { useState, useEffect } from 'react';
import React from 'react';
import self from './assets/Self.jpg';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Resume from './pages/Resume';
import './App.css';
import Portfolio from './pages/Portfolio';
function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((t) => (t === 'light' ? 'dark' : 'light'));
  };

  const Home = () => {
    useEffect(() => {
      const homeSections = document.querySelectorAll('.homepage-fade');

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('homepage-fade--visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2 }
      );

      homeSections.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    }, []);

    return (
      <div className="homepage" style={{ paddingTop: '80px' }}>
        <title>Christiano Carta</title>
        <div className="homepage-fade">
          <img src={self} alt="Self" className="self" />
          <h1>Christiano Carta</h1>
          <p className="bio">
            I'm a software engineer with previous experience at Hubbell Incorporated as well as Grey-Box. Feel free to reach out at my socials or at cxcarta@gmail.com.
          </p>
          <div className="socials">
            <a href="https://github.com/crcarta" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/christiano-carta/" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>
        <footer className="homepage-fade">
          <p>© 2026 Christiano Carta. All Rights Reserved.</p>
          <p>Last Modified 03/04/2026</p>
        </footer>
      </div>
    );
  };

  return (
    <Router>
      <Navbar onToggleTheme={toggleTheme} theme={theme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </Router>
  );
}

export default App;
