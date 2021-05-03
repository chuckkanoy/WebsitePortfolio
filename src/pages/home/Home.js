import React from 'react';
import {Link} from 'react-router-dom';

import './Home.css';

function Home() {
    return (
        <div className="homeContainer">
            <h1>Hello World!</h1>
            <hr />
            <div className="summary">
                As you can probably guess from the title of this site, I am Charles Kanoy, a
                student graduating from NDSU in May 2021. I'm pursuing a position in front-end to full-stack
                web development at the moment, but I'm extremely curious about computers and their 
                capabilities. While web development is what I have the most experience with, I am 
                open to all software development opportunities.
                <br/>
                <br/>
                <Link to="/about" className="learn">Click here to learn more about me!</Link>
            </div>
        </div>
    );
}

export default Home;