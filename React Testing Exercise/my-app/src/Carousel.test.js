import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";


it('Carousel should render without crashing.', () => {
  render(<Carousel />);
});

it('Carousel matches snapshot', () => {
  const { asFragment } = render(<Carousel />);
  expect(asFragment()).toMatchSnapshot(); 
});


it("works when you click on the right arrow", function() {
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  // expect the first image to show, but not the second
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();
});

it('Left arrow should move to 1st image from 2nd image', () => {
  const { getByTestId, queryByAltText } = render(<Carousel />);

  // get our arrow references.
  const leftArrow = getByTestId('left-arrow');
  const rightArrow = getByTestId('right-arrow');

  // Move to image 2 from image 1.
  fireEvent.click(rightArrow);
  expect(queryByAltText('Photo by Pratik Patel on Unsplash')).toBeInTheDocument();
  fireEvent.click(leftArrow);
  // Image 2 should not be on document anymore, since we moved backward. 
  expect(queryByAltText('Photo by Pratik Patel on Unsplash')).not.toBeInTheDocument();
  // Image 1 should be in the document now as a result of moving backward. 
  expect(queryByAltText('Photo by Richard Pasquarella on Unsplash')).toBeInTheDocument();
});

it('left arrow should not display at the first image', () => {
  const { queryByTestId } = render(<Carousel />);

  // get our arrow references.
  const leftArrow = queryByTestId('left-arrow');
  const rightArrow = queryByTestId("right-arrow");
  expect(leftArrow).toHaveClass('hidden');
  expect(rightArrow).not.toHaveClass('hidden');
});

it('right arrow should not display at the last image', () => {
  const { queryByTestId } = render(<Carousel />);

  // get our arrow references.
  const rightArrow = queryByTestId('right-arrow');
  const leftArrow = queryByTestId('left-arrow');
  
  // there are only 3 images, so move forward twice to reach the end of images. 
  fireEvent.click(rightArrow);
  fireEvent.click(rightArrow);
  expect(rightArrow).toHaveClass('hidden');
  expect(leftArrow).not.toHaveClass('hidden');
});
