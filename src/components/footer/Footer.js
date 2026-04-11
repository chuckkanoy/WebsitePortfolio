import {MDBIcon} from 'mdb-react-ui-kit';

import './Footer.css';
import {GITHUB, LINKEDIN} from '../Constants.js';

function Footer() {
    return (
        <div className='footerContainer'>
            <a href={LINKEDIN} className="navLink" >
                <MDBIcon fab icon="linkedin-in" size="lg"/>
            </a>
            <a href={GITHUB}className="navLink" >
                <MDBIcon fab icon="github" size="lg"/>
            </a>
        </div>
    );
}

export default Footer;