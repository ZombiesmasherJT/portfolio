import { useEffect, useState } from "react";


function Projects() {
    const [projects, setProjects] = useState([]);
    const [filterStatus, setFilterStatus] = useState("all");

    useEffect(() => {
        fetch("/portfolio.json")
            .then((response) => response.json())
            .then((data) => setProjects(data.projects))
            .catch((error) => console.error("Error fetching projects:", error));

    }, []);

    const filteredProjects = projects.filter((project) => {
        return filterStatus === "all" || project.status === filterStatus;
    });



    return (
        <section className="projectContainer">
            <div className="filter">
                <label>filter by status</label>

                <select onChange={(e) => setFilterStatus(e.target.value)}>
                    <option value="all">All</option>
                    <option value="Completed">Completed</option>
                    <option value="In progress">In Progress</option>

                </select>
            </div>

            <div className="projectsGrid">
                {filteredProjects.map((project, index) => (
                    <div className="projectCard" key={index}>
                        <img src={project.image} alt={project.title} className="projectImage" />
                        <div className="projectContent">
                            <span className="projectDate">{new Date(project.date).toDateString()}</span>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <a href={project.link} target="_blank" rel="noreferrer" className="outreach">
                                View Code
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>

    );
}

export default Projects;