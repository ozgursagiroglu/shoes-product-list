import { useRouter } from 'next/router';
import { useCallback } from 'react';
import qs from 'qs';

function useSearchParams() {
  const router = useRouter();
  const { query } = router;

  const stringify = useCallback(
    extras => {
      const queryStrings = qs.stringify(
        {
          ...query,
          ...extras,
        },
        {
          arrayFormat: 'repeat',
          addQueryPrefix: true,
        }
      );

      return queryStrings;
    },
    [query]
  );

  return { stringify, query };
}

export default useSearchParams;
