import React from 'react';

import ProjectCard from './projectCard/ProjectCard';
import './Projects.css'
import * as data from './Projects.json';

function Projects() {
    return (
        <div className="projectsContainer">
            {data.projects.map((individual) => {
                return <ProjectCard project={individual}/>
            })}
        </div>
    );
}

export default Projects;