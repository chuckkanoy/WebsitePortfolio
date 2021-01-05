import React from 'react';
import {useHistory} from 'react-router-dom';

import './ProjectDetail.css'
import * as data from './../Projects.json';

function ProjectDetail(props) {
    const history = useHistory();

    const {title} = props.match.params;
    let permProject = {};
    data.projects.forEach(project => {
        const tempTitle = Object.keys(project)[0];
        console.log(tempTitle + ":" + title);
        if(tempTitle === title) {
            permProject = project;
            return;
        }
    });
    const {dateStarted, dateEnded, description, thumbnail} = permProject[title];
    // const {projects} = props.projects;
    // let project = {};
    // projects.forEach(individual => {
    //     if(individual.title === projectName) {
    //         project = individual;
    //         return;
    //     }
    // });    
    // const {title, dateStarted, dateEnded, thumbnail} = project;
    // let screenshots = [];
    // images.forEach(image => {
    //     screenshots.push(<img src={image} />);
    // });

    return (
        // project ? (
            <div className="detailContainer">
                <div className="detailHeader">
                    <h1>{title}</h1>
                    <img src={thumbnail} className="thumbnail"/>
                </div>
                <p>{dateStarted}-{dateEnded}</p>
                <p>{description}</p>
            </div>
        // ) : (
        //     <h1>Project not found...</h1>
        // )
    );
}

export default ProjectDetail;