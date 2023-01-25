import React from 'react';
import {useNavigate} from 'react-router-dom';

import './Opening.css';

function Opening() {
    const history = useNavigate();

    return (
        <div
            className="opening"
            onClick={() => {
                history('/home');
            }}
        >
            <h1 className="glow">Charles Kanoy</h1>
        </div>
    )
}

export default Opening;