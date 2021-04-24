import React from 'react';
import { NavLink } from 'react-router-dom';

function CupNoodle() {
    return (
        <div>
            <h1>Here is your cup noodle!</h1>
            <NavLink exact to="/">Home</NavLink>
        </div>
    )
}

export default CupNoodle; 