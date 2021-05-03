import React from 'react';
// import useHistory from 'react-router-dom';

import './ProjectDetail.css'
import * as data from '../Projects.json';

function ProjectDetail(props) {
    const {title} = props.match.params;
    let permProject = {};
    data.projects.forEach(project => {
        const tempTitle = Object.keys(project)[0];
        if(tempTitle === title) {
            permProject = project;
            return;
        }
    });
    const {dateStarted, dateEnded, description, thumbnail, learned, screenshots, github} = permProject[title] ? 
        permProject[title] :
        {
            dateStarted: null, 
            dateEnded: null, 
            description: null, 
            thumbnail: null,
            learned: null,
            screenshots: null,
            github: null,
        };
    return (
        permProject[title] ? (
            <div className="detailContainer">
                <div className="detailHeader">
                    <a href={github}><h1 className="github">{title}</h1></a>
                    <img src={"../" + thumbnail} className="thumbnail" alt="Thumbnail"/>
                </div>
                <p>{dateStarted}-{dateEnded}</p>
                <p>{description}</p>
                <p>Learned: {learned}</p>
            </div>
        ) : (
            <h1>Project not found...</h1>
        )
    );
}

export default ProjectDetail;