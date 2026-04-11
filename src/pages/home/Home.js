import { useEffect, useState } from 'react';

import './Home.css';

function Home() {
    const [homeContent, setHomeContent] = useState("");
    
    useEffect(() => {
        fetch("/page_markdowns/home.html").then(
            (response) => response.text()
        ).then(
            (text) => {
                setHomeContent(text);
            }
        )
    });
    
    return (
        <div className = "markdown" dangerouslySetInnerHTML= {
            {__html: `${homeContent}`}
        } />
    );
}

export default Home;