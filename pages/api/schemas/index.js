import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  type Product {
    name: String
    category: String
    image: String
    price: Float
    sale_price: Float
    subcategory: String
    brand: String
  }

  type ProductListMeta {
    total: Int
    limit: Int
    page: Int
  }

  type ProductList {
    items: [Product]
    meta: ProductListMeta
  }

  input ProductsFilter {
    category: String
    name: String
    brand: [String]
  }

  enum Sort {
    asc
    desc
  }

  type Query {
    getProducts(filter: ProductsFilter, sort: Sort, page: Int): ProductList
  }
`;
