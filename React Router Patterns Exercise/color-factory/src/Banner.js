import { NavLink } from "react-router-dom";

function Banner() {
    return (
        <div className="Banner">
            <h1>Welcome to the color factory.</h1>
            <NavLink to="/colors/new">Add a color.</NavLink>
        </div>
    )
}

export default Banner;