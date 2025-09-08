import React from "react";
import "./Services.css";

function Services() {
  const services = [
    {
      icon: "☁️",
      title: "Cloud Solutions",
      desc: "Scalable cloud infrastructure with seamless migration and optimization for peak performance.",
      points: ["AWS & Azure", "Auto-scaling", "Cost Optimization"],
    },
    {
      icon: "📊",
      title: "Data Analytics",
      desc: "Transform data into insights with advanced analytics and machine learning capabilities.",
      points: ["Real-time Analytics", "ML Models", "Data Visualization"],
    },
    {
      icon: "🛡️",
      title: "Cybersecurity",
      desc: "Enterprise-grade security solutions with 24/7 monitoring and threat detection.",
      points: ["Threat Detection", "Compliance", "Security Audits"],
    },
    {
      icon: "📱",
      title: "Mobile Development",
      desc: "Native and cross-platform mobile apps with exceptional user experiences.",
      points: ["iOS & Android", "React Native", "App Store Optimization"],
    },
    {
      icon: "🤖",
      title: "AI Integration",
      desc: "Intelligent automation and AI-powered solutions for streamlined operations.",
      points: ["Process Automation", "Natural Language Processing", "Computer Vision"],
    },
    {
      icon: "🌐",
      title: "Web Solutions",
      desc: "Modern web applications and e-commerce platforms built for scale.",
      points: ["React/Next.js", "E-commerce", "Progressive Web Apps"],
    },
  ];

  return (
    <section className="services-section">
      {/* Section Header */}
      <div className="services-header">
        <span className="badge">Our Services</span>
        <h2>
          Technology Solutions for{" "}
          <span className="highlight">Every Business Need</span>
        </h2>
        <p>
          From cloud infrastructure to AI integration, we provide comprehensive
          solutions that drive innovation and growth.
        </p>
      </div>

      {/* Service Cards */}
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
            <ul>
              {service.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <a href="#learn" className="learn-more">
              Learn more <span className="arrow">→</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
