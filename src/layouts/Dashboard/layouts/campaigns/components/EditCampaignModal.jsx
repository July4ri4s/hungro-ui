import React, { useEffect, useState } from "react";
import { UPDATE_CAMPAIGN_MUTATION } from "../../../../../graphql/mutations";
import { useMutation } from "@apollo/client";
import ProductsSelect from "../../baskets/components/GetMyProducts";

const EditCampaignModal = ({ show, onClose, campaign }) => {
  //Paso 1: declarar la mutación
  const [updateCampaign, { loading, error }] = useMutation(
    UPDATE_CAMPAIGN_MUTATION
  );

  const [productIds, setProductIds] = useState(campaign?.productIds || []);
  //Paso 2: declarar los datos del formulatio

  const [formData, setFormData] = useState({
    name: campaign?.name,
    description: campaign?.description,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const input = {
      ...formData,
      productIds,
    };

    const { data } = await updateCampaign({
      variables: { updateCampaignId: campaign.id, input },
    });

    onClose();
  };

  useEffect(() => {
    if (campaign) {
      setFormData({
        name: campaign.name,
        description: campaign.description,
      });
    }
  }, [campaign]);

  const handleProductsChange = (selectedProductIds) => {
    setProductIds(selectedProductIds);
  };

  return (
    show && (
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto">
        <div className="relative w-full h-full max-w-2xl px-4 md:h-auto">
          <div className="relative bg-white rounded-lg shadow-2xl">
            {/* <!-- Modal header --> */}
            <div className="flex items-start justify-between p-5 border-b rounded-t">
              <h3 className="text-xl font-semibold">Editar campaña</h3>
              <button
                onClick={onClose}
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
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
            <div className="p-6 space-y-6">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Nombre de la campaña
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-1 p-2 w-full border rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="description"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Descripción
                    </label>
                    <input
                      type="text"
                      name="description"
                      id="description"
                      value={formData.description}
                      onChange={handleChange}
                      className="mt-1 p-2 w-full border rounded-md"
                    />
                  </div>
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <ProductsSelect
                    name="products"
                    onProductSelect={handleProductsChange}
                    selectedProducts={productIds}
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="text-white bg-[#376543] hover:bg-[#1b7a2e] focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5   focus:outline-none m-4"
                  >
                    Actualizar
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={onClose}
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default EditCampaignModal;
