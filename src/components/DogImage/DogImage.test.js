import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DogImage from './DogImage';

describe('<DogImage />', () => {
  test('it should mount', () => {
    render(<DogImage />);
    
    const dogImage = screen.getByTestId('DogImage');

    expect(dogImage).toBeInTheDocument();
  });
});