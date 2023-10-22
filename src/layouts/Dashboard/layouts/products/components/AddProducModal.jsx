import React, { useState } from "react";
import { CREATE_PRODUCT_MUTATION } from "../../../../../graphql/mutations";
import { useMutation } from "@apollo/client";

const AddProducModal = ({ close, refetch }) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [quantityDonated, setQuantityDonated] = useState(0);
  const [quantityNeeded, setQuantityNeeded] = useState(0);
  const [message, setMessage] = useState(null);

  const [createProduct, { loading, error }] = useMutation(
    CREATE_PRODUCT_MUTATION,
    {
      onCompleted: () => {
        refetch(); // Refetch la tabla de productos
        close(); // Cierra el modal
      },
    }
  );

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
  const handleSubmit = async (e) => {
    e.preventDefault();
    const input = {
      name,
      category,
      expirationDate,
      quantityDonated: parseInt(quantityDonated),
      quantityNeeded: parseInt(quantityNeeded),
    };

    try {
      setMessage("Se ha creado la canasta exitosamente");
      await createProduct({ variables: { input } });
    } catch (error) {
      console.error("Error al crear el producto:", error.message);
    }
  };

  return (
    <>
      {message && showMessage()}
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto  ">
        <div className="relative w-full h-full max-w-2xl px-4 md:h-auto ">
          {/* <!-- Modal content --> */}
          <div className="relative bg-white rounded-lg shadow-custom">
            {/* <!-- Modal header --> */}
            <div className="flex items-start justify-between p-5 border-b rounded-t">
              <h3 className="text-xl font-semibold">Crear producto</h3>
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
                      Nombre{" "}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={name}
                      id="name"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                      placeholder="Banano"
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="category"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Categoría
                    </label>
                    <input
                      type="text"
                      name="category"
                      value={category}
                      id="category"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                      placeholder="No perecedero"
                      onChange={(e) => setCategory(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Fecha de expiración
                    </label>
                    <input
                      type="date"
                      name="expirationDate"
                      value={expirationDate}
                      id="expirationDate"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                      placeholder="2023-02-12"
                      onChange={(e) => setExpirationDate(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="quantityDonated"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Cantidad donado al día de hoy
                    </label>
                    <input
                      type="number"
                      name="quantityDonated"
                      value={quantityDonated}
                      id="quantityDonated"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                      placeholder="10"
                      onChange={(e) => setQuantityDonated(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="quantityNeeded"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Cantidad necesitada{" "}
                    </label>
                    <input
                      type="number"
                      name="quantityNeeded"
                      value={quantityNeeded}
                      id="quantityNeeded"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                      placeholder="30"
                      onChange={(e) => setQuantityNeeded(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <button
                  id="createProductButton"
                  className="text-white bg-[#376543] hover:bg-[#376543]00 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5   focus:outline-none my-4"
                  type="submit"
                  data-drawer-target="drawer-create-product-default"
                  data-drawer-show="drawer-create-product-default"
                  aria-controls="drawer-create-product-default"
                  data-drawer-placement="right"
                >
                  Crear
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* <div
        className="fixed top-0 right-0 z-40 w-full h-screen max-w-xs p-4 overflow-y-auto transition-transform translate-x-full bg-white "
        tabIndex="-1"
        aria-labelledby="drawer-label"
        aria-hidden="true"
      >
        <h5
          id="drawer-label"
          className="inline-flex items-center mb-6 text-sm font-semibold text-gray-500 uppercase "
        >
          New Product
        </h5>
        <button
          type="button"
          data-drawer-dismiss="drawer-create-product-default"
          aria-controls="drawer-create-product-default"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center  "
        >
          <svg
            aria-hidden="true"
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
          <span className="sr-only">Close menu</span>
        </button>
        <form action="#">
          <div className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Name
              </label>
              <input
                type="text"
                name="title"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5      "
                placeholder="Type product name"
                required=""
                onChange={() => ""}
              />
            </div>

            <div>
              <label
                htmlFor="price"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Price
              </label>
              <input
                type="number"
                name="price"
                id="price"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5      "
                placeholder="$2999"
                required=""
                onChange={() => ""}
              />
            </div>
            <div>
              <label
                htmlFor="category-create"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Technology
              </label>
              <select
                id="category-create"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5      "
              >
                <option onChange={() => ""}>Select category</option>
                <option value="FL" onChange={() => ""}>
                  Hungro
                </option>
                <option value="RE" onChange={() => ""}>
                  React
                </option>
                <option value="AN" onChange={() => ""}>
                  Angular
                </option>
                <option value="VU" onChange={() => ""}>
                  Vue
                </option>
              </select>
            </div>
            <div>
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Description
              </label>
              <textarea
                id="description"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500      "
                placeholder="Enter event description here"
                onChange={() => ""}
              ></textarea>
            </div>
            <div>
              <label
                htmlFor="discount-create"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Discount
              </label>
              <select
                id="discount-create"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5      "
              >
                <option onChange={() => ""}>No</option>
                <option value="5" onChange={() => ""}>
                  5%
                </option>
                <option value="10" onChange={() => ""}>
                  10%
                </option>
                <option value="20" onChange={() => ""}>
                  20%
                </option>
                <option value="30" onChange={() => ""}>
                  30%
                </option>
                <option value="40" onChange={() => ""}>
                  40%
                </option>
                <option value="50" onChange={() => ""}>
                  50%
                </option>
              </select>
            </div>
            <div className="bottom-0 left-0 flex justify-center w-full pb-4 space-x-4 md:px-4 md:absolute">
              <button
                type="submit"
                className="text-white w-full justify-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center   "
              >
                Add product
              </button>
              <button
                type="button"
                data-drawer-dismiss="drawer-create-product-default"
                aria-controls="drawer-create-product-default"
                className="inline-flex w-full justify-center text-gray-500 items-center bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10     "
                onClick={close}
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 -ml-1 sm:mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div> */}
    </>
  );
};

export default AddProducModal;
