import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import '__mocks__/useRouterMock';
import ProductListOptions from './ProductListOptions';

describe('Product List Options', () => {
  test('renders component', () => {
    render(<ProductListOptions />);

    expect(screen.getByText('Price:')).toBeInTheDocument();
    expect(screen.getByText('Filters')).toBeInTheDocument();
  });

  test('it should click filters button', () => {
    const mockFnc = jest.fn();

    render(<ProductListOptions onToggleFilters={mockFnc} />);

    screen.getByTestId('filters-button').click();

    expect(mockFnc).toBeCalled();
  });

  test('it should click column button with 4', () => {
    const mockFnc = jest.fn();

    render(<ProductListOptions onColumnChange={mockFnc} />);

    screen.getByTestId('column-button-4').click();

    expect(mockFnc).toHaveBeenCalledWith(4);
  });
});
