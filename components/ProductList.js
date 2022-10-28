import React, { useEffect, useState } from 'react';
import ProductItem from './common/ProductItem';

const ProductList = ({ data }) => {
  return (
    <div className="grid grid-cols-4 gap-6">
      {data.map((item, index) => (
        <ProductItem key={index} index={index} data={item} />
      ))}
    </div>
  );
};

ProductList.defaultProps = {
  data: [],
};

export default ProductList;
