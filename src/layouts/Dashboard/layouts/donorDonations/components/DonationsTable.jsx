import React from "react";
import { GET_DONATIONS, GET_ME } from "../../../../../graphql/queries";
import { formatDateString } from "../../../../../utils/FormatDate";

import { useQuery } from "@apollo/client";





const DonationsTable = ({refetch}) => {

  const { data: meData, loading: meLoading, error: meError } = useQuery(GET_ME);
  const { data, loading, error } = useQuery(GET_DONATIONS);

  
  
  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const donorId = meData?.getMe?.donor?.id;

  const myDonations = data?.getDonations?.filter(
    (donation) => donation.donor.id === donorId
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
