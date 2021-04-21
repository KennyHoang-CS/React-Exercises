import { render, screen } from '@testing-library/react';
import App from './App';


it('App should render', () => {
  render(<App />);
});

it('App render matches snapshot', () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot(); 
});