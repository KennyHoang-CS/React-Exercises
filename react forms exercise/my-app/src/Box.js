import React from 'react';

const Box = ({ id, color, width, height, deleteBox }) => {
    return (
        <div>
            <div className="Box"
                id={id}
                style={{
                    backgroundColor: color,
                    width: parseInt(width) || 100,
                    height: parseInt(height) || 100
            }}
            >  
            <button onClick={() => deleteBox(id)} data-testid="delete-box">X</button>
            </div>
        </div>
    )
}

export default Box;