// fireEvent.click to simulate a click on the buttons


import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import Usestatehook from './Usestatehook';

describe('Usestatehook', () => {
    it('renders without crashing', ()=> {
        render(<Usestatehook/>)
    });
});

describe('Usestatehook', () => {
    test('increment count on button click', () => {
      const { getByText } = render(<Usestatehook />);
      const incrementButton = getByText('Click me to Increase Count');
  
      fireEvent.click(incrementButton);
      expect(incrementButton).toHaveTextContent('Click me to Increase Count');
  
      fireEvent.click(incrementButton);
      expect(incrementButton).toHaveTextContent('Click me to Increase Count');
    });
  
    test('decrement count on button click', () => {
      const { getByText } = render(<Usestatehook />);
      const decrementButton = getByText('Click me to Decrease Count');
  
      fireEvent.click(decrementButton);
      expect(decrementButton).toHaveTextContent('Click me to Decrease Count');
  
      fireEvent.click(decrementButton);
      expect(decrementButton).toHaveTextContent('Click me to Decrease Count');
    });
  });