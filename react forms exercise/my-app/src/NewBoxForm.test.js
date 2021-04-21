import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import NewBoxForm from './NewBoxForm';

it('NewBoxForm should render', () => {
    render(<NewBoxForm />);
});

it('NewBoxForm render matches snapshot', () => {
    const { asFragment } = render(<NewBoxForm />);
    expect(asFragment()).toMatchSnapshot(); 
});
