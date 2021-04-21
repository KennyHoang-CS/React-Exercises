import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import BoxList from './BoxList';

function addBox(boxList, height="1", width="1",  color="red") {
    const heightInput = boxList.getByLabelText('Height');
    const widthInput = boxList.getByLabelText('Width');
    const colorInput = boxList.getByLabelText('Color');
    fireEvent.change(heightInput, { target: { value: height } });
    fireEvent.change(widthInput, { target: { value: width } });
    fireEvent.change(colorInput, { target: { value: color } });
    const button = boxList.getByText('Add');
    fireEvent.click(button);
}

it('BoxList should render', () => {
    render(<BoxList />);
});

it('BoxList render matches snapshot', () => {
    const { asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot(); 
});

it('Can add a new box', () => {
    const boxList = render(<BoxList />);
    addBox(boxList);

    // should expect a box.
    const delButton = boxList.getByText('X');
    expect(delButton).toBeInTheDocument();
    expect(delButton.parentElement)
        .toHaveStyle("background-color: red; width: 1px; height: 1px;")

    // expect form to be empty.
    expect(boxList.getAllByDisplayValue("")).toHaveLength(3);
});

it('Can delete a box', () => {
    const boxList = render(<BoxList />);
    addBox(boxList);

    const delButton = boxList.getByText('X');
    expect(delButton).toBeInTheDocument();
    fireEvent.click(delButton);
    expect(delButton).not.toBeInTheDocument();
});