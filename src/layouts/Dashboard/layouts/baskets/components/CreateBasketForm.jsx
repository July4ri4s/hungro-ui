import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
import ProductsSelect from "./GetMyProducts";
import { useState } from "react";

const CREATE_BASKET = gql`
  mutation CreateBasket($input: BasketInput!) {
    createBasket(input: $input) {
      recipient
      id
      deliveryDate
    }
  }
`;

const CreateBasketForm = () => {
  const [createBasket, { loading, error }] = useMutation(CREATE_BASKET);

  const [deliveryDate, setDeliveryDate] = useState("");
  const [productIds, setProductIds] = useState("");
  const [recipient, setRecipient] = useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const input = {
      productIds,
      deliveryDate,
      recipient,
    };

    console.log("Form Data:", input);
    console.log("productIds", productIds);

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
