import React from 'react';
import { Link, Redirect } from 'react-router-dom';

function DogDetails({ dog }) {
    
    // If dog doesn't exist, redirect back to home page. 
    if (!dog) return <Redirect to="/dogs" />

    // Return the current dog's info.
    return (
        <div>
            <img src={dog.src} alt={dog.name}></img>
            <h2>{dog.name}</h2>
            <ul>
                {dog.facts.map(
                    fact => (
                        <li>{fact}</li>
                    )
                )}
            </ul>
            <Link exact to="/dogs">Go Back to Home</Link>
        </div>
    )

}

export default DogDetails;