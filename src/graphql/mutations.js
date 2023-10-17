import { gql } from "@apollo/client";

export const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

export const CREATE_DONOR_MUTATION = gql`
  mutation CreateDonor($input: DonorInput!) {
    createDonor(input: $input) {
      password
      name
      email
      address
    }
  }
`;

export const CREATE_ORGANIZATION_MUTATION = gql`
  mutation CreateOrganization($input: OrganizationInput!) {
    createOrganization(input: $input) {
      name
      password
      email
      address
    }
  }
`;

export const CREATE_PRODUCT_MUTATION = gql`
  mutation CreateProduct($input: ProductInput!) {
    createProduct(input: $input) {
      name
      category
      expirationDate
      quantityDonated
      quantityNeeded
    }
  }
`;
