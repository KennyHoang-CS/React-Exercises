import React from 'react';
import { NavLink } from 'react-router-dom';

function Coke() {
    return (
        <div>
            <h1>Here is your coke!</h1>
            <NavLink exact to="/">Home</NavLink>
        </div>
    )
}

export default Coke; 