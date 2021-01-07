import React, { useState } from 'react';

import './Dropdown.css';

function Dropdown(props) {
    const [dropped, setDropped] = useState(false);

    const {title, content} = props;
    const dropdown = dropped ?
        <div className="dropdown">
            {content}
        </div> :
        "";
        
    return (
        <div className="dropdownContainer">
            <div className="dropdownClicker" onClick={() => setDropped(!dropped)}>
                {title}
            </div>
            {dropdown}
        </div>
    );
}

export default Dropdown;