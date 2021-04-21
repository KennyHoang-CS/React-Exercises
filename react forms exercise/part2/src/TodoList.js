import React, { useState } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const addTask = (newTask) => {
        setTasks([...tasks, {...newTask }]);
    }
    const deleteTask = (taskName) => {
        setTasks(tasks.filter(task => task.task != taskName));
    }
    return (
        <div>
            <h3>Todo List</h3>
            <NewTodoForm addTask={ addTask }/>
            {tasks.map(({ task }) => <Todo key={task} task={task} deleteTask={deleteTask} />)}
        </div>
    )
}

export default TodoList;