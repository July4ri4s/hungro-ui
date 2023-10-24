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

const ProductsSelect = ({
  onProductSelect,
  selectedProducts: initialSelectedProducts = [],
}) => {
  // Estado para guardar los productos seleccionados
  const [selectedProducts, setSelectedProducts] = useState(
    initialSelectedProducts
  );

  // Abrir el dropdown del select
  const [isOpen, setIsOpen] = useState(false);

  // Traer los productos de la base de datos
  const { data, loading, error } = useQuery(GET_MY_PRODUCTS);

  //Traer el usuario que está autenticado
  const { data: meData, loading: meLoading, error: meError } = useQuery(GET_ME);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // De la organización loggeada, su Id
  const myOrgId = meData.getMe.organization.id;

  // Filtramos los productos que pertenecen únicamenta a la organización loggeda

  const myProducts = data?.getProducts.filter(
    (product) => product?.organization?.id === myOrgId
  );

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    setSelectedProducts((prev) => {
      const updatedProducts = event.target.checked
        ? [...prev, value]
        : prev.filter((id) => id !== value);
      onProductSelect(updatedProducts);
      return updatedProducts;
    });
  };

  return (
    <div className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-4 ">
      <button type="button" onClick={() => setIsOpen(!isOpen)}>
        Seleccionar Productos
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          {myProducts.map((product) => (
            <div key={product.id} className="my-4">
              <input
                type="checkbox"
                id={`product-${product.id}`}
                value={product.id}
                onChange={handleCheckboxChange}
                checked={selectedProducts.includes(product.id)}
                className="apple-checkbox mx-2"
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
