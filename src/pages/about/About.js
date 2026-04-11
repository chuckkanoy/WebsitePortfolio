import {useState, useEffect} from 'react';

import './About.css';

function About() {
    const [aboutContent, setAboutContent] = useState("");
    
    useEffect(() => {
        fetch("/page_markdowns/about.html").then(
            (response) => response.text()
        ).then(
            (text) => {
                setAboutContent(text);
            }
        )
    });

    return (
        <div className = "markdown" dangerouslySetInnerHTML= {
            {__html: `${aboutContent}`}
        } />
    );
}

export default About;