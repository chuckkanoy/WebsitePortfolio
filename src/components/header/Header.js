import React from 'react';
import {Link} from 'react-router-dom';

import './Header.scss';

const pages = [
    "Home",
    "Projects", 
    "Resume", 
    "Blog", 
    "About", 
    "Contact"
];

function Header() {
    return (
        <div className="navContainer">
            <h1><Link className="navName" to="/">Charles Kanoy</Link></h1>
            {pages.map(page => {
                return (
                    <Link className="navLink" to={`/${page.toLowerCase()}`} key={page}>{page}</Link>
                );
            })}
        </div>
    );
}

export default Header;