import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <div className="logo-icon">H</div>
        <span>Hydizo</span>
      </div>

      {/* Links */}
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#why">Why Hydizo</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* Button */}
      <button className="get-started">Get Started</button>
    </nav>
  );
}

export default Navbar;
