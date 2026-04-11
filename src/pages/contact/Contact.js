import {useEffect, useState} from 'react';

import './Contact.css';

function Contact() {
    const [contactContent, setContactContent] = useState("");
    
    useEffect(() => {
        fetch("/page_markdowns/contact.html").then(
            (response) => response.text()
        ).then(
            (text) => {
                setContactContent(text);
            }
        )
    });
    
    return (
        <div className = "markdown" dangerouslySetInnerHTML= {
            {__html: `${contactContent}`}
        } />
    );
}

export default Contact;