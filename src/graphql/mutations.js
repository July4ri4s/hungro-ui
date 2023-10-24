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
      campus
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

export const UPDATE_PRODUCT_MUTATION = gql`
  mutation Mutation($updateProductId: ID!, $input: ProductInput!) {
    updateProduct(id: $updateProductId, input: $input) {
      id
      name
      category
      expirationDate
      quantityNeeded
      quantityDonated
    }
  }
`;

export const DELETE_PRODUCT_MUTATION = gql`
  mutation DeleteProduct($deleteProductId: ID!) {
    deleteProduct(id: $deleteProductId)
  }
`;

export const CREATE_DONATION_MUTATION = gql`
  mutation CreateDonation($input: DonationInput!) {
    createDonation(input: $input) {
      donationDate
      deliveryMethod
      address
      organizationCampus
      quantity
    }
  }
`;

export const CREATE_BASKET = gql`
  mutation CreateBasket($input: BasketInput!) {
    createBasket(input: $input) {
      recipient
      id
      deliveryDate
    }
  }
`;

export const UPDATE_BASKET_MUTATION = gql`
  mutation UpdateBasket($updateBasketId: ID!, $input: BasketInput!) {
    updateBasket(id: $updateBasketId, input: $input) {
      id
      recipient
      deliveryDate
    }
  }
`;

export const DELETE_BASKET_MUTATION = gql`
  mutation DeleteBasket($deleteBasketId: ID!) {
    deleteBasket(id: $deleteBasketId)
  }
`;

export const CREATE_CAMPAIGN = gql`
  mutation CreateCampaign($input: CampaignInput!) {
    createCampaign(input: $input) {
      description
      name
      id
    }
  }
`;
