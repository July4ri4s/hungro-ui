import { useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { GET_PRODUCTS } from "../../../../../graphql/queries";
import EditProductModal from "./EditProductModal";
import { DELETE_PRODUCT_MUTATION } from "../../../../../graphql/mutations";

const ProductsTable = ({ refetch, searchTerm }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { data, loading, error } = useQuery(GET_PRODUCTS);
  const [deleteProduct] = useMutation(DELETE_PRODUCT_MUTATION);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);

  if (loading)
    return (
      <div className="flex h-screen justify-center items-center">
        <div role="status">
          <svg
            aria-hidden="true"
            className="inline w-8 h-8 mr-2 text-gray-200 animate-spin  fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Cargando...</span>
        </div>
      </div>
    );
  if (error) return <p>Error: {error.message}</p>;

  const handleUpdateClick = (product) => {
    setSelectedProduct(product);
    setShowEditModal(true);
  };

  const handleCloseModal = () => {
    setShowEditModal(false);
    setSelectedProduct(null);
  };

  const handleDeleteClick = (productId) => {
    setShowDeleteModal(true);
    setProductToDelete(productId);
  };

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
    setProductToDelete(null);
  };

  const handleConfirmDelete = async () => {
    await deleteProduct({ variables: { deleteProductId: productToDelete } });
    refetch();
    handleCloseDeleteModal();
  };

  const filteredProduct = data?.getProducts?.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full align-middle">
          <div className="overflow-hidden shadow">
            <table className="min-w-full divide-y divide-gray-200 table-fixed ">
              <thead className="bg-gray-100 ">
                <tr>
                  <th scope="col" className="p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-all"
                        aria-describedby="checkbox-1"
                        type="checkbox"
                        className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300    "
                      />
                      <label htmlFor="checkbox-all" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="p-4 text-xs font-medium text-left text-gray-500 uppercase "
                  >
                    Producto{" "}
                  </th>
                  <th
                    scope="col"
                    className="p-4 text-xs font-medium text-left text-gray-500 uppercase "
                  >
                    Categoría
                  </th>

                  <th
                    scope="col"
                    className="p-4 text-xs font-medium text-left text-gray-500 uppercase "
                  >
                    Cantidad Necesitada
                  </th>
                  <th
                    scope="col"
                    className="p-4 text-xs font-medium text-left text-gray-500 uppercase "
                  >
                    Cantidad Recibida
                  </th>
                </tr>
              </thead>

              {filteredProduct.map((product) => (
                <tbody className="bg-white divide-y divide-gray-200  ">
                  <tr className="hover:bg-gray-100 ">
                    <td className="w-4 p-4">
                      <div className="flex items-center">
                        <input
                          id="checkbox-{{ .id }}"
                          aria-describedby="checkbox-1"
                          type="checkbox "
                          className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300    "
                        />
                        <label htmlFor="checkbox-{{ .id }}" className="sr-only">
                          checkbox
                        </label>
                      </div>
                    </td>

                    <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap ">
                      {product.name}
                    </td>
                    <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap ">
                      {product.category}
                    </td>
                    <td className="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs ">
                      {product.quantityNeeded}
                    </td>
                    <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap ">
                      {product.quantityDonated}
                    </td>

                    <td className="p-4 space-x-2 whitespace-nowrap">
                      <button
                        onClick={() => handleUpdateClick(product)}
                        type="button"
                        id="updateProductButton"
                        data-drawer-target="drawer-update-product-default"
                        data-drawer-show="drawer-update-product-default"
                        aria-controls="drawer-update-product-default"
                        data-drawer-placement="right"
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-[#376543] hover:bg-[#1b7a2e] focus:ring-4 focus:ring-primary-300   "
                      >
                        <svg
                          className="w-4 h-4 mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path>
                          <path
                            fillRule="evenodd"
                            d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        Actualizar
                      </button>
                      <button
                        type="button"
                        id="deleteProductButton"
                        onClick={() => handleDeleteClick(product.id)}
                        data-drawer-target="drawer-delete-product-default"
                        data-drawer-show="drawer-delete-product-default"
                        aria-controls="drawer-delete-product-default"
                        data-drawer-placement="right"
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300 "
                      >
                        <svg
                          className="w-4 h-4 mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        Eliminar
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))}

              <EditProductModal
                show={showEditModal}
                onClose={handleCloseModal}
                product={selectedProduct}
              />
            </table>
          </div>
        </div>
      </div>

      {showDeleteModal && (
        <div
          id="deleteModal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto  rounded-lg  shadow-2xl "
        >
          <div class="relative p-4 w-full max-w-md h-full md:h-auto shadow-2xl">
            <div class="relative p-4 text-center bg-white rounded-lg shadow-2xl">
              <button
                onClick={handleCloseDeleteModal}
                type="button"
                class="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center "
                data-modal-toggle="deleteModal"
              >
                <svg
                  aria-hidden="true"
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="sr-only">Cerrar</span>
              </button>
              <svg
                class="text-gray-400 dark:text-gray-500 w-11 h-11 mb-3.5 mx-auto"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <p class="mb-4 text-gray-500">
                ¿Estás seguro que deseas eliminar este producto?
              </p>

              <div className="flex justify-center items-center space-x-4">
                <button
                  onClick={handleCloseDeleteModal}
                  type="button"
                  className="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 "
                >
                  No, cancelar
                </button>
                <button
                  onClick={handleConfirmDelete}
                  type="submit"
                  className="py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 "
                >
                  Sí, estoy seguro
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsTable;
