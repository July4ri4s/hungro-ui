import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
import ProductsSelect from "./GetMyProducts";
import { useState } from "react";
import { CREATE_BASKET } from "../../../../../graphql/mutations";

const CreateBasketForm = () => {
  //Llamar a la mutación de create basket
  const [createBasket, { loading, error }] = useMutation(CREATE_BASKET);

  //Crear los estados para cada input
  const [deliveryDate, setDeliveryDate] = useState("");
  const [recipient, setRecipient] = useState("");
  const [productIds, setProductIds] = useState("");

  //Crear la función para hacer submit del formulario
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const input = {
      productIds,
      deliveryDate,
      recipient,
    };

    try {
      await createBasket({ variables: { input } });
    } catch (error) {
      console.error("Error al crear la canasta:", error);
    }
  };

  const handleProductsChange = (selectedProductIds) => {
    setProductIds(selectedProductIds);
  };
  return (
    <div className="m-auto flex w-54">
      <form onSubmit={handleFormSubmit}>
        <ProductsSelect
          name="products"
          onProductSelect={handleProductsChange}
        />
        <input
          type="text"
          name="recipient"
          placeholder="Destinatario"
          required
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
        />
        <input
          type="date"
          name="deliveryDate"
          required
          value={deliveryDate}
          onChange={(e) => setDeliveryDate(e.target.value)}
        />
        <button type="submit">Crear canasta</button>
      </form>
    </div>
  );
};

export default CreateBasketForm;
