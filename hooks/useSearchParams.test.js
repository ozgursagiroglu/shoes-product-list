import { renderHook } from '@testing-library/react';
import '__mocks__/useRouterMock';
import useSearchParams from './useSearchParams';

describe('useSearchParams Hook', () => {
  test('it should return stringify func and query object', () => {
    const { result } = renderHook(() => useSearchParams());

    expect(typeof result.current.query).toBe('object');
    expect(result.current.query.page).toBe(1);
    expect(typeof result.current.stringify).toBe('function');
  });
});
