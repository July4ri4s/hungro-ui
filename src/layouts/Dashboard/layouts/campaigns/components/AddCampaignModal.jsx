import React, { useState } from "react";
import { CREATE_CAMPAIGN } from "../../../../../graphql/mutations";
import { useMutation } from "@apollo/client";
import ProductsSelect from "../../baskets/components/GetMyProducts";

const AddCampaignModal = ({ close }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [productIds, setProductIds] = useState("");

  const [createCampaign, { loading, error }] = useMutation(CREATE_CAMPAIGN, {
    onCompleted: () => {
      // refetch(); // Refetch la tabla de productos
      close(); // Cierra el modal
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const input = {
      productIds,
      name,
      description,
    };

    try {
      await createCampaign({ variables: { input } });
    } catch (error) {
      console.error("Error al crear la campaña:", error.message);
    }
  };
  const handleProductsChange = (selectedProductIds) => {
    setProductIds(selectedProductIds);
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto  ">
        <div className="relative w-full h-full max-w-2xl px-4 md:h-auto ">
          {/* <!-- Modal content --> */}
          <div className="relative bg-white rounded-lg shadow-custom">
            {/* <!-- Modal header --> */}
            <div className="flex items-start justify-between p-5 border-b rounded-t">
              <h3 className="text-xl font-semibold">Crear campaña</h3>
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
                      placeholder="Nombre de la campaña"
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="category"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Descripción
                    </label>
                    <input
                      type="text"
                      name="description"
                      value={description}
                      id="category"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                      placeholder="Descripción de la campaña"
                      onChange={(e) => setDescription(e.target.value)}
                      required
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
                  id="createCampaignButton"
                  className="text-white bg-[#376543] hover:bg-[#376543]00 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5   focus:outline-none my-4"
                  type="submit"
                  data-drawer-target="drawer-create-campaign-default"
                  data-drawer-show="drawer-create-product-default"
                  aria-controls="drawer-create-product-default"
                  data-drawer-placement="right"
                >
                  Crear Campaña
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCampaignModal;
