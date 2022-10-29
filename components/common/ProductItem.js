import Image from 'next/image';
import Link from 'next/link';
import React, { useMemo } from 'react';
import ProductBadge from './ProductBadge';

const ProductItem = ({ data, index }) => {
  const badges = useMemo(
    () => ({
      outOfStock: index !== 0 && index % 4 === 0,
      new: index !== 0 && index % 3 === 0,
    }),
    [index]
  );

  return (
    <div className="w-100 group">
      <div className="product-image">
        <Link href="/" passHref>
          <Image
            src={data.image}
            alt="Photo"
            fill
            className="transition-transform group-hover:scale-105 duration-300"
          />
        </Link>

        <div className="absolute top-2 left-2 z-10 flex flex-col items-start pointer-events-none">
          {badges.new ? (
            <ProductBadge className="bg-orange-500 text-white">
              New
            </ProductBadge>
          ) : null}

          {badges.outOfStock ? (
            <ProductBadge className="bg-white text-black">
              Out of stock
            </ProductBadge>
          ) : null}
        </div>
      </div>
      <Link href="/" passHref>
        <div className="font-medium text-xs lg:text-sm mb-1 text-gray-600 whitespace-nowrap text-ellipsis overflow-hidden ">
          {data.brand}
        </div>
      </Link>

      <Link href="/" passHref>
        <div className="text-black font-medium text-sm lg:text-base mb-1 h-12">
          {data.name}
        </div>
      </Link>
      <div className="flex items-center justify-start text-sm lg:text-base">
        {data.price !== data.sale_price ? (
          <span className="text-gray-500 line-through pr-1">${data.price}</span>
        ) : null}
        <span className="text-orange-500 font-medium">${data.sale_price}</span>
      </div>
    </div>
  );
};

export default ProductItem;
