import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/AlienFlowSpace-removebg-preview.png";
import wallet from "../assets/mdi-light_wallet.svg";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(""); // Track the active link

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link); // Update the active link
    if (isSidebarOpen) {
      toggleSidebar(); // Close the sidebar when clicking a link
    }
  };

  return (
    <header className="navbar">
      {/* Left side: Logo */}
      <div className="navbar__logo">
        <img src={logo} alt="Logo" />
      </div>

      {/* Center: Navigation Links (Hidden on mobile) */}
      <nav className="navbar__nav">
        <ul>
          {["", "about", "contact", "academy", "club", "mint"].map((path) => (
            <li key={path}>
              <Link
                to={`/${path}`}
                className={activeLink === path ? "active" : ""}
                onClick={() => handleLinkClick(path)}
              >
                {path === "" ? "Home" : path.charAt(0).toUpperCase() + path.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Right side: Wallet Icon */}
      <div className="navbar__wallet">
        <img src={wallet} alt="Wallet" />
      </div>

      {/* Hamburger Menu (Visible only on mobile) */}
      <button className="navbar__burger" onClick={toggleSidebar}>
        <span className="burger-line"></span>
        <span className="burger-line"></span>
        <span className="burger-line"></span>
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <button className="sidebar__close" onClick={toggleSidebar}>
          &times;
        </button>
        <nav className="sidebar__nav">
          <ul>
            {["", "about", "contact", "academy", "club", "mint"].map((path) => (
              <li key={path}>
                <Link
                  to={`/${path}`}
                  className={activeLink === path ? "active" : ""}
                  onClick={() => handleLinkClick(path)}
                >
                  {path === "" ? "Home" : path.charAt(0).toUpperCase() + path.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
