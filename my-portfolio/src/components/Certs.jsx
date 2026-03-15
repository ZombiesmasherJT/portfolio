import { useEffect, useState } from "react";
import { useInView } from "../hooks/useInView";
import "./Certs.css";

function Certs() {
  const [ref, inView] = useInView({ rootMargin: "0px 0px -80px 0px" });
  const [certs, setCerts] = useState([]);

  useEffect(() => {
    fetch("/certs.json")
      .then((res) => res.json())
      .then((data) => setCerts(data.certs || []))
      .catch(() => setCerts([]));
  }, []);

  return (
    <section
      ref={ref}
      className={`certs-section section section-animate ${inView ? "in-view" : ""}`}
      id="certs"
    >
      <h2 className="section-title">Certifications</h2>
      <p className="section-subtitle">Courses and credentials</p>
      {certs.length === 0 ? (
        <p className="certs-empty">Add your certifications in <code>public/certs.json</code></p>
      ) : (
      <div className="certs-grid animate-stagger">
        {certs.map((cert) => (
          <article className="cert-card" key={cert.id}>
            <div className="cert-image-wrap">
              {cert.image ? (
                <img src={cert.image} alt="" className="cert-image" />
              ) : (
                <span className="cert-initial">{cert.issuer?.charAt(0) || "?"}</span>
              )}
            </div>
            <div className="cert-content">
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-issuer">{cert.issuer}</p>
              <p className="cert-date">
                {cert.date
                  ? `Issued ${new Date(cert.date).toLocaleDateString("en-GB", { month: "short", year: "numeric" })}`
                  : ""}
                {cert.expires &&
                  ` · Expires ${new Date(cert.expires).toLocaleDateString("en-GB", { month: "short", year: "numeric" })}`}
              </p>
              {cert.credentialId && (
                <p className="cert-credential-id">Credential ID {cert.credentialId}</p>
              )}
              {cert.skills && cert.skills.length > 0 && (
                <p className="cert-skills">Skills: {cert.skills.join(", ")}</p>
              )}
              {cert.url && (
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noreferrer"
                  className="cert-link"
                >
                  Show credential →
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
      )}
    </section>
  );
}

export default Certs;
