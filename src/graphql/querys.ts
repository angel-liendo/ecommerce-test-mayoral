import { gql } from "@apollo/client";

export const ALL_PRODUCTS = gql`
  query {
    allProducts {
      id
      title
      price
      img
      discount
      colors {
        id
        name
        value
      }
    }
  }
`;

export const FIND_PRODUCT_BY_ID = gql`
  query ($findProductId: ID!) {
    findProduct(id: $findProductId) {
      id
      title
      price
      discount
      img
    }
  }
`;
