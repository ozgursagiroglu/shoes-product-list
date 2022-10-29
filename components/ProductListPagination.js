import Link from 'next/link';
import useSearchParams from '../hooks/useSearchParams';

const ProductListPagination = ({ data }) => {
  const { meta } = data;
  const { stringify } = useSearchParams();
  const totalPages = Math.ceil(meta.total / meta.limit);

  return (
    <div className="flex justify-center items-center gap-4">
      <Link
        href={stringify({ page: meta.page - 1 })}
        className="w-8 h-8 border rounded-sm inline-flex items-center justify-center">
        &lt;
      </Link>

      {new Array(totalPages).fill(null).map((_, index) => (
        <Link
          href={stringify({ page: index + 1 })}
          passHref
          className="w-8 h-8 border rounded-sm inline-flex items-center justify-center text-sm"
          key={index}>
          {index + 1}
        </Link>
      ))}

      <Link
        href={stringify({ page: meta.page + 1 })}
        className="w-8 h-8 border rounded-sm inline-flex items-center justify-center">
        &gt;
      </Link>
    </div>
  );
};

ProductListPagination.defaultProps = {
  data: {
    meta: {},
  },
};

export default ProductListPagination;
