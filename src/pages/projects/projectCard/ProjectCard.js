import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';

import './ProjectCard.css'
import {get, GITHUB_BASE} from '../../../API';

function ProjectCard(props) {
    const history = useHistory();
    const [languages, setLanguages] = useState([]);
    const [projectName, setProjectName] = useState('');
    const [thumbnail, setThumbnail] = useState('');
    const {project} = props;
    const created = new Date(project.created_at)
    const updated = new Date(project.updated_at)

    useEffect(() => {
        get(project.languages_url)
        .then(response => {
            console.log(response)
            for (let [key, value] of Object.entries(response)) {
                setLanguages((prevState) => ({
                    ...prevState,
                    [key]: value
                }));
            }
        });
    }, []);

    console.log(project);
    
    var displayLanguages = [];
    for (let [key, value] of Object.entries(languages)) {
        displayLanguages += (<p value={key} />);
    }
    const title = project.name;


    
    // const {dateStarted, dateEnded, description, thumbnail} = project;    
    // let screenshots = [];
    // images.forEach(image => {
    //     screenshots.push(<img src={image} />);
    // });
    // const limit = 20;
    // const abridged = description.length > limit ? 
    //     description.slice(0, limit) + "..." :
    //     description;
    
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
            }
        }>
            <div className="cardDetails">
                <h3>{project.name}</h3>
                <p>{created.toLocaleDateString('en-US')}-
                {updated.toLocaleDateString('en-US')}</p>
                <div className='languages'>
                    {Object.keys(languages).map((language) => {
                        return <p>{language}</p>
                    })}
                </div>
            </div>
            {/* {formattedThumbnail} */}
        </div>
    );
}

export default ProjectCard;