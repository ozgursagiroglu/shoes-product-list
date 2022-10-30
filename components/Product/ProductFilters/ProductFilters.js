import { useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import FilterSection from '@components/common/FilterSection/FilterSection';
import useSearchParams from '@hooks/useSearchParams';
import { MULTIPLE_FILTER_KEYS } from '@constants/app';

const ProductFilters = ({ data }) => {
  const router = useRouter();
  const { stringify } = useSearchParams();

  const [filters, setFilters] = useState(() => {
    const routerQueries = router.query;
    const prevFilters = {};

    Object.keys(routerQueries).forEach(key => {
      const value = routerQueries[key];

      if (MULTIPLE_FILTER_KEYS.includes(key)) {
        prevFilters[key] = Array.isArray(value) ? value : [value];
      } else {
        prevFilters[key] = value;
      }
    });

    return prevFilters;
  });

  const handleFilterChange = useCallback(e => {
    const { name, value, checked } = e.currentTarget;

    setFilters(prev => {
      const splitted = prev?.[name]?.length ? prev[name] : [];

      const newValue = checked
        ? splitted.concat(value)
        : splitted.filter(item => item !== value);

      return {
        ...prev,
        [name]: newValue,
      };
    });
  }, []);

  const handleApplyFilters = useCallback(() => {
    router.push(`/${stringify(filters)}`, null);
  }, [stringify, router, filters]);

  return (
    <>
      <FilterSection
        title="Categories"
        data={data.filters.categories}
        filterKey="category"
        isMultipleSelect={false}
        isScrollable={false}
      />

      <FilterSection
        title="Brands"
        data={data.filters.brands}
        filterKey="brands"
        isMultipleSelect={true}
        handleFilterChange={handleFilterChange}
        selectedFilters={filters}
      />

      <button
        className="bg-orange-500 border-none h-10 w-full font-medium text-white rounded-sm hover:shadow-md transition-shadow"
        onClick={handleApplyFilters}>
        Apply
      </button>
    </>
  );
};

ProductFilters.defaultProps = {
  data: {
    items: [],
  },
};

export default ProductFilters;
