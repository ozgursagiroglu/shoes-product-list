import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  test('renders component', () => {
    render(<Header />);

    expect(screen.getByTestId('logo')).toBeInTheDocument();
  });
});
