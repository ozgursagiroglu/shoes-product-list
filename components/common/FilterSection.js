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
  isScrollable,
}) => {
  const router = useRouter();
  const currentQuery = router.query[filterKey] ?? '';
  const { stringify } = useSearchParams();

  return (
    <div className="mb-6 lg:mb-10">
      <div className="text-sm mb-2">{title}</div>
      <div
        className={cx('flex flex-col items-start gap-2 pr-6', {
          'max-h-48 lg:max-h-96 overflow-auto will-change-scroll scrollbar-thumb-rounded scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100':
            isScrollable,
        })}>
        {!isMultipleSelect && currentQuery ? (
          <Link
            passHref
            href={stringify({ [filterKey]: undefined })}
            className="text-black transition-colors link">
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
              className={cx('text-black transition-colors link', {
                'link-active': currentQuery === item.value,
              })}>
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
  isScrollable: true,
};

export default FilterSection;
