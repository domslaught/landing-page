import { useEffect, useState } from 'react';
import './Header.css';

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <img src="./cefi-logo.png" alt="CEFI Logo" />
        <div className="logo-text">
          <h3>Calayan Educational Foundation Inc.</h3>
          <h4>Lucena City, Quezon</h4>
        </div>
      </div>

      <nav className="nav-links">
        <div className="nav-item">
          <a href="#">About <span className="arrow">▾</span></a>
          <div className="dropdown">
            <a href="#">Our Story</a>
            <a href="#">Vision & Mission</a>
            <a href="#">Leadership</a>
          </div>
        </div>

        <div className="nav-item">
          <a href="#">Academics <span className="arrow">▾</span></a>
          <div className="dropdown">
            <a href="#">Programs</a>
            <a href="#">Departments</a>
            <a href="#">Scholarships</a>
          </div>
        </div>

        <div className="nav-item">
          <a href="#">Cefizen Life <span className="arrow">▾</span></a>
          <div className="dropdown">
            <a href="#">Campus Life</a>
            <a href="#">Organizations</a>
            <a href="#">Events</a>
          </div>
        </div>

        <div className="nav-item">
          <a href="#">Scholarhip <span className="arrow">▾</span></a>
          <div className="dropdown">
            <a href="#">Admission</a>
            <a href="#">Contact Us</a>
          </div>
        </div>

        <div className="nav-item">
          <a href="#">Inquire Now</a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
