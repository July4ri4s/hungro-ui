import React from "react";
import { GET_DONATIONS, GET_ME } from "../../../../../graphql/queries";
import { formatDateString } from "../../../../../utils/FormatDate";

import { useQuery } from "@apollo/client";

const DonationsTable = ({ refetch, searchTerm }) => {
  const { data: meData, loading: meLoading, error: meError } = useQuery(GET_ME);
  const { data, loading, error } = useQuery(GET_DONATIONS);

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

  const donorId = meData?.getMe?.donor?.id;

  const myDonations = data?.getDonations?.filter(
    (donation) =>
      donation.donor.id === donorId &&
      donation.product.name.toLowerCase().includes(searchTerm.toLowerCase())
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
                    Producto
                  </th>
                  <th
                    scope="col"
                    className="p-4 text-xs font-medium text-left text-gray-500 uppercase "
                  >
                    Expiración
                  </th>

                  <th
                    scope="col"
                    className="p-4 text-xs font-medium text-left text-gray-500 uppercase "
                  >
                    Metodo de entrega
                  </th>
                  <th
                    scope="col"
                    className="p-4 text-xs font-medium text-left text-gray-500 uppercase "
                  >
                    Cantidad
                  </th>
                </tr>
              </thead>
              {myDonations &&
                myDonations.map((donation) => (
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

                      <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap ">
                        {donation?.product?.name}
                      </td>
                      <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap ">
                        {formatDateString(donation?.donationDate)}
                      </td>
                      <td className="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs ">
                        {donation?.deliveryMethod}
                      </td>
                      <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap ">
                        {donation?.quantity}
                      </td>
                    </tr>
                  </tbody>
                ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationsTable;
