import cx from 'classnames';

const ProductBadge = ({ className, children }) => {
  return (
    <div
      className={cx(
        'flex-shrink-0 border inline-flex font-semibold text-xs px-2 rounded mb-2',
        className
      )}>
      {children}
    </div>
  );
};

ProductBadge.defaultProps = {
  className: '',
};

export default ProductBadge;
