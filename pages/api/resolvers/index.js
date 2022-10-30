import MOCK from '@mock/products.json';
import getImageIndex from '@utils/getImageIndex';

const MOCK_DATA = MOCK.map((item, index) => ({
  ...item,
  image: `/product-images/${getImageIndex(index)}.jpeg`,
}));

const PRODUCT_LIST_LIMIT = 24;

const availableFilters = {
  categories: [],
  brands: [],
};

MOCK_DATA.forEach(product => {
  const hasBrand = availableFilters.brands.find(
    item => item.value === product.brand
  );
  const hasCategory = availableFilters.categories.find(
    item => item.value === product.category
  );

  if (!hasBrand) {
    availableFilters.brands.push({
      name: product.brand,
      value: product.brand,
    });
  }

  if (!hasCategory) {
    availableFilters.categories.push({
      name: product.category,
      value: product.category,
    });
  }
});

export const resolvers = {
  Query: {
    getProducts(parent, args) {
      let data = [...MOCK_DATA];

      const { filter, sort, page = 1 } = args;

      if (filter.category) {
        data = data.filter(item => item.category === filter.category);
      }

      if (filter.brand) {
        data = data.filter(item => filter.brand.includes(item.brand));
      }

      if (['asc', 'desc'].includes(sort)) {
        data = data.sort((a, b) =>
          sort === 'asc'
            ? a.sale_price - b.sale_price
            : b.sale_price - a.sale_price
        );
      }

      const total = data.length;
      const offset = (page - 1) * PRODUCT_LIST_LIMIT;

      return {
        items: data.slice(offset, offset + PRODUCT_LIST_LIMIT),
        filters: availableFilters,
        meta: {
          total,
          page,
          limit: PRODUCT_LIST_LIMIT,
        },
      };
    },
  },
};
