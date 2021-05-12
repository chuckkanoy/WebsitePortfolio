import React from 'react';
import {useHistory} from 'react-router-dom';

import './ProjectCard.css'

function ProjectCard(props) {
    const history = useHistory();

    const {project} = props;
    const title = Object.keys(project)[0];
    const {dateStarted, dateEnded, description, thumbnail} = project[title];    
    // let screenshots = [];
    // images.forEach(image => {
    //     screenshots.push(<img src={image} />);
    // });
    const limit = 20;
    const abridged = description.length > limit ? 
        description.slice(0, limit) + "..." :
        description;
    
    const formattedThumbnail = window.innerWidth < 1000 ? 
            <div className="thumbnailContainer">
                <img src={thumbnail} className="thumbnailMobile" alt="Thumbnail"/>
            </div> :
            <div className="thumbnailContainer">
                <img src={thumbnail} className="thumbnail" alt="Thumbnail"/>
            </div>

    return (
        <div 
            className="cardContainer" 
            onClick={() => {
                history.push(`/projects/${title}`);
            }
        }>
            <div className="cardDetails">
                <h3>{title}</h3>
                <p>{dateStarted}-{dateEnded}</p>
                <p>{abridged}</p>
            </div>
            {formattedThumbnail}
        </div>
    );
}

export default ProjectCard;