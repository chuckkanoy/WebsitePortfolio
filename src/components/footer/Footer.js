import React from 'react';
import {MDBIcon, MDBContainer} from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';

import './Footer.css';
import {GITHUB, LINKEDIN} from '../Constants.js';

function Footer() {
    return (
        <div className='footerContainer'>
            <MDBContainer className="footer">
                <a href={LINKEDIN}>
                    <MDBIcon fab icon="linkedin-in" className="navLink" size="1x"/>
                </a>
                <a href={GITHUB}>
                    <MDBIcon fab icon="github" className="navLink" size="1x"/>
                </a>
            </MDBContainer>
        </div>
    );
}

export default Footer;