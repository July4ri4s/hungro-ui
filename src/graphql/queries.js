import { gql } from "@apollo/client";

export const GET_DONORS = gql`
  query GetDonors {
    getDonors {
      email
      name
      donations {
        product {
          name
        }
      }
    }
  }
`;

export const GET_ME = gql`
  query getMe {
    getMe {
      donor {
        id
        name
        email
        address
      }
      organization {
        id
        name
        email
        address
      }
    }
  }
`;

export const GET_PRODUCTS = gql`
  query GetProducts {
    getProducts {
      name
      category
      expirationDate
      quantityDonated
      quantityNeeded
    }
  }
`;

export const GET_DONATIONS = gql`
  query Query {
    getDonations {
      donor {
        name
      }
      product {
        name
        category
      }
      id
    }
  }
`;
