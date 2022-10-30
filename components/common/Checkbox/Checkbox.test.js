import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Checkbox from './Checkbox';

describe('Checkbox', () => {
  test('renders component', () => {
    render(
      <Checkbox name="checkbox" value="checkbox">
        My Checkbox
      </Checkbox>
    );

    expect(screen.getByText('My Checkbox')).toBeInTheDocument();
  });

  test('it should be checked', () => {
    const mockFnc = jest.fn();

    render(
      <Checkbox name="checkbox" value="checkbox" checked onChange={mockFnc}>
        My Checkbox
      </Checkbox>
    );

    const input = screen.getByTestId('checkbox');

    expect(input).toBeChecked();
  });
});
