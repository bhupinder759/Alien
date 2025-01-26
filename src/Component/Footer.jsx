import React from 'react';
import './Footer.css';
import logo from "../assets/AlienFlowSpace-removebg-preview.png"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="footer_content">
           <div className="footer-text">
             <p>AlienFlow.Space DAO © ₿£€§ Earth Powered Spac€</p>
           </div>
           <nav className="footer-nav">
              <ul>
                <li><Link to="">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/academy">Academy</Link></li>
                <li><Link to="/club">Club</Link></li>
                <li><Link to="/mint">Mint</Link></li>
              </ul>
           </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer