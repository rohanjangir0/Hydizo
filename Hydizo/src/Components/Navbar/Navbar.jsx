import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        {/* Logo */}
        <div className="logo">
          <div className="logo-icon">H</div>
          <span className="logo-text">Hydizo</span>
        </div>

        {/* Desktop Links */}
        <ul className="nav-links desktop">
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#why">Why Hydizo</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* Desktop Button */}
        <button className="get-started desktop">Get Started</button>

        {/* Hamburger */}
        <div
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span><span></span><span></span>
        </div>
      </nav>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ul>
              <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
              <li><a href="#services" onClick={() => setIsOpen(false)}>Services</a></li>
              <li><a href="#why" onClick={() => setIsOpen(false)}>Why Hydizo</a></li>
              <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
              <li><button className="get-started">Get Started</button></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
