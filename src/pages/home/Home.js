import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

import './Home.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

function Home() {
    const [homeContent, setHomeContent] = useState("");
    
    useEffect(() => {
        fetch("/page_markdowns/home.md").then(
            (response) => response.text()
        ).then(
            (text) => {
                setHomeContent(text);
            }
        )
    });
    
    return (
        <>
            <Header />
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
                {`${homeContent}`}
            </ReactMarkdown>
            <Footer />
        </>
    );
}

export default Home;