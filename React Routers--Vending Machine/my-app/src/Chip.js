import React from 'react';
import { NavLink } from 'react-router-dom';

function Chip() {
    return (
        <div>
            <h1>Here is your chip!</h1>
            <NavLink exact to="/">Home</NavLink>
        </div>
    )
}

export default Chip; 