import React from 'react';
import { NavLink } from 'react-router-dom';

const Navlinks = () => {
    return (
        <nav>
            <NavLink exact to="/cupnoodles">
                Cup Noodles
            </NavLink>
            <NavLink exact to="/coke">
                Coke
            </NavLink>
            <NavLink exact to="/chips">
                Chips
            </NavLink>
        </nav>
    )
}

export default Navlinks;