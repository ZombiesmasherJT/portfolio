import React, { useState, useEffect } from "react";

function Hero() {
  const [metrics, setMetrics] = useState({ projects: 0, certs: 0 });

  useEffect(() => {
    Promise.all([
      fetch("/portfolio.json").then((r) => r.json()).then((d) => d.projects?.length ?? 0),
      fetch("/certs.json").then((r) => r.json()).then((d) => d.certs?.length ?? 0),
    ]).then(([projects, certs]) => setMetrics({ projects, certs }));
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-blob hero-blob-1" aria-hidden="true" />
      <div className="hero-blob hero-blob-2" aria-hidden="true" />
      <div className="hero-blob hero-blob-3" aria-hidden="true" />
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
          <a href="#projects" className="btn btn-primary btn-glow">
            View work
          </a>
          <a href="#contact" className="btn btn-secondary btn-glow">
            Get in touch
          </a>
        </div>
        <div className="hero-metrics">
          <span>{metrics.projects || "—"} Projects</span>
          <span className="hero-metrics-dot">·</span>
          <span>{metrics.certs || "—"} Certifications</span>
          <span className="hero-metrics-dot">·</span>
          <span>Available for work</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
