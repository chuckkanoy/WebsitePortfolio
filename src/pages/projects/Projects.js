import React, {useState, useEffect} from 'react';

import ProjectCard from './projectCard/ProjectCard';
import './Projects.css'
import {get, GITHUB_PROJECTS} from '../../API'

function Projects() {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        get(`${GITHUB_PROJECTS}/repos?sort=updated`)
        .then(response => setProjects(response));
    }, []);

    return (
        <>
            <div className="projectsContainer">
                {projects.map((individual, index) => {
                    var element = ""

                    if(index % 3 === 0)
                        element = <ProjectCard project={individual} key={individual.id} 
                            backgroundColor="#7494EA"/>
                    else if(index % 3 === 1)
                        element = <ProjectCard project={individual} key={individual.id} 
                            backgroundColor="#49BEAA"/>
                    else
                        element = <ProjectCard project={individual} key={individual.id} 
                            backgroundColor="#EE6C4D"/>
                    return element
                })}
            </div>
        </>
    );
}

export default Projects;