import Link from 'next/link';
import useSearchParams from '../hooks/useSearchParams';

const ProductListOptions = () => {
  const { stringify } = useSearchParams();

  return (
    <div className="flex justify-between align-middle mb-6">
      <div></div>
      <div className="flex items-center justify-end gap-x-3">
        <span className="font-semibold text-sm">Price:</span>
        <Link href={stringify({ sort: 'asc' })} passHref>
          <span>Low To High</span>
        </Link>
        <Link href={stringify({ sort: 'desc' })} passHref>
          <span>High To Low</span>
        </Link>
      </div>
    </div>
  );
};

export default ProductListOptions;
