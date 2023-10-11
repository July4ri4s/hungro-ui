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
