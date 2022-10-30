import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ProductBadge from './ProductBadge';

describe('Product Badge', () => {
  test('renders component', () => {
    render(<ProductBadge>Badge</ProductBadge>);

    expect(screen.getByText('Badge')).toBeInTheDocument();
  });
});
