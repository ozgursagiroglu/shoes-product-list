import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import '__mocks__/useRouterMock';
import FilterSection from './FilterSection';

describe('Filter Section', () => {
  test('renders component', () => {
    render(
      <FilterSection
        title="Filter Section"
        data={[{ name: 'Filter 1', value: 'Filter1' }]}
      />
    );

    expect(screen.getByText('Filter Section')).toBeInTheDocument();
    expect(screen.getByText('Filter 1')).toBeInTheDocument();
  });
});
