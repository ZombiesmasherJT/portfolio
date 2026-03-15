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
        <p className="certs-empty">
          Add your certifications in <code>public/certs.json</code>
        </p>
      ) : (
        <div className="certs-grid">
          {certs.map((cert) => (
            <article
              className={`cert-card ${cert.status === "in_progress" ? "cert-card--in-progress" : ""}`}
              key={cert.id}
            >
              <div className="cert-image-wrap">
                {cert.image ? (
                  <img
                    src={cert.image}
                    alt=""
                    className="cert-image"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextElementSibling?.classList.add("visible");
                    }}
                  />
                ) : null}
                <span className={`cert-initial ${!cert.image ? "visible" : ""}`}>
                  {cert.issuer?.charAt(0) || "?"}
                </span>
              </div>
              <div className="cert-content">
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>

                {cert.status === "in_progress" && (cert.progress != null || cert.estimatedCompletion) && (
                  <div className="cert-progress-wrap">
                    {cert.progress != null && (
                      <>
                        <div className="cert-progress-bar-wrap">
                          <div
                            className="cert-progress-bar"
                            style={{ width: `${cert.progress}%` }}
                            role="progressbar"
                            aria-valuenow={cert.progress}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <p className="cert-progress-pct">{cert.progress}% complete</p>
                      </>
                    )}
                    {cert.estimatedCompletion && (
                      <p className="cert-estimated">
                        Est. {new Date(cert.estimatedCompletion).toLocaleDateString("en-GB", { month: "short", year: "numeric" })}
                      </p>
                    )}
                  </div>
                )}

                {cert.status !== "in_progress" && (
                  <>
                    {cert.date && (
                      <p className="cert-date">
                        Issued {new Date(cert.date).toLocaleDateString("en-GB", { month: "short", year: "numeric" })}
                        {cert.expires &&
                          ` · Expires ${new Date(cert.expires).toLocaleDateString("en-GB", { month: "short", year: "numeric" })}`}
                      </p>
                    )}
                    {cert.credentialId && (
                      <p className="cert-credential-id">Credential ID {cert.credentialId}</p>
                    )}
                    {cert.skills && cert.skills.length > 0 && (
                      <p className="cert-skills">Skills: {cert.skills.join(", ")}</p>
                    )}
                    {cert.url && (
                      <a href={cert.url} target="_blank" rel="noopener noreferrer" className="cert-link">
                        View certificate →
                      </a>
                    )}
                  </>
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
