import React from "react";
import "./BusinessProcess.css";

const steps = [
  {
    id: 1,
    title: "Business Planning and Consulting",
    desc: "Get in touch, and we'll help you craft a path to success! We analyze your business needs and create a strategic roadmap.",
    icon: "💬",
    color: "blue",
  },
  {
    id: 2,
    title: "Designing and Branding",
    desc: "Create compelling visual identity and user experiences that resonate with your target audience and build brand recognition.",
    icon: "🎨",
    color: "purple",
  },
  {
    id: 3,
    title: "Product Development and Launch",
    desc: "Transform concepts into reality with cutting-edge development practices and seamless deployment strategies.",
    icon: "🚀",
    color: "green",
  },
  {
    id: 4,
    title: "Marketing and Support",
    desc: "Comprehensive marketing strategies and ongoing support to ensure your success continues long after launch.",
    icon: "🎧",
    color: "orange",
  },
];

const BusinessProcess = () => {
  return (
    <div className="process-container">
      <div className="process-header">
        <p className="process-badge">Our Process</p>
        <h2>
          4 Steps we follow to <span>Transform a Business</span>
        </h2>
        <p className="process-subtext">
          We integrate digital technologies to streamline operations and enhance
          efficiency, helping you expand your reach with a strong online
          presence.
        </p>
      </div>

      <div className="steps-wrapper">
        {steps.map((step, index) => (
          <div className="step-box" key={step.id}>
            <div className="step-icon-wrapper">
              <div className={`step-icon ${step.color}`}>{step.icon}</div>
              <div className="step-card">
                <h4>Step {step.id}</h4>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
            {index < steps.length - 1 && <div className="arrow">➜</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessProcess;
