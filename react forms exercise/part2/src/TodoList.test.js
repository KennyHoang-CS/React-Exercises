import { render, fireEvent, waitFor } from '@testing-library/react';
import TodoList from './TodoList';

function addTask(taskList, task='myRandomTask') {
    const taskInput = taskList.getByLabelText('New Task');
    fireEvent.change(taskInput, { target: { value: task } });
    const addButton = taskList.getByText('Add new task!');
    fireEvent.click(addButton);
}

it('TodoList should render', () => {
    render(<TodoList/>);
});

it('TodoList matches snapshot', () => {
    const { asFragment } = render(<TodoList/>);
    expect(asFragment()).toMatchSnapshot();
});

it('works: adds a new task', () => {
    const taskList = render(<TodoList/>);
    addTask(taskList);  // adding 'myRandomTask' to the TodoList. 

    // our task listed as 'myRandomTask' should be on the document. 
    expect(taskList.getByText('myRandomTask')).toBeInTheDocument();
});

it('works: removes a task', () => {
    const taskList = render(<TodoList/>);
    addTask(taskList);  // adding 'myRandomTask' to the TodoList. 

    const delButton = taskList.getByText('X');
    // our task listed as 'myRandomTask' should be on the document. 
    expect(taskList.getByText('myRandomTask')).toBeInTheDocument();

    // delete the 'myRandomTask' now. 
    fireEvent.click(delButton);
    expect(taskList.queryByText('myRandomTask')).not.toBeInTheDocument();
});