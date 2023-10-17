import React from "react";
import { GET_PRODUCTS } from "../../../../../graphql/queries";
import { useQuery } from "@apollo/client";

const DonorProducts = () => {
  const { data, loading, error } = useQuery(GET_PRODUCTS);

  console.log(data);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error.message}</p>;

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
              <div className="mb-4 lg:mb-0 mx-10 my-3">
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
                  <a href="#">
                    <img
                      className="rounded-t-lg"
                      src="/docs/images/blog/image-1.jpg"
                      alt=""
                    />
                  </a>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                        {product.name}
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Categoría del producto: {product.category}
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#587E4C] rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300"
                    >
                      Donar
                      <svg
                        className="w-3.5 h-3.5 ml-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default DonorProducts;
