import { render, screen } from '@testing-library/react';
import Todo from './Todo';

it('Todo should render', () => {
  render(<Todo/>);
});

it('Todo matches snapshot', () => {
  const { asFragment } = render(<Todo/>);
  expect(asFragment()).toMatchSnapshot();
});
