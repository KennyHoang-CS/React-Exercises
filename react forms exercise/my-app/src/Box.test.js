import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import Box from './Box';


it('Box should render', () => {
    render(<Box />);
});

it('Box render matches snapshot', () => {
    const { asFragment } = render(<Box />);
    expect(asFragment()).toMatchSnapshot(); 
});
