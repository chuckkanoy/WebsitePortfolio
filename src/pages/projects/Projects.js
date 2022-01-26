import React, {useState, useEffect} from 'react';

import ProjectCard from './projectCard/ProjectCard';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
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
            <Header />
            <div className="projectsContainer">
                {projects.map((individual) => {
                    return <ProjectCard project={individual} key={individual.id}/>
                })}
            </div>
            <Footer />
        </>
    );
}

export default Projects;