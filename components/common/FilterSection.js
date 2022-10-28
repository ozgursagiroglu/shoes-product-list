import Link from 'next/link';
import { useRouter } from 'next/router';
import Checkbox from '../common/Checkbox';

const FilterSection = ({
  title,
  data,
  filterKey,
  isMultipleSelect,
  selectedFilters,
  handleFilterChange,
}) => {
  const router = useRouter();
  const currentQuery = router.query[filterKey] ?? '';

  return (
    <div className="mb-10">
      <div className="font-semibold text-sm mb-2">{title}</div>
      <div className="flex flex-col gap-2 max-h-96 pr-6 overflow-auto will-change-scroll scrollbar-thumb-rounded scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
        {data.map(item =>
          isMultipleSelect ? (
            <Checkbox
              name={filterKey}
              value={item}
              key={item}
              onChange={handleFilterChange}
              checked={selectedFilters?.[filterKey]?.includes(item)}>
              {item}
            </Checkbox>
          ) : (
            <Link
              passHref
              key={item}
              href={
                !isMultipleSelect
                  ? `/?${filterKey}=${item}`
                  : `/?${filterKey}=${currentQuery},${encodeURI(item)}`
              }
              className="text-black transition-colors hover:text-orange-500 text-sm">
              {item}
            </Link>
          )
        )}
      </div>
    </div>
  );
};

FilterSection.defaultProps = {
  data: [],
  isMultipleSelect: true,
};

export default FilterSection;
