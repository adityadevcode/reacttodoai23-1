//render  function is used to render a React component and it returns an object that contains 
//several utility methods which allow you to query the rendered component and interact with it.

// fireEvent function is used to simulate browser events such as clicks, input, and form submissions.
//  It allows you to trigger the event handlers on a rendered component as if the events were fired by a user interacting with the component.

import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import Setcount from './Setcount';

describe('Setcount component', () => {
it('renders without crashing', ()=> {
    render(<Setcount/>);
});

it('displays the initial count', () => {
    const { getByText } = render(<Setcount component/>);
    const countText = getByText('count:0');
    expect(countText).toBeInTheDocument();
  });

  it('increments the count when the increment button is clicked', () => {
    const { getByText } = render(<Setcount component />);
    const incrementButton = getByText('Increment');
    fireEvent.click(incrementButton);
    const countText = getByText('count:1');
    expect(countText).toBeInTheDocument();
});

it('decrements the count when the decrement button is clicked', () => {
  const { getByText } = render(<Setcount component />);
  const decrementButton = getByText('Decrement');
  fireEvent.click(decrementButton);
  const countText = getByText('count:-1');
  expect(countText).toBeInTheDocument();
});
});
