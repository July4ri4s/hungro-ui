import React, { useState } from "react";
import EditUserModal from "./EditUserModal";
import { useQuery } from "@apollo/client";
import { GET_DONORS } from "../../../../../graphql/queries";

const UsersTable = ({ setShowModal }) => {
  const { data, loading, error } = useQuery(GET_DONORS);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden shadow">
              <table className="min-w-full divide-y divide-gray-200 table-fixed">
                <thead className="bg-gray-100">
                  <tr>
                    <th scope="col" className="p-4">
                      <div className="flex items-center">
                        <input
                          id="checkbox-all"
                          aria-describedby="checkbox-1"
                          type="checkbox"
                          className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                        />
                        <label htmlFor="checkbox-all" className="sr-only">
                          checkbox
                        </label>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-xs font-medium text-left text-gray-500 uppercase"
                    >
                      Nombre
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-xs font-medium text-left text-gray-500 uppercase"
                    >
                      Correo
                    </th>
                  </tr>
                </thead>

                {data?.getDonors &&
                  data?.getDonors?.map((user, key) => (
                    <tbody
                      className="bg-white divide-y divide-gray-200"
                      key={key}
                    >
                      <tr className="hover:bg-gray-100">
                        <td className="w-4 p-4">
                          <div className="flex items-center">
                            <input
                              id="checkbox-{{ .id }}"
                              aria-describedby="checkbox-1"
                              type="checkbox"
                              className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                            />
                            <label
                              htmlFor="checkbox-{{ .id }}"
                              className="sr-only"
                            >
                              checkbox
                            </label>
                          </div>
                        </td>
                        <td className="flex items-center p-4 mr-12 space-x-6 whitespace-nowrap">
                          {/* <img
                            className="w-10 h-10 rounded-full"
                            src="/images/users/{{ .avatar }}"
                            alt="Hola avatar"
                          /> */}
                          <div className="text-sm font-normal text-gray-500">
                            <div className="text-base font-semibold text-gray-900">
                              {user.name}
                            </div>
                            <div className="text-sm font-normal text-gray-500">
                              Donante
                            </div>
                          </div>
                        </td>
                        <td className="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs">
                          {user.email}
                        </td>
                        <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap">
                          {user.donation && user?.donations[0].product?.name}
                        </td>

                        <td className="p-4 space-x-2 whitespace-nowrap">
                          {/*<button
                            type="button"
                            data-modal-toggle="edit-user-modal"
                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-[#376543] hover:bg-primary-800 focus:ring-4 focus:ring-primary-300"
                            onClick={() => setShowModal(true)}
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
                            Editar usuario
                        </button>*/}

                          <button
                            type="button"
                            data-modal-toggle="delete-user-modal"
                            className="inline-flex items-c`enter px-3 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300"
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
                            Eliminar usuario
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UsersTable;
