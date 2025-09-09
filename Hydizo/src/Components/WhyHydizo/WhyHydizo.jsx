import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import "./WhyHydizo.css";

const WhyHydizo = () => {
  const points = [
    {
      title: "Excellence in Every Technology Solution",
      description:
        "Over a decade of delivering enterprise-grade solutions across industries. Our technology is designed to meet today’s needs and scale seamlessly for tomorrow.",
      stats: {
        icon: "📈",
        value: "500+",
        label: "Projects Delivered",
        status: "Trusted Globally",
        trend: "+12% YoY",
      },
    },
    {
      title: "Scale Applications with Confidence",
      description:
        "Our platforms are engineered for global performance. With distributed deployments, fault tolerance, and workload isolation, expansion has no limits.",
      stats: {
        icon: "🌍",
        value: "15+",
        label: "Cloud Regions",
        status: "Seamless Scaling",
        trend: "99.9% uptime",
      },
    },
    {
      title: "Smarter, Effortless Deployments",
      description:
        "Infrastructure that adapts to your workloads. Intelligent auto-scaling, built-in monitoring, and zero-downtime upgrades minimize manual effort.",
      stats: {
        icon: "⚡",
        value: "0%",
        label: "Downtime",
        status: "Always On",
        trend: "24/7 Monitoring",
      },
    },
    {
      title: "Proven Results That Drive Growth",
      description:
        "We deliver measurable impact—higher ROI, reduced costs, and faster launches. 500+ success stories across 20+ countries stand as proof.",
      stats: {
        icon: "🚀",
        value: "35%",
        label: "ROI Improvement",
        status: "Measured Growth",
        trend: "Global Clients",
      },
    },
  ];

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 150px", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const progressHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="why-hydizo" ref={ref}>
      <div className="container">
        <div className="why-header">
          <h1>Why Hydizo</h1>
          <p>
            We combine deep expertise, innovative solutions, and proven results
            to help businesses scale confidently and achieve long-term success.
          </p>
        </div>

        <div className="timeline">
          {/* Scroll Progress Line */}
          <motion.div
            className="timeline-progress"
            style={{ height: progressHeight }}
          />
          <motion.div
            className="timeline-glow"
            style={{ top: progressHeight }}
          />

          {points.map((point, index) => (
            <motion.div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="timeline-dot" />
              <div className="timeline-content">
                <div className="why-text">
                  <h2>{point.title}</h2>
                  <p>{point.description}</p>
                </div>

                <div className="stat-card glass">
                  <div className="stat-icon">{point.stats.icon}</div>
                  <div className="stat-value">{point.stats.value}</div>
                  <div className="stat-label">{point.stats.label}</div>
                  <div className="stat-extra">
                    <span className="chip">{point.stats.status}</span>
                    <span className="chip secondary">{point.stats.trend}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyHydizo;
