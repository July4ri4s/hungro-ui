import React, { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_PRODUCT_MUTATION } from "../../../../../graphql/mutations";

const EditProductModal = ({ show, onClose, product }) => {
  const [updateProduct, { loading, error }] = useMutation(
    UPDATE_PRODUCT_MUTATION
  );

  const [formData, setFormData] = useState({
    name: product?.name,
    category: product?.category,
    expirationDate: product?.expirationDate,
    quantityNeeded: product?.quantityNeeded,
    quantityDonated: product?.quantityDonated,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await updateProduct({
      variables: { updateProductId: product.id, input: formData },
    });

    onClose();
  };

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name,
        category: product.category,
        expirationDate: product.expirationDate,
        quantityNeeded: product.quantityNeeded,
        quantityDonated: product.quantityDonated,
      });
    }
  }, [product]);

  return (
    show && (
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto">
        <div className="relative w-full h-full max-w-2xl px-4 md:h-auto">
          <div className="relative bg-white rounded-lg shadow-2xl">
            {/* <!-- Modal header --> */}
            <div className="flex items-start justify-between p-5 border-b rounded-t">
              <h3 className="text-xl font-semibold">Editar usuario</h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                onClick={onClose}
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
                      Nombre del Producto
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
                      htmlFor="category"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Categoría
                    </label>
                    <input
                      type="text"
                      name="category"
                      id="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="mt-1 p-2 w-full border rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="expirationDate"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Fecha de Expiración
                    </label>
                    <input
                      type="date"
                      name="expirationDate"
                      id="expirationDate"
                      value={formData.expirationDate}
                      onChange={handleChange}
                      className="mt-1 p-2 w-full border rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="quantityNeeded"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Cantidad Necesitada
                    </label>
                    <input
                      type="number"
                      name="quantityNeeded"
                      id="quantityNeeded"
                      value={formData.quantityNeeded}
                      onChange={handleChange}
                      className="mt-1 p-2 w-full border rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="quantityDonated"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Cantidad Donada
                    </label>
                    <input
                      type="number"
                      name="quantityDonated"
                      id="quantityDonated"
                      value={formData.quantityDonated}
                      onChange={handleChange}
                      className="mt-1 p-2 w-full border rounded-md"
                    />
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="text-white bg-[#376543] hover:bg-[#376543]00 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5   focus:outline-none m-4"
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

export default EditProductModal;
