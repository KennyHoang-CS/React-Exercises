import React from 'react';

const Todo = ({ task, deleteTask }) => {
    return (
        <div>
            { task }
            <button onClick={() => deleteTask(task)}>X</button>
        </div>
    )
}

export default Todo;