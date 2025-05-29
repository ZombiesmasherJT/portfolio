import { useEffect, useState } from "react";

function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("/portfolio.json")
            .then((response) => response.json())
            .then((data) => setProjects(data.projects))
            .catch((error) => console.error("Error fetching projects:", error));

    }, []);

    return (
        <section className="projectContainer">
            <h2 className="headerText">Latest Projects</h2>
            {projects.map((project, index) => (
                <div className="projectItem" key={index}>
                    <div>
                        <span className="darkerText">{new Date(project.date).toDateString()}</span>
                        <h2>{project.title}</h2>
                        <p className="darkerText">{project.description}</p>
                        <a href={project.link} target="_blank" rel="noreferrer" className="outreach">
                            View Code
                        </a>
                    </div>
                    <div>
                        <img src={project.image} alt={project.title} />
                    </div>
                </div>
            ))}
        </section>
    );
}


export default Projects;
