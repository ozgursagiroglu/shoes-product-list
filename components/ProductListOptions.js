import Link from 'next/link';
import useSearchParams from '../hooks/useSearchParams';
import cx from 'classnames';

const ProductListOptions = () => {
  const { stringify, query } = useSearchParams();

  return (
    <div className="flex justify-between align-middle mb-6">
      <div>
        <div className="hidden lg:flex items-center gap-x-2">
          <span className="text-sm font-semibold">Column:</span>
          <button className="column-icon border p-1 rounded">
            <span />
            <span />
            <span />
          </button>
          <button className="column-icon border p-1 rounded">
            <span />
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-end gap-x-3">
        <span className="text-sm">Price:</span>
        <Link
          href={stringify({ sort: 'asc' })}
          className={cx('link font-medium', {
            'link-active': query.sort === 'asc',
          })}
          passHref>
          Low To High
        </Link>
        <Link
          href={stringify({ sort: 'desc' })}
          className={cx('link font-medium', {
            'link-active': query.sort === 'desc',
          })}
          passHref>
          High To Low
        </Link>
      </div>
    </div>
  );
};

export default ProductListOptions;
