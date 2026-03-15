import React, { useState } from "react";
import "../About.css";

function About() {
  const [photoLoaded, setPhotoLoaded] = useState(true);
  return (
    <section className="about section" id="about">
      <div className={`about-container ${!photoLoaded ? "no-photo" : ""}`}>
        <div className="about-text">
          <h2 className="about-title">Hi, I'm Josh</h2>
          <p className="about-description">
            I'm a recent graduate with a passion for building web applications and learning new technologies. I have experience in full-stack development, including front-end frameworks like React and back-end technologies like Node.js. I love solving problems and creating efficient, user-friendly solutions.
          </p>
          <p className="about-description">
            In my free time, I enjoy exploring new programming languages, contributing to open-source projects, and staying up-to-date with the latest trends in web development. I believe in continuous learning and strive to improve my skills every day.
          </p>
          <a href="/Joshua Tite CV - Copy.docx" download className="cv-link">
            <span className="cv-button">Download CV</span>
          </a>
        </div>
        {photoLoaded && (
          <div className="about-visual">
            <div className="about-img-wrap">
              <img
                src="/me.png"
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
