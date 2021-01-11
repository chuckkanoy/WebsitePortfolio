import React from 'react';

import ProjectCard from './projectCard/ProjectCard';
import './Projects.css'
import * as data from './Projects.json';

function Projects() {
    return (
        <div className="projectsContainer">
            {data.projects.map((individual) => {
                const title = Object.keys(individual)[0];
                return <ProjectCard project={individual} key={title}/>
            })}
        </div>
    );
}

export default Projects;