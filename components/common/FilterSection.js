import Link from 'next/link';
import { useRouter } from 'next/router';
import useSearchParams from '../../hooks/useSearchParams';
import Checkbox from '../common/Checkbox';
import cx from 'classnames';

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
  const { stringify } = useSearchParams();

  return (
    <div className="mb-10">
      <div className="font-semibold text-sm mb-2">{title}</div>
      <div className="flex flex-col gap-2 max-h-96 pr-6 overflow-auto will-change-scroll scrollbar-thumb-rounded scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
        {!isMultipleSelect && currentQuery ? (
          <Link
            passHref
            href={stringify({ [filterKey]: undefined })}
            className="text-black transition-colors hover:text-orange-500 text-sm">
            &lt; View All
          </Link>
        ) : null}

        {data.map(item =>
          isMultipleSelect ? (
            <Checkbox
              name={filterKey}
              value={item.value}
              key={item.name}
              onChange={handleFilterChange}
              checked={selectedFilters?.[filterKey]?.includes(item.value)}>
              {item.name}
            </Checkbox>
          ) : (
            <Link
              passHref
              key={item.name}
              href={
                !isMultipleSelect
                  ? `/?${filterKey}=${item.value}`
                  : `/?${filterKey}=${currentQuery},${encodeURI(item.value)}`
              }
              className={cx(
                'text-black transition-colors hover:text-orange-500 text-sm',
                {
                  'text-orange-500': currentQuery === item.value,
                }
              )}>
              {item.name}
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
