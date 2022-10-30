import Link from 'next/link';
import cx from 'classnames';
import useSearchParams from '@hooks/useSearchParams';

const ProductListOptions = ({ onColumnChange, onToggleFilters }) => {
  const { stringify, query } = useSearchParams();

  return (
    <div className="flex justify-between align-center mb-6">
      <button
        className="lg:hidden text-black inline-flex items-center"
        data-testid="filters-button"
        onClick={onToggleFilters}>
        <svg
          width="20px"
          height="20px"
          viewBox="0 0 24 24"
          fill="none"
          className="mr-1"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6 11.1707L6 4C6 3.44771 5.55228 3 5 3C4.44771 3 4 3.44771 4 4L4 11.1707C2.83481 11.5825 2 12.6938 2 14C2 15.3062 2.83481 16.4175 4 16.8293L4 20C4 20.5523 4.44772 21 5 21C5.55228 21 6 20.5523 6 20L6 16.8293C7.16519 16.4175 8 15.3062 8 14C8 12.6938 7.16519 11.5825 6 11.1707ZM5 13C4.44772 13 4 13.4477 4 14C4 14.5523 4.44772 15 5 15C5.55228 15 6 14.5523 6 14C6 13.4477 5.55228 13 5 13Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19 21C18.4477 21 18 20.5523 18 20L18 18C18 17.9435 18.0047 17.8881 18.0137 17.8341C16.8414 17.4262 16 16.3113 16 15C16 13.6887 16.8414 12.5738 18.0137 12.1659C18.0047 12.1119 18 12.0565 18 12L18 4C18 3.44771 18.4477 3 19 3C19.5523 3 20 3.44771 20 4L20 12C20 12.0565 19.9953 12.1119 19.9863 12.1659C21.1586 12.5738 22 13.6887 22 15C22 16.3113 21.1586 17.4262 19.9863 17.8341C19.9953 17.8881 20 17.9435 20 18V20C20 20.5523 19.5523 21 19 21ZM18 15C18 14.4477 18.4477 14 19 14C19.5523 14 20 14.4477 20 15C20 15.5523 19.5523 16 19 16C18.4477 16 18 15.5523 18 15Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9 9C9 7.69378 9.83481 6.58254 11 6.17071V4C11 3.44772 11.4477 3 12 3C12.5523 3 13 3.44772 13 4V6.17071C14.1652 6.58254 15 7.69378 15 9C15 10.3113 14.1586 11.4262 12.9863 11.8341C12.9953 11.8881 13 11.9435 13 12L13 20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20L11 12C11 11.9435 11.0047 11.8881 11.0137 11.8341C9.84135 11.4262 9 10.3113 9 9ZM11 9C11 8.44772 11.4477 8 12 8C12.5523 8 13 8.44772 13 9C13 9.55229 12.5523 10 12 10C11.4477 10 11 9.55229 11 9Z"
            fill="currentColor"
          />
        </svg>
        Filters
      </button>

      <div className="hidden lg:flex items-center gap-x-2">
        <span className="text-sm">Column:</span>
        <button
          className="column-icon border p-1 rounded"
          onClick={() => onColumnChange(3)}
          data-testid="column-button-3">
          <span />
          <span />
          <span />
        </button>
        <button
          className="column-icon border p-1 rounded"
          onClick={() => onColumnChange(4)}
          data-testid="column-button-4">
          <span />
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className="flex items-center justify-end gap-x-1 lg:gap-x-3">
        <span className="text-xs lg:text-sm">Price:</span>
        <Link
          href={stringify({ sort: 'asc' })}
          className={cx('link text-black text-sm lg:text-base', {
            'link-active': query.sort === 'asc',
          })}
          passHref>
          Low To High
        </Link>
        -
        <Link
          href={stringify({ sort: 'desc' })}
          className={cx('link text-black text-sm lg:text-base', {
            'link-active': query.sort === 'desc',
          })}
          passHref>
          High To Low
        </Link>
      </div>
    </div>
  );
};

ProductListOptions.defaultProps = {
  onColumnChange: () => {},
  onToggleFilters: () => {},
};

export default ProductListOptions;
