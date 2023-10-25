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
export const UPDATE_DONOR_MUTATION = gql`
  mutation Mutation($updateDonorId: ID!, $input: DonorInput) {
    updateDonor(id: $updateDonorId, input: $input) {
      id
      name
      email
      password
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

export const UPDATE_DONATION_MUTATION = gql`
  mutation Mutation($updateDonationId: ID!, $input: DomnationInput!) {
    updateDonation(id: $updateDonationId, input: $input) {
      id
      donationDate
      deliveryMethod
      address
      organizationCampus
      quantity
    }
  }
`;

export const DELETE_DONATION_MUTATION = gql`
  mutation Mutation($deleteDonationId: ID!) {
    deleteDonation(id: $deleteDonationId)
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

export const UPDATE_CAMPAIGN_MUTATION = gql`
  mutation UpdateCampaign($updateCampaignId: ID!, $input: CampaignInput!) {
    updateCampaign(id: $updateCampaignId, input: $input) {
      id
      name
      description
    }
  }
`;

export const DELETE_CAMPAIGN_MUTATION = gql`
  mutation DeleteCampaign($deleteCampaignId: ID!) {
    deleteCampaign(id: $deleteCampaignId)
  }
`;
