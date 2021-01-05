import React from 'react';
import {useHistory} from 'react-router-dom';

import './Opening.scss';

function Opening() {
    const [fade, setFade] = React.useState(0);
    const history = useHistory();

    return (
        <div
            className="opening"
            onClick={() => {
                setFade(1);
            }}
            onAnimationEnd={() => {
                if(fade === 1) history.push('/home');
            }}
            fade={fade}
        >
            <h1 className="glow">Charles Kanoy</h1>
        </div>
    )
}

export default Opening;