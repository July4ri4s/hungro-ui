import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import { GET_ME } from "../../../../../graphql/queries";
import { useState } from "react";

const GET_MY_CAMPAIGNS = gql`
  query GetMyCampaigns {
    getCampaigns {
      id
      name
      organization {
        id
      }
    }
  }
`;

const GetCampaigns= () => {
  // Traer los productos de la base de datos
  const { data, loading, error } = useQuery(GET_MY_CAMPAIGNS);

  //Traer el usuario que está autenticado
  const { data: meData, loading: meLoading, error: meError } = useQuery(GET_ME);

  // De la organización loggeada, su Id
  const myOrgId = meData.getMe.organization.id;

  // Filtramos los productos que pertenecen únicamenta a la organización loggeda

  const myCampaigns = data?.getCampaigns.filter(
    (campaign) => campaign?.organization?.id === myOrgId
  );



  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>Seleccionar Productos</button>
      {isOpen && (
        <div className="dropdown-menu">
          {myProducts.map((product) => (
            <div key={product.id}>
              <input
                type="checkbox"
                id={`product-${product.id}`}
                value={product.id}
                onChange={handleCheckboxChange}
              />
              <label htmlFor={`product-${product.id}`}>{product.name}</label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GetCampaigns;
