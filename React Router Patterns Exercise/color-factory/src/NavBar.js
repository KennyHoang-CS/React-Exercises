import { NavLink } from "react-router-dom";
import './NavBar.css';

function NavBar({ colors }) {
    const links = colors.map(c => (
        <NavLink exact to={`/colors/${c.color}`}>{c.color}</NavLink>
    ))

    return (
        <div className="Nav-Bar">
            {links}
        </div>
    )
}

export default NavBar;