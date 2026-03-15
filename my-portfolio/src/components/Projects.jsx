import { useEffect, useState } from "react";
import { useInView } from "../hooks/useInView";

const STATUS_OPTIONS = [
  { value: "all", label: "All" },
  { value: "Completed", label: "Completed" },
  { value: "In progress", label: "In progress" },
];

const CASE_STUDY_LABELS = {
  problem: "The problem",
  techStackReason: "Why this stack",
  challenges: "Challenges",
  myRole: "My role",
  futureImprovements: "Future improvements",
};

function Projects() {
  const [ref, inView] = useInView();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState("all");
  const [openCaseStudy, setOpenCaseStudy] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch("/portfolio.json")
      .then((res) => res.json())
      .then((data) => setProjects(data.projects || []))
      .catch(() => setProjects([]))
      .finally(() => setLoading(false));
  }, []);

  const filteredProjects = projects.filter(
    (p) => filterStatus === "all" || p.status === filterStatus
  );

  const imageSrc = (src) => {
    if (!src) return "";
    return src.replace(/^public\//, "/");
  };

  return (
    <section
      ref={ref}
      className={`projectContainer section section-animate ${inView ? "in-view" : ""}`}
      id="projects"
    >
      <h2 className="section-title">Projects</h2>
      <p className="section-subtitle">3–5 polished projects — live demos, clean code, and case studies</p>

      <div className="filter filter-pills">
        {STATUS_OPTIONS.map((opt) => (
          <button
            key={opt.value}
            type="button"
            className={`filter-pill ${filterStatus === opt.value ? "active" : ""}`}
            onClick={() => setFilterStatus(opt.value)}
          >
            {opt.label}
          </button>
        ))}
      </div>

      {loading ? (
        <p className="projects-loading">Loading projects…</p>
      ) : filteredProjects.length === 0 ? (
        <p className="projects-empty">No projects in this filter yet.</p>
      ) : (
        <div className="projectsGrid animate-stagger">
          {filteredProjects.map((project) => (
            <article className="projectCard" key={project.title}>
              {project.featured && (
                <span className="projectFeaturedBadge" aria-hidden="true">Featured</span>
              )}
              <div className="projectImageWrap">
                {imageSrc(project.image) ? (
                  <img
                    src={imageSrc(project.image)}
                    alt=""
                    className="projectImage"
                    loading="lazy"
                  />
                ) : (
                  <div className="projectImagePlaceholder">
                    <span>{project.title?.charAt(0) || "?"}</span>
                  </div>
                )}
              </div>
              <div className="projectContent">
                <span className="projectDate">
                  {project.date
                    ? new Date(project.date).toLocaleDateString("en-GB", {
                        month: "short",
                        year: "numeric",
                      })
                    : ""}
                </span>
                <h3>{project.title}</h3>
                {project.impact && (
                  <p className="projectImpact" aria-hidden="true">{project.impact}</p>
                )}
                <p>{project.description}</p>
                {project.tools && project.tools.length > 0 && (
                  <div className="projectTools">
                    {project.tools.slice(0, 4).map((t) => (
                      <span key={t} className="projectTool">{t}</span>
                    ))}
                  </div>
                )}
                {project.caseStudy && typeof project.caseStudy === "object" && (
                  <div className="projectCaseStudyWrap">
                    <button
                      type="button"
                      className="projectCaseStudyToggle"
                      onClick={() => setOpenCaseStudy(openCaseStudy === project.title ? null : project.title)}
                      aria-expanded={openCaseStudy === project.title}
                    >
                      {openCaseStudy === project.title ? "Hide case study" : "View case study"}
                    </button>
                    {openCaseStudy === project.title && (
                      <div className="projectCaseStudy">
                        {Object.entries(project.caseStudy).map(([key, value]) => (
                          <div key={key} className="projectCaseStudyItem">
                            <strong>{CASE_STUDY_LABELS[key] || key}</strong>
                            <p>{value}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
                {project.caseStudy && typeof project.caseStudy === "string" && (
                  <a
                    href={project.caseStudy}
                    target="_blank"
                    rel="noreferrer"
                    className="projectLink projectLinkSecondary"
                  >
                    Read case study
                  </a>
                )}
                <div className="projectLinks">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="projectLink projectLinkPrimary"
                    >
                      Live demo
                    </a>
                  )}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="projectLink projectLinkSecondary"
                  >
                    View code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default Projects;
