import React from 'react';

import {MAIL_TO, EMAIL} from '../../components/Constants';
import './Contact.css';

function Contact() {
    return (
        <div>
            <h1>Looking to get ahold of me?</h1>
            <hr/>
            <div className="about">
                Email me at <a className="email" href={MAIL_TO}>{EMAIL}</a>
            </div>
        </div>
    );
}

export default Contact;