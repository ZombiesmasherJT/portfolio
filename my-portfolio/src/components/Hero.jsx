import React from "react";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-inner">
        <p className="hero-label">Developer · Builder</p>
        <h1 className="hero-title">
          <span className="hero-title-line">Joshua</span>
          <span className="hero-title-line hero-title-accent">Tite</span>
        </h1>
        <p className="hero-tagline">
          Solving your software solutions — full-stack focus, user-first results.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">
            View work
          </a>
          <a href="#contact" className="btn btn-secondary">
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
