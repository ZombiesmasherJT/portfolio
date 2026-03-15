import { useEffect, useState } from "react";
import { useInView } from "../hooks/useInView";

const STATUS_OPTIONS = [
  { value: "all", label: "All" },
  { value: "Completed", label: "Completed" },
  { value: "In progress", label: "In progress" },
];

function Projects() {
  const [ref, inView] = useInView();
  const [projects, setProjects] = useState([]);
  const [filterStatus, setFilterStatus] = useState("all");

  useEffect(() => {
    fetch("/portfolio.json")
      .then((res) => res.json())
      .then((data) => setProjects(data.projects || []))
      .catch(() => setProjects([]));
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
      <p className="section-subtitle">Things I've been building</p>

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

      {filteredProjects.length === 0 ? (
        <p className="projects-empty">No projects in this filter yet.</p>
      ) : (
        <div className="projectsGrid animate-stagger">
          {filteredProjects.map((project) => (
            <article className="projectCard" key={project.title}>
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
                <p>{project.description}</p>
                {project.tools && project.tools.length > 0 && (
                  <div className="projectTools">
                    {project.tools.slice(0, 4).map((t) => (
                      <span key={t} className="projectTool">{t}</span>
                    ))}
                  </div>
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
