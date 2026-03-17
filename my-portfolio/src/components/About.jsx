import React, { useState } from "react";
import { useInView } from "../hooks/useInView";
import "../About.css";

function About() {
  const [photoLoaded, setPhotoLoaded] = useState(true);
  const [ref, inView] = useInView();
  return (
    <section ref={ref} className={`about section section-animate ${inView ? "in-view" : ""}`} id="about">
      <div className={`about-container ${!photoLoaded ? "no-photo" : ""}`}>
        <div className="about-text">
          <h2 className="about-title">Hi, I'm Josh</h2>
          <p className="about-career-focus">Career focus: full-stack products that scale and solve real problems.</p>
          <p className="about-description">
            I'm a full-stack engineer who ships. I built and deployed an AI phone assistant in production at Vetra — Twilio, Gemini, Node.js — and full-stack apps with React, Node, and MySQL. I care about clean architecture, performance, and iterating from real user feedback.
          </p>
          <p className="about-what-i-do">What I do:</p>
          <ul className="about-bullets">
            <li>React &amp; modern front-end — component architecture, state, accessibility</li>
            <li>Node.js, Express &amp; APIs — design, security, and scale</li>
            <li>Databases (MySQL) &amp; maintainable, testable code</li>
          </ul>
          <p className="about-description">
            I keep sharp with side projects, open-source, and staying current with the stack. Repos have clear READMEs and iterative commit history so you can see how I work. Always learning; always shipping.
          </p>
          <a href="/Joshua Tite CV - Copy.docx" download className="cv-link">
            <span className="cv-button">Download CV</span>
          </a>
        </div>
        {photoLoaded && (
          <div className="about-visual">
            <div className="about-img-wrap">
              <img
                src="/mee.png"
                alt="Joshua Tite"
                className="about-img"
                onError={() => setPhotoLoaded(false)}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default About;
