import { Link } from "react-router-dom";

function ColorsList({ colors }) {
    const colorLinks = Object.keys(colors).map(
        colorName => (
            <li>
                <Link to={`/colors/${colorName}`}>{colorName}</Link>
            </li>
    ))

    return (
        <div>
            <p>Please select a color.</p>
            <ul>{colorLinks}</ul>
        </div>
    )
}

export default ColorsList; 