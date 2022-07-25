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
            <Link className="navName" to="/">Charles Kanoy</Link>
            <div className='navBar'>
                {pages.map(page => {
                    return (
                        <Link className="navLink" to={`/${page.toLowerCase()}`} key={page}>{page}</Link>
                    );
                })}
            </div>
        </div>
    );
}

export default Header;