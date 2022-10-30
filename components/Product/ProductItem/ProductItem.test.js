import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ProductItem from './ProductItem';

const MOCK_PRODUCT = {
  image: '/',
  name: 'Product Name',
  price: 2,
  sale_price: 1,
  brand: 'Brand',
};

describe('Product Item', () => {
  test('renders ProductItem component', () => {
    render(<ProductItem data={MOCK_PRODUCT} />);

    expect(screen.getByText('Product Name')).toBeInTheDocument();
    expect(screen.getByTestId('actual-price')).toBeInTheDocument();
  });

  test('it should have "new" badge', () => {
    render(<ProductItem index={3} data={MOCK_PRODUCT} />);

    expect(screen.getByText('New')).toBeInTheDocument();
  });
});
