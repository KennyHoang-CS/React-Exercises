import React, { useState } from 'react';
import { v4 as uuid  } from 'uuid';
import NewBoxForm from './NewBoxForm';
import Box from './Box';

const BoxList = () => {
    
    const INITIAL_STATE = [];
    const [boxes, setBoxes] = useState(INITIAL_STATE);
    const addBox = (newBox) => {
        setBoxes(boxes => [...boxes, {...newBox, id: uuid() }])
    }
    
    const deleteBox = (boxID) => {
        setBoxes(boxes.filter(b => b.id !== boxID))
    }
    return (
        <div>
            <h3>Box List</h3>
            <NewBoxForm addBox={addBox} />
            <div>
            {boxes.map(({ id, color, height, width }) => <Box key={id} id={id} color={color} height={height} width={width} deleteBox={deleteBox} />)}
            </div>
        </div>
    )
}

export default BoxList;