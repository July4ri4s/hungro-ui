import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import { GET_ME } from "../../../../../graphql/queries";
import { useState } from "react";

const GET_MY_PRODUCTS = gql`
  query GetMyProducts {
    getProducts {
      id
      name
      organization {
        id
      }
    }
  }
`;

const ProductsSelect = ({ onProductSelect }) => {
  const { data, loading, error } = useQuery(GET_MY_PRODUCTS);
  const { data: meData, loading: meLoading, error: meError } = useQuery(GET_ME);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const myOrgId = meData.getMe.organization.id;
  const myProducts = data?.getProducts.filter(
    (product) => product?.organization?.id === myOrgId
  );

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    if (event.target.checked) {
      setSelectedProducts((prev) => [...prev, value]);
    } else {
      setSelectedProducts((prev) => prev.filter((id) => id !== value));
    }
    onProductSelect(selectedProducts);
  };

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

export default ProductsSelect;
