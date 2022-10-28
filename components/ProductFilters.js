import { useRouter } from 'next/router';
import { useCallback, useMemo, useState } from 'react';
import FilterSection from './common/FilterSection';
import qs from 'qs';

const ProductFilters = ({ data }) => {
  const router = useRouter();
  const [filters, setFilters] = useState(() => {
    const routerQueries = router.query;
    const prevFilters = {};

    Object.keys(routerQueries).forEach(key => {
      const isMultiple = key.includes('[');
      const value = routerQueries[key];

      if (isMultiple) {
        prevFilters[key.replace('[', '').replace(']', '')] = Array.isArray(
          value
        )
          ? value
          : [value];
      } else {
        prevFilters[key] = value;
      }
    });

    return prevFilters;
  });

  const combinedFilters = useMemo(() => {
    const filters = {
      brands: [],
      categories: [],
    };

    data.forEach(product => {
      filters.brands.push(product.brand);

      if (!filters.categories.includes(product.category)) {
        filters.categories.push(product.category);
      }
    });

    return filters;
  }, [data]);

  const handleFilterChange = useCallback(e => {
    const { name, value, checked } = e.currentTarget;

    setFilters(prev => {
      const splitted = prev?.[name]?.length ? prev[name] : [];

      const newValue = checked
        ? splitted.concat(value)
        : splitted.filter(item => item !== value);

      if (!newValue.length) {
        delete prev[name];

        return { ...prev };
      }

      return {
        ...prev,
        [name]: newValue,
      };
    });
  }, []);

  const handleApplyFilters = useCallback(() => {
    const queryStrings = qs.stringify(filters, {
      arrayFormat: 'brackets',
      addQueryPrefix: true,
    });

    router.push(`/${queryStrings}`, null, {
      shallow: true,
    });
  }, [router, filters]);

  return (
    <>
      <FilterSection
        title="Categories"
        data={combinedFilters.categories}
        filterKey="category"
        isMultipleSelect={false}
      />

      <FilterSection
        title="Brands"
        data={combinedFilters.brands}
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
  data: [],
};

export default ProductFilters;
