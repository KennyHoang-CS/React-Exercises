import { Link, Redirect } from "react-router-dom";


function Color({ hex, color }) {
    
    if (!hex) {
        return <Redirect to="/colors"/>;
    }
    
    return (
        <div style={{backgroundColor: hex}}>
            <h1>
                Color is: {color}
            </h1>
            <Link exact to="/colors">Go back</Link>
        </div>
    )
}

export default Color;