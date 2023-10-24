import React, { useState } from "react";
import { GET_BASKETS, GET_ME } from "../../../../../graphql/queries";
import { useMutation, useQuery } from "@apollo/client";
import { formatDateString } from "../../../../../utils/FormatDate";
import EditBasketModal from "./EditBasketModal";
import { DELETE_BASKET_MUTATION } from "../../../../../graphql/mutations";

const BasketsTable = ({ refetch }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedBasket, setSelectedBasket] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [basketToDelete, setBasketToDelete] = useState(null);
  const { data: meData, loading: meLoading, error: meError } = useQuery(GET_ME);
  const [deleteBasket] = useMutation(DELETE_BASKET_MUTATION);

  const { data, loading, error } = useQuery(GET_BASKETS);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const organizationId = meData?.getMe?.organization?.id;

  const myBaskets = data?.getBaskets?.filter(
    (basket) => basket.organization.id === organizationId
  );

  const handleUpdateClick = (basket) => {
    setSelectedBasket(basket);
    setShowEditModal(true);
  };

  const handleCloseModal = () => {
    setShowEditModal(false);
    setSelectedBasket(null);
  };

  const handleDeleteClick = (basketId) => {
    setShowDeleteModal(true);
    setBasketToDelete(basketId);
  };

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
    setBasketToDelete(null);
  };

  const handleConfirmDelete = async () => {
    await deleteBasket({ variables: { deleteBasketId: basketToDelete } });
    refetch();
    handleCloseDeleteModal();
  };
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
                    Beneficiario
                  </th>
                  <th
                    scope="col"
                    className="p-4 text-xs font-medium text-left text-gray-500 uppercase "
                  >
                    Fecha de entrega
                  </th>
                  <th
                    scope="col"
                    className="p-4 text-xs font-medium text-left text-gray-500 uppercase "
                  >
                    Organizacion
                  </th>
                </tr>
              </thead>

              {myBaskets &&
                myBaskets.map((basket) => (
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
                          <label
                            htmlFor="checkbox-{{ .id }}"
                            className="sr-only"
                          >
                            checkbox
                          </label>
                        </div>
                      </td>
                      <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap ">
                        {basket?.recipient}
                      </td>
                      <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap ">
                        {formatDateString(basket?.deliveryDate)}
                      </td>
                      <td className="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs "></td>

                      <td className="p-4 space-x-2 whitespace-nowrap">
                        <button
                          onClick={() => handleUpdateClick(product)}
                          type="button"
                          id="updateProductButton"
                          data-drawer-target="drawer-update-product-default"
                          data-drawer-show="drawer-update-product-default"
                          aria-controls="drawer-update-product-default"
                          data-drawer-placement="right"
                          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-[#376543] focus:ring-4 focus:ring-primary-300   "
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
                          Editar
                        </button>
                        <button
                          onClick={() => handleDeleteClick(basket.id)}
                          type="button"
                          id="deleteProductButton"
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

              <EditBasketModal
                show={showEditModal}
                onClose={handleCloseModal}
                basket={selectedBasket}
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

export default BasketsTable;
