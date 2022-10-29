import { useRouter } from 'next/router';
import { useCallback, useMemo, useState } from 'react';
import FilterSection from './common/FilterSection';
import useSearchParams from '../hooks/useSearchParams';
import { MULTIPLE_FILTER_KEYS } from '../constants/app';

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

  const combinedFilters = useMemo(() => {
    const filterObject = {
      brands: [],
      categories: [],
    };

    data.items.forEach(product => {
      if (!filterObject.brands.includes(product.brand)) {
        filterObject.brands.push(product.brand);
      }

      if (!filterObject.categories.includes(product.category)) {
        filterObject.categories.push(product.category);
      }
    });

    return filterObject;
  }, [data]);

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
  data: {
    items: [],
  },
};

export default ProductFilters;
