import React from "react";
import "./WhyHydizo.css";

const WhyHydizo = () => {
  const points = [
    {
      title: "Excellence in Every Technology Solution",
      description:
        "We bring over a decade of experience in delivering enterprise-grade solutions across diverse industries. Our focus is on building technology that not only meets today’s demands but also scales for tomorrow. With proven methodologies, we ensure reliability, efficiency, and measurable business outcomes.",
      img: "/images/tech.png",
    },
    {
      title: "Scale Apps with Confidence",
      description:
        "Our solutions are built for performance and global reach. With support for distributed deployments, fault tolerance, and workload isolation, you can expand without limitations. Whether it’s AWS, Azure, or Google Cloud, we make scaling simple and seamless across multiple regions.",
      img: "/images/cloud.png",
    },
    {
      title: "Optimize Deployments Effortlessly",
      description:
        "We ensure your infrastructure adapts automatically to changing workloads with intelligent scaling. Built-in monitoring and automation reduce inefficiencies, while zero-downtime upgrades keep your systems running smoothly. This means less manual intervention and more focus on innovation.",
      img: "/images/optimize.png",
    },
    {
      title: "Proven Results That Drive Growth",
      description:
        "Our track record speaks for itself—500+ projects delivered successfully, with consistent ROI improvements for clients. From reducing operational costs to accelerating product launches, we help businesses achieve measurable growth. Partner with us to transform your technology investments into competitive advantage.",
      img: "/images/results.png",
    },
  ];

  return (
    <section className="why-hydizo">
      <div className="container">

        {/* Section Headline */}
        <div className="why-header">
          <h1>Why Hydizo</h1>
          <p>
            We combine deep expertise, innovative solutions, and proven results to help 
            businesses scale confidently and achieve long-term success.
          </p>
        </div>

        {/* Content Blocks */}
        {points.map((point, index) => (
          <div
            key={index}
            className={`why-block ${index % 2 === 1 ? "reverse" : ""}`}
          >
            <div className="why-text">
              <h2>{point.title}</h2>
              <p>{point.description}</p>
            </div>
            <div className="why-image">
              <img src={point.img} alt={point.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyHydizo;
