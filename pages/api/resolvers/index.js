import MOCK from '../../../mock/products.json';
import getImageIndex from '../../../utils/getImageIndex';

const MOCK_DATA = MOCK.map((item, index) => ({
  ...item,
  image: `/product-images/${getImageIndex(index)}.jpeg`,
}));

export const resolvers = {
  Query: {
    getProducts(parent, args) {
      const { filter } = args;

      let data = [...MOCK_DATA];

      if (!filter) {
        return data;
      }

      if (filter.category) {
        data = data.filter(item => item.category === filter.category);
      }

      if (filter.name) {
        data = data.filter(item => item.name.includes(filter.name));
      }

      if (filter.brand) {
        data = data.filter(item => filter.brand.includes(item.brand));
      }

      return data.slice(0, 24);
    },
  },
};
