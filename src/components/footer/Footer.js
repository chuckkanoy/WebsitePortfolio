import React from 'react';
import {MDBIcon, MDBContainer, MDBBtn} from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';

import './Footer.css';
import {GITHUB, LINKEDIN} from '../Constants.js';

function Footer() {
    return (
        <MDBContainer className="footerContainer">
            <a href={LINKEDIN}>
                <MDBIcon fab icon="linkedin-in" className="navLink" size="2x"/>
            </a>
            <a href={GITHUB}>
                <MDBIcon fab icon="github" className="navLink" size="2x"/>
            </a>
        </MDBContainer>
    );
}

export default Footer;