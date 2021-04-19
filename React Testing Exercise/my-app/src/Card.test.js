import React from 'react';
import { render } from '@testing-library/react';
import Card from './Card';

it('Card should render without crashing', () => {
    render(<Card />);
});

it('Card matches snapshot', () => {
    const { asFragment } = render(<Card />);
    expect(asFragment()).toMatchSnapshot(); 
});