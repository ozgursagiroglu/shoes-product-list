import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  type Product {
    name: String
    category: String
    image: String
    price: String
    sale_price: String
    subcategory: String
    brand: String
  }

  input ProductsFilter {
    category: String
    name: String
    brand: [String]
  }

  type Query {
    getProducts(filter: ProductsFilter): [Product]
  }
`;
