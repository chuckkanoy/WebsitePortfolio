import React, {useEffect, useState} from 'react';
import ReactMarkdown from 'react-markdown';

import './Contact.css';

function Contact() {
    const [homeContent, setHomeContent] = useState("");
    
    useEffect(() => {
        fetch("/page_markdowns/contact.md").then(
            (response) => response.text()
        ).then(
            (text) => {
                setHomeContent(text);
            }
        )
    });
    
    return (
        <>
            <ReactMarkdown
            components={{
                code: ({node, ...props}) => <span style={{
                    backgroundColor: 'var(--off-white)',
                    color: 'var(--grey)',
                    padding: '0px',
                    borderRadius: '4px',
                }} {...props} />,
                a: ({node, ...props}) => <a className='md' 
                {...props} >{}</a>
                ,
                blockquote: ({node, ...props}) => <div style={{
                    backgroundColor: 'var(--off-white)',
                    color: 'var(--grey)',
                    padding: '0px',
                    borderRadius: '4px'
                }} {...props} />
            }}
            className="markdown">
                {`${homeContent}`}
            </ReactMarkdown>
        </>
    );
}

export default Contact;