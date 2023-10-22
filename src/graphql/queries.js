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
      id
      name
      category
      expirationDate
      quantityDonated
      quantityNeeded
      organization {
        campus
      }
    }
  }
`;

export const GET_DONATIONS = gql`
  query Query {
    getDonations {
      donor {
        name
        id
      }
      product {
        name
        category
      }
      organization {
        id
      }
      donationDate
      deliveryMethod
      address
      organizationCampus
      id
      quantity
    }
  }
`;
 export const GET_CAMPAIGNS =gql`
query GetCampaigns {
  getCampaigns {
    name
    description
    organization {
      name
    }
    
  }
}
 `;
