import React, { useState } from "react";
import { GET_PRODUCTS } from "../../../../../graphql/queries";
import { useQuery } from "@apollo/client";
import CreateDonationModal from "./CreateDonationModal";

const DonorProducts = () => {
  const [modalProduct, setModalProduct] = useState(null);

  const { data, loading, error } = useQuery(GET_PRODUCTS);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const openModal = (product) => {
    setModalProduct(product);
  };

  const closeModal = () => {
    setModalProduct(null);
  };

  return (
    <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm  sm:p-6 mt-5">
      {/* <!-- Card header --> */}
      <div className="items-center justify-between lg:flex-col">
        <div className="mb-4 lg:mb-0">
          <h3 className="mb-2 text-xl font-bold text-gray-900 ">
            Productos que puedes donar
          </h3>
          <span className="text-base font-normal text-gray-500 ">
            Acá te mostramos una lista de productos que puedes donar
          </span>
        </div>

        <div className="mt-10 flex flex-wrap -mx-1 lg:-mx-4 ">
          {data?.getProducts &&
            data?.getProducts?.map((product) => (
              <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow  m-auto my-5">
                <a href="#">
                  <img
                    className="p-8 rounded-t-lg"
                    src=""
                    alt="product image"
                  />
                </a>
                <div className="px-5 pb-5">
                  <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">
                      Categoría del producto: {product.category}
                    </h5>
                  </a>
                  <div className="flex items-center mt-2.5 mb-5">
                    <svg
                      className="w-4 h-4 text-yellow-300 mr-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 text-yellow-300 mr-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 text-yellow-300 mr-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 text-yellow-300 mr-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 text-gray-200 "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ">
                      5.0
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 ">
                      {product.name}
                    </span>
                    <button
                      id="createProductButton"
                      className="text-white bg-[#587E4C] hover:bg-[#587E4C]00 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5   focus:outline-none "
                      type="button"
                      data-drawer-target="drawer-create-product-default"
                      data-drawer-show="drawer-create-product-default"
                      aria-controls="drawer-create-product-default"
                      data-drawer-placement="right"
                      onClick={() => openModal(product)}
                    >
                      Donar producto
                    </button>
                  </div>
                </div>
              </div>
            ))}

          {modalProduct && (
            <CreateDonationModal
              product={modalProduct}
              closeModal={closeModal}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default DonorProducts;
