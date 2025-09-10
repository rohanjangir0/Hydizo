import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import "./WhyHydizo.css";

const WhyHydizo = () => {
  const points = [
    {
      title: "Excellence in Every Technology Solution",
      description:
        "Over a decade of delivering enterprise-grade solutions across industries. Our technology is designed to meet today’s needs and scale seamlessly for tomorrow.",
      icon: "📈",
    },
    {
      title: "Scale Applications with Confidence",
      description:
        "Our platforms are engineered for global performance. With distributed deployments, fault tolerance, and workload isolation, expansion has no limits.",
      icon: "🌍",
    },
    {
      title: "Smarter, Effortless Deployments",
      description:
        "Infrastructure that adapts to your workloads. Intelligent auto-scaling, built-in monitoring, and zero-downtime upgrades minimize manual effort.",
      icon: "⚡",
    },
    {
      title: "Proven Results That Drive Growth",
      description:
        "We deliver measurable impact—higher ROI, reduced costs, and faster launches. 500+ success stories across 20+ countries stand as proof.",
      icon: "🚀",
    },
  ];

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 100px", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const progressHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);
  const ballY = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

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

        <div className="timeline-wrapper">
          {/* Timeline line */}
          <div className="timeline-line">
            <motion.div
              className="timeline-progress"
              style={{ height: progressHeight }}
            />
            <motion.div className="timeline-ball" style={{ top: ballY }} />
          </div>

          {/* Cards side by side */}
          <div className="timeline-cards">
            {points.map((point, index) => (
              <motion.div
                key={index}
                className="timeline-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <div className="card-icon">{point.icon}</div>
                <h2>{point.title}</h2>
                <p>{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHydizo;
