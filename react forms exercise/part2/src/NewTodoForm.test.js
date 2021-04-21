import { render, screen } from '@testing-library/react';
import NewTodoForm from './NewTodoForm';

it('NewTodoForm should render', () => {
  render(<NewTodoForm/>);
});

it('NewTodoForm matches snapshot', () => {
  const { asFragment } = render(<NewTodoForm/>);
  expect(asFragment()).toMatchSnapshot();
});
