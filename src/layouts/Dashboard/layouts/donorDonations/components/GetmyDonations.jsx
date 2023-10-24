import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import { useState } from "react";
import { GET_ME } from "../../../../../graphql/queries";


const GET_MY_DONATIONS = gql`
query GetMyDonations {
    getDonations {
      id
      name
      organization {
        id
        name
      }
    }
  }
`;

const { data, loading, error } = useQuery(GET_MY_DONATIONS);

const { data: meData, loading: meLoading, error: meError } = useQuery(GET_ME);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const myDonorId = meData.getMe.donor.id;


  const myDonations = data?.getDonations.filter(
    (donation) => donation?.donor?.id === myDonationId
  );
