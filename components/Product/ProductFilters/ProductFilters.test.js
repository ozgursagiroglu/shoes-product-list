import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import '__mocks__/useRouterMock';
import ProductFilters from './ProductFilters';

describe('Product Filters', () => {
  test('renders component', () => {
    render(<ProductFilters data={{ filters: {} }} />);

    expect(screen.getByText('Apply')).toBeInTheDocument();
  });

  test('should click to apply button', () => {
    render(<ProductFilters data={{ filters: {} }} />);

    const button = screen.getByTestId('apply-button');

    fireEvent.click(button);
  });
});
