import React, { useEffect, useState } from 'react';
import ProductItem from './common/ProductItem';

const ProductList = ({ data }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-6">
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
