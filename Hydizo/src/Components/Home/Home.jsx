import React from "react";
import { LayoutDashboard } from "lucide-react"; // npm install lucide-react
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
          Empower your business with cutting-edge technology solutions. From
          cloud infrastructure to AI integration, we deliver scalable solutions
          that drive growth and innovation.
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

      {/* Right Content (Premium Glass Dashboard) */}
      <div className="hero-right">
        <div className="dashboard premium-box fade-in">
          <div className="dashboard-header">
            <h2>
              <LayoutDashboard size={22} strokeWidth={2} />
              <span className="dashboard-title">
                Hydizo <span className="gradient-text">Dashboard</span>
              </span>
              <span className="badge-small">Beta</span>
            </h2>
            <span className="status">
              <span className="status-dot"></span> Live 99.9%
            </span>
          </div>

          <div className="dashboard-grid">
            <div className="card glass-card active">
              <h4>Web Development</h4>
              <p>React • Next.js • Modern</p>
              <span className="tag green">Active</span>
            </div>

            <div className="card glass-card performance">
              <h4>Performance</h4>
              <p>Last 7 days</p>
              <div className="chart">
                <div className="bar" style={{ height: "30%" }}></div>
                <div className="bar" style={{ height: "45%" }}></div>
                <div className="bar" style={{ height: "60%" }}></div>
                <div className="bar" style={{ height: "70%" }}></div>
                <div className="bar" style={{ height: "85%" }}></div>
                <div className="bar" style={{ height: "100%" }}></div>
              </div>
              <div className="performance-footer">
                <span className="growth">+24%</span>
                <span className="latency">Latency 12ms</span>
              </div>
            </div>

            <div className="card glass-card growing">
              <h4>Digital Marketing</h4>
              <p>SEO • SEM • Analytics</p>
              <span className="tag blue">Growing</span>
            </div>

            <div className="card glass-card live">
              <h4>Mobile Apps</h4>
              <p>iOS • Android • Native</p>
              <span className="tag orange">Live</span>
            </div>

            <div className="card glass-card premium">
              <h4>Strategy Planning</h4>
              <p>Consulting • Analysis</p>
              <span className="requests">15.2K req/s</span>
              <span className="tag purple">Premium</span>
            </div>

            <div className="card glass-card automation">
              <h4>Automation</h4>
              <p>Workflows • CRM • AI</p>
              <span className="tag teal">24/7</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
