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

  input ProductListFilter {
    category: String
    brand: [String]
  }

  enum Sort {
    asc
    desc
  }

  type Banner {
    url: String
    image: String
  }

  type Filter {
    name: String
    value: String
  }

  type Filters {
    categories: [Filter]
    brands: [Filter]
  }

  type ProductList {
    items: [Product]
    banner: Banner
    filters: Filters
    meta: ProductListMeta
  }

  type Query {
    getProducts(filter: ProductListFilter, sort: Sort, page: Int): ProductList
  }
`;
