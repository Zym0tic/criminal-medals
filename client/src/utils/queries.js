import { gql } from '@apollo/client';

export const QUERY_PRODUCTS = gql`
  query getProducts($collection: ID) {
    products(collection: $collection) {
      _id
      name
      description
      price
      quantity
      image
      collection {
        _id
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql`
  {
    products {
      _id
      name
      description
      price
      quantity
      collection {
        name
      }
    }
  }
`;

export const QUERY_COLLECTIONS = gql`
  {
    collections {
      _id
      name
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      orders {
        _id
        purchaseDate
        products {
          _id
          name
          description
          price
          quantity
          image
        }
      }
    }
  }
`;
