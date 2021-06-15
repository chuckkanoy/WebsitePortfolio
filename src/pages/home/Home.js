import React from 'react';
import {Link} from 'react-router-dom';

import './Home.css';

function Home() {
    return (
        <div className="homeContainer">
            <h1>Hello World!</h1>
            <hr />
            <div className="summary">
                As you can probably guess from the title of this site, I am Charles Kanoy, an alumn of NDSU Spring 2021. 
                I'm currently employed by a contingent of John Deere as an Embedded Systems Engineer. In my spare
                time, I'm either researching new aspects of programming and computers, spending time with those I hold
                dear, cooking, or reading. In my professional free time, I'm sharpening skills game dev skills in Unity and
                Godot.
                <br/>
                <br/>
                <Link to="/about" className="learn">Click here to learn more about me!</Link>
            </div>
        </div>
    );
}

export default Home;