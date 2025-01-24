import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import { FaInstagram, FaYoutube, FaFacebookF, FaLinkedin } from "react-icons/fa6";



const Header = () => (
  <header className="App-header">
    <h1>Niko Hautamäki</h1>
    <nav>
      <ul className="nav-links">
        <li><Link to="/">Koti</Link></li>
        <li><Link to="/about">Työ</Link></li>
        <li><Link to="/blog">Blogi</Link></li>
      </ul>
    </nav>
    <div className="social-and-contact">
      <a href="https://www.linkedin.com/in/niko-hautamäki-9b24b810a/" target="_blank" rel="noopener noreferrer" className="social-link"><FaLinkedin /></a>
      {/* <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="social-link"><FaYoutube /></a> */}
      <a href="https://www.facebook.com/profile.php?id=61564567244858" target="_blank" rel="noopener noreferrer" className="social-link"><FaFacebookF /></a>
      <a href="mailto:niko.hautamaki@rosil.fi" className="contact-button">Ota yhteyttä</a>
    </div>
  </header>
);

export default Header;
