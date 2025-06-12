import React from 'react';
import {
    DiHtml5,
    DiCss3,
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiPython,
    DiGit
} from "react-icons/di";

const skills = [
    { name: "HTML", level: "Intermediate", icon: DiHtml5 },
    { name: "CSS", level: "Intermediate", icon: DiCss3 },
    { name: "JavaScript", level: "Intermediate", icon: DiJavascript1 },
    { name: "React", level: "Intermediate", icon: DiReact },
    { name: "Node.js", level: "Intermediate", icon: DiNodejs },
    { name: "Git", level: "Intermediate", icon: DiGit },
    { name: "Python", level: "Intermediate", icon: DiPython }
];

function Skills() {
    return (
        <section className="skills-section">
            <h2 className="skills-title">Skills</h2>
            <div className="skills-container">
                {skills.map((skill, index) => {
                    const IconComponent = skill.icon;
                    return (
                        <div className="skill-card" key={index}>
                            <div className="skill-icon"><IconComponent size={40} /></div>
                            <h3 className="skill-name">{skill.name}</h3>
                            <p className="skill-level">{skill.level}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Skills;
