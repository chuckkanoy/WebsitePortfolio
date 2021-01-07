import React from 'react';
import {Link} from 'react-router-dom';

import './Header.scss';

const pages = [
    "Home",
    "Projects", 
    // "Blog", 
    "About", 
    "Resume", 
    // "Contact"
];

function Header() {
    return (
        <div className="navContainer">
            <Link className="navName" to="/"><h1>Charles Kanoy</h1></Link>
            {pages.map(page => {
                return (
                    <Link className="navLink" to={`/${page.toLowerCase()}`} key={page}>{page}</Link>
                );
            })}
        </div>
    );
}

export default Header;