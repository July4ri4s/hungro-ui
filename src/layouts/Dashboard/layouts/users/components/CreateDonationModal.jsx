import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_DONATION_MUTATION } from "../../../../../graphql/mutations";

// Componente Modal
const CreateDonationModal = ({ product, closeModal }) => {
  const [donationDate, setDonationDate] = useState("");
  const [deliveryMethod, setDeliveryMethod] = useState("");

  const [organizationCampus, setOrganizationCampus] = useState("");
  const [quantity, setQuantity] = useState(1);

  const [address, setAddress] = useState("");

  const [createDonation] = useMutation(CREATE_DONATION_MUTATION);

  const orgCampus = product?.organization?.campus;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const input = {
      productId: product.id,
      organizationCampus,
      donationDate,
      quantity: parseInt(quantity),
      deliveryMethod,
      address,
    };

    try {
      await createDonation({ variables: { input } });
      closeModal(); // Cierra el modal
    } catch (error) {
      console.error("Error al crear la donación:", error.message);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto  ">
      <div className="relative w-full h-full max-w-2xl px-4 md:h-auto ">
        {/* <!-- Modal content --> */}

        <div className="relative bg-white rounded-lg shadow-custom">
          {/* <!-- Modal header --> */}
          <div className="flex items-start justify-between p-5 border-b rounded-t">
            <h3 className="text-xl font-semibold">
              Donar este producto: {product.name}{" "}
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
              onClick={closeModal}
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
                    Fecha{" "}
                  </label>
                  <input
                    type="date"
                    name="name"
                    value={donationDate}
                    id="name"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                    placeholder="Banano"
                    onChange={(e) => setDonationDate(e.target.value)}
                    required
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Cantidad
                  </label>
                  <input
                    type="number"
                    name="quantity"
                    value={quantity}
                    id="quantity"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                    placeholder="10"
                    onChange={(e) => setQuantity(e.target.value)}
                    required
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Metódo de entrega{" "}
                  </label>
                  {/* <input
                    type="text"
                    name="deliveryMethod"
                    value={deliveryMethod}
                    id="deliveryMethod"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                    placeholder="Personal o a domicilio"
                    onChange={(e) => setDeliveryMethod(e.target.value)}
                    required
                  /> */}
                  <select
                    value={deliveryMethod}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                    onChange={(e) => setDeliveryMethod(e.target.value)}
                  >
                    <option key="" value="">
                      Seleccione una opción
                    </option>
                    <option key="Personal" value="Personal">
                      Personal
                    </option>
                    <option key="A domicilio" value="A domicilio">
                      A domicilio
                    </option>
                  </select>
                </div>

                {deliveryMethod === "Personal" ? (
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Seleccione una sede:
                    </label>
                    <select
                      value={organizationCampus}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                      onChange={(e) => setOrganizationCampus(e.target.value)}
                    >
                      {orgCampus.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                ) : (
                  <></>
                )}

                {deliveryMethod === "A domicilio" ? (
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Dirección de entrega{" "}
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={address}
                      id="address"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                      placeholder="100 N y 175 E"
                      onChange={(e) => setAddress(e.target.value)}
                      required
                    />
                  </div>
                ) : (
                  <></>
                )}
              </div>
              <button
                id="createProductButton"
                className="text-white bg-[#376543] hover:bg-[#1b7a2e] focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5   focus:outline-none my-4"
                type="submit"
                data-drawer-target="drawer-create-product-default"
                data-drawer-show="drawer-create-product-default"
                aria-controls="drawer-create-product-default"
                data-drawer-placement="right"
              >
                Donar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateDonationModal;
