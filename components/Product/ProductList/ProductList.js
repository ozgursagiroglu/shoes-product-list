import cx from 'classnames';
import ProductItem from '../ProductItem/ProductItem';

const ProductList = ({ data, column }) => {
  return (
    <div
      className={cx('grid grid-cols-2 md:grid-cols-3 gap-6 mb-6', {
        'lg:grid-cols-3': column === 3,
        'lg:grid-cols-4': column === 4,
      })}>
      {data.items.map((item, index) => (
        <ProductItem key={index} index={index} data={item} />
      ))}
    </div>
  );
};

ProductList.defaultProps = {
  data: {
    items: [],
  },
};

export default ProductList;
