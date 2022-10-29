import Link from 'next/link';
import useSearchParams from '../hooks/useSearchParams';
import cx from 'classnames';

const ProductListPagination = ({ data }) => {
  const { meta } = data;
  const { stringify } = useSearchParams();
  const totalPages = Math.ceil(meta.total / meta.limit);

  return totalPages > 1 ? (
    <div className="flex justify-center items-center gap-2 md:gap-4">
      <Link
        href={stringify({ page: meta.page - 1 })}
        className={cx(
          'w-8 h-8 border rounded-sm inline-flex items-center justify-center',
          {
            'pointer-events-none opacity-50': meta.page <= 1,
          }
        )}>
        &lt;
      </Link>

      {new Array(totalPages).fill(null).map((_, index) => (
        <Link
          href={stringify({ page: index + 1 })}
          passHref
          className={cx(
            'w-8 h-8 border rounded-sm inline-flex items-center justify-center text-sm',
            {
              'bg-orange-500 border-orange-500 text-white pointer-events-none':
                index + 1 === meta.page,
            }
          )}
          key={index}>
          {index + 1}
        </Link>
      ))}

      <Link
        href={stringify({ page: meta.page + 1 })}
        className={cx(
          'w-8 h-8 border rounded-sm inline-flex items-center justify-center',
          {
            'pointer-events-none opacity-50': meta.page >= totalPages,
          }
        )}>
        &gt;
      </Link>
    </div>
  ) : null;
};

ProductListPagination.defaultProps = {
  data: {
    meta: {},
  },
};

export default ProductListPagination;
