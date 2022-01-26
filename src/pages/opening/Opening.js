import React from 'react';
import {useHistory} from 'react-router-dom';

import './Opening.scss';

function Opening() {
    const history = useHistory();

    return (
        <div
            className="opening"
            onClick={() => {
                history.push('/home');
            }}
        >
            <h1 className="glow">Charles Kanoy</h1>
        </div>
    )
}

export default Opening;