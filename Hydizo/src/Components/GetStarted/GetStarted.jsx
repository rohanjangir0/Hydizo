import React from "react";
import "./GetStarted.css";

function GetStarted() {
  return (
    <section className="getstarted-section">
      <div className="getstarted-content">
        <h2>
          Ready to get started? <br /> 
          <span className="highlight">Schedule your demo with Hydizo</span>
        </h2>
        <p>
          Experience Hydizo’s platform first-hand. No long forms, no hassle —
          just an easy way to explore how we can transform your business.
        </p>
        <button className="getstarted-btn">Get Schedule</button>
      </div>

      <div className="getstarted-image">
        <img src="/Schedule.png" alt="schedile.png" />
      </div>
    </section>
  );
}

export default GetStarted;
