import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import '__mocks__/useRouterMock';
import ProductList from './ProductList';

describe('Product List', () => {
  test('renders component', () => {
    render(<ProductList data={{ items: [] }} />);

    expect(screen.getByTestId('product-list')).toBeInTheDocument();
  });
});
