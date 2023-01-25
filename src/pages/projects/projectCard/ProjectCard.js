import React, {useState, useEffect} from 'react';

import './ProjectCard.css'
import {get} from '../../../API';

function ProjectCard(props) {
    const [languages, setLanguages] = useState([]);
    const {project} = props;
    const created = new Date(project.created_at)
    const updated = new Date(project.updated_at)

    useEffect(() => {
        get(project?.languages_url)
        .then(response => {
            for (let [key, value] of Object.entries(response)) {
                setLanguages((prevState) => ({
                    ...prevState,
                    [key]: value
                }));
            }
        });
    }, [project]);
    
    // const formattedThumbnail = window.innerWidth < 1000 ? 
    //         <div className="thumbnailContainer">
    //             <img src={thumbnail} className="thumbnailMobile" alt="Thumbnail"/>
    //         </div> :
    //         <div className="thumbnailContainer">
    //             <img src={thumbnail} className="thumbnail" alt="Thumbnail"/>
    //         </div>

    return (
        <div 
            className="cardContainer" 
            onClick={() => {
                window.location.href = project.html_url;
            }}
            key={project.id}
            style={{backgroundColor: props.backgroundColor}}
        >
            <h3>{project.name}</h3>
            <p>{created.toLocaleDateString('en-US')}-
            {updated.toLocaleDateString('en-US')}</p>
            <div className='languages'>
                {Object.keys(languages).map((language) => {
                    return <p key={`${project.name}.${language}`}>{language}</p>
                })}
            </div>
        </div>
    );
}

export default ProjectCard;