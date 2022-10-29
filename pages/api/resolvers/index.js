import MOCK from '../../../mock/products.json';
import getImageIndex from '../../../utils/getImageIndex';

const MOCK_DATA = MOCK.map((item, index) => ({
  ...item,
  image: `/product-images/${getImageIndex(index)}.jpeg`,
}));

const PRODUCT_LIST_LIMIT = 24;

export const resolvers = {
  Query: {
    getProducts(parent, args) {
      let data = [...MOCK_DATA];

      const { filter, sort = 'asc', page = 1 } = args;
      const total = data.length;

      if (filter.category) {
        data = data.filter(item => item.category === filter.category);
      }

      if (filter.name) {
        data = data.filter(item => item.name.includes(filter.name));
      }

      if (filter.brand) {
        data = data.filter(item => filter.brand.includes(item.brand));
      }

      data = data.sort((a, b) =>
        sort === 'desc'
          ? a.sale_price - b.sale_price
          : b.sale_price - a.sale_price
      );

      const offset = (page - 1) * PRODUCT_LIST_LIMIT;

      return {
        items: data.slice(offset, offset + PRODUCT_LIST_LIMIT),
        meta: {
          total,
          page,
          limit: PRODUCT_LIST_LIMIT,
        },
      };
    },
  },
};
