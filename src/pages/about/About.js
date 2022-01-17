import React, {useState, useEffect} from 'react';
import ReactMarkdown from 'react-markdown';

import './About.css';

function About() {
    const [aboutContent, setAboutContent] = useState("");
    
    useEffect(() => {
        fetch("/page_markdowns/about.md").then(
            (response) => response.text()
        ).then(
            (text) => {
                setAboutContent(text);
            }
        )
    });

    return (
        <ReactMarkdown
        components={{
            code: ({node, ...props}) => <span style={{
                backgroundColor: 'white',
                color: '#ee82ee',
                padding: '0px',
                borderRadius: '4px',
            }} {...props} />,
            a: ({node, ...props}) => <a className='md' 
            {...props} >{}</a>
            ,
            blockquote: ({node, ...props}) => <div style={{
                backgroundColor: 'white',
                color: '#ee82ee',
                padding: '0px',
                borderRadius: '4px'
            }} {...props} />
        }}
        className="markdown">
            {`${aboutContent}`}
        </ReactMarkdown>
    );
}

export default About;