import React from 'react';
import { Link } from 'react-router-dom';


function DogList({ dogs }) {
    return (
        <div>
            {dogs.map(dog => (
                <div>
                    <img src={dog.src} alt={dog.name}></img>
                    <h2>
                        <Link to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</Link>
                    </h2>
                </div>
            ))}
        </div>
    )
}

export default DogList;
