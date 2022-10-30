import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import '__mocks__/useRouterMock';
import ProductListPagination from './ProductListPagination';

describe('Product List Pagination', () => {
  test('renders component', () => {
    render(
      <ProductListPagination
        data={{ meta: { total: 100, page: 1, limit: 24 } }}
      />
    );

    const items = screen.getAllByTestId('pagination-item');

    expect(items.length).toBe(5);
  });
});
