import React from "react";
import "./Home.css";

function Home() {
  return (
    <section className="hero">
      {/* Left Content */}
      <div className="hero-left">
        <span className="badge">Trusted Technology Solutions</span>
        <h1>
          Build Better with <span className="highlight">Hydizo</span>
        </h1>
        <p>
          Empower your business with cutting-edge technology solutions. 
          From cloud infrastructure to AI integration, we deliver scalable 
          solutions that drive growth and innovation.
        </p>

        {/* Buttons */}
        <div className="hero-buttons">
          <button className="btn-primary">Start Your Project</button>
          <button className="btn-secondary">▶ Watch Demo</button>
        </div>

        {/* Stats */}
        <div className="stats">
          <div>
            <h3>500+</h3>
            <p>Projects Delivered</p>
          </div>
          <div>
            <h3>50+</h3>
            <p>Expert Team</p>
          </div>
          <div>
            <h3>99.9%</h3>
            <p>Uptime SLA</p>
          </div>
        </div>
      </div>

      {/* Right Content (Image placeholder) */}
      <div className="hero-right">
        <div className="image-placeholder">
          {/* You can replace this div with <img src="..." /> later */}
          Image Placeholder
        </div>
      </div>
    </section>
  );
}

export default Home;
