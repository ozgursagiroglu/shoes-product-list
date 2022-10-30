import Image from 'next/image';
import Link from 'next/link';
import cx from 'classnames';
import ProductItem from '../ProductItem/ProductItem';

const ProductList = ({ data, column }) => {
  return (
    <div>
      {data?.banner?.url ? (
        <div className="mb-6">
          <Link href={data.banner.url} passHref>
            <Image
              src={data.banner.image}
              width={1295}
              height={550}
              alt="Product List Banner"
            />
          </Link>
        </div>
      ) : null}

      <div
        data-testid="product-list"
        className={cx('grid grid-cols-2 md:grid-cols-3 gap-6 mb-6', {
          'lg:grid-cols-3': column === 3,
          'lg:grid-cols-4': column === 4,
        })}>
        {data.items.map((item, index) => (
          <ProductItem key={index} index={index} data={item} />
        ))}
      </div>
    </div>
  );
};

ProductList.defaultProps = {
  data: {
    items: [],
    banner: {},
  },
};

export default ProductList;
