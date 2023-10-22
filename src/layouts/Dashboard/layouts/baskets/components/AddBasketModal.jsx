import React, { useState } from "react";
import { CREATE_BASKET } from "../../../../../graphql/mutations";
import { useMutation } from "@apollo/client";
import ProductsSelect from "./GetMyProducts";

const AddBasketModal = ({ close }) => {
  const [productIds, setProductIds] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [recipient, setRecipient] = useState("");

  const [message, setMessage] = useState(null);

  const showMessage = () => {
    // let imageSource =
    //   message !== "Se cambió la contraseña correctamente!" ? loginerror : login;

    return (
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: "9999",
          backgroundColor: "#ffffff",
          padding: "20px",
          textAlign: "center",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          maxWidth: "90%",
          width: "400px",
        }}
      >
        <div className="container">
          <div className="content" id="popup">
            {/* <img
              src={imageSource}
              alt="Banda CEDES Don Bosco"
              style={{
                width: "60%",
                display: "block",
                margin: "0 auto",
                marginBottom: "1rem",
              }}
            /> */}
            <p style={{ marginBottom: "1rem" }}>{message}</p>
          </div>
        </div>
      </div>
    );
  };

  const [createBasket, { loading, error }] = useMutation(CREATE_BASKET, {
    onCompleted: () => {
      // refetch(); // Refetch la tabla de productos
      close(); // Cierra el modal
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const input = {
      productIds,
      deliveryDate,
      recipient,
    };

    try {
      await createBasket({ variables: { input } });
      setMessage("Se ha creado la canasta exitosamente");
    } catch (error) {
      // setMessage("Error al crear la canasta");
      console.error("Error al crear la canasta:", error.message);
    }
  };
  const handleProductsChange = (selectedProductIds) => {
    setProductIds(selectedProductIds);
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto  ">
        {message && showMessage()}
        <div className="relative w-full h-full max-w-2xl px-4 md:h-auto ">
          {/* <!-- Modal content --> */}
          <div className="relative bg-white rounded-lg shadow-custom">
            {/* <!-- Modal header --> */}
            <div className="flex items-start justify-between p-5 border-b rounded-t">
              <h3 className="text-xl font-semibold">Crear canasta</h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                onClick={close}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <div className="p-6 space-y-6">
              <form action="#" onSubmit={handleSubmit}>
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Beneficiario{" "}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={recipient}
                      id="name"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                      placeholder="Nombre del beneficiario"
                      onChange={(e) => setRecipient(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="date"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Fecha de entrega
                    </label>
                    <input
                      type="date"
                      name="deliveryDate"
                      required
                      value={deliveryDate}
                      onChange={(e) => setDeliveryDate(e.target.value)}
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <ProductsSelect
                      name="products"
                      onProductSelect={handleProductsChange}
                    />
                  </div>
                </div>
                <button
                  id="createBasketButton"
                  className="text-white bg-[#376543] hover:bg-[#376543]00 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5   focus:outline-none my-4"
                  type="submit"
                  data-drawer-target="drawer-create-basket-default"
                  data-drawer-show="drawer-create-basket-default"
                  aria-controls="drawer-create-basket-default"
                  data-drawer-placement="right"
                >
                  Crear Canasta
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddBasketModal;
