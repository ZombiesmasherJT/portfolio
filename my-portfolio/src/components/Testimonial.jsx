import React from "react";
import { useInView } from "../hooks/useInView";
import "./Testimonial.css";

const PLACEHOLDER = {
  quote: "Josh delivered on time and was great to work with. He asks the right questions and writes clean, maintainable code.",
  author: "— Client or teammate name",
  role: "Role / Company (optional)",
};

function Testimonial() {
  const [ref, inView] = useInView();

  return (
    <section
      ref={ref}
      className={`testimonial-section section section-animate ${inView ? "in-view" : ""}`}
      id="testimonial"
    >
      <h2 className="section-title">Kind words</h2>
      <blockquote className="testimonial-card">
        <p className="testimonial-quote">"{PLACEHOLDER.quote}"</p>
        <footer className="testimonial-footer">
          <cite className="testimonial-author">{PLACEHOLDER.author}</cite>
          {PLACEHOLDER.role && (
            <span className="testimonial-role">{PLACEHOLDER.role}</span>
          )}
        </footer>
      </blockquote>
    </section>
  );
}

export default Testimonial;
