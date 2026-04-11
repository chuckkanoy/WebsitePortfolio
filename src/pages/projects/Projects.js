import {useState, useEffect} from 'react';

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
        <div className="projectsContainer">
            {projects.map((individual, index) => {
                var backgroundColor = ""

                if(index % 3 === 0)
                    backgroundColor="var(--sky-blue)"
                else if(index % 3 === 1)
                    backgroundColor="var(--cyan)"
                else
                    backgroundColor="var(--orange)"

                return <ProjectCard project={individual} key={individual.id}
                        backgroundColor={backgroundColor}/>
            })}
        </div>
    );
}

export default Projects;