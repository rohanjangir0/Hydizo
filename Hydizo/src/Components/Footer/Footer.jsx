import React from "react";
import "./Footer.css";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-brand">
          <div className="logo">
            <span className="logo-circle">H</span>
            <h2>Hydizo</h2>
          </div>
          <p>
            Transforming businesses with cutting-edge technology solutions. We
            build the future, one innovation at a time.
          </p>

          <div className="contact-info">
            <p><MdEmail className="icon" /> connecto@hydizo.com</p>
            <p><MdPhone className="icon" /> +91 9000067672</p>
            <p><MdLocationOn className="icon" /> Hyderabad, TL</p>
          </div>

          <div className="social-icons">
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaGithub /></a>
          </div>
        </div>

        {/* Links Section */}
        <div className="footer-links">
          <div>
            <h4>Services</h4>
            <ul>
              <li><a href="#">Cloud Solutions</a></li>
              <li><a href="#">Data Analytics</a></li>
              <li><a href="#">Cybersecurity</a></li>
              <li><a href="#">Mobile Development</a></li>
              <li><a href="#">AI Integration</a></li>
              <li><a href="#">Web Solutions</a></li>
            </ul>
          </div>

          <div>
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Team</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Case Studies</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4>Resources</h4>
            <ul>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">API Reference</a></li>
              <li><a href="#">Tutorials</a></li>
              <li><a href="#">Webinars</a></li>
              <li><a href="#">Support Center</a></li>
              <li><a href="#">Community</a></li>
            </ul>
          </div>

          <div>
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Cookie Policy</a></li>
              <li><a href="#">GDPR Compliance</a></li>
              <li><a href="#">Security</a></li>
              <li><a href="#">Accessibility</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
