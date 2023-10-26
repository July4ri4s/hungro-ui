import React, { useState } from "react";

const Header = ({ setShowModal, searchTerm, onSearchChange }) => {
  return (
    <div className="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5  ">
      <div className="w-full mb-1">
        <div className="mb-4">
          <nav className="flex mb-5" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 text-sm font-medium md:space-x-2">
              <li className="inline-flex items-center">
                <a
                  href="#"
                  className="inline-flex items-center text-gray-700 hover:text-primary-600  "
                >
                  <svg
                    className="w-5 h-5 mr-2.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                  </svg>
                  Inicio
                </a>
              </li>
              <li>
                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <a
                    href="#"
                    className="ml-1 text-gray-700 hover:text-primary-600 md:ml-2  "
                  >
                    Campañas
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span
                    className="ml-1 text-gray-400 md:ml-2 "
                    aria-current="page"
                  >
                    Crear Campañas
                  </span>
                </div>
              </li>
            </ol>
          </nav>

          <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl ">
            Campañas{" "}
          </h1>
        </div>
        <div className="items-center justify-between block sm:flex md:divide-x md:divide-gray-100 ">
          <div className="flex items-center mb-4 sm:mb-0">
            <form className="sm:pr-3" action="#" method="GET">
              <label htmlFor="products-search" className="sr-only">
                Buscar
              </label>
              <div className="relative w-48 mt-1 sm:w-64 xl:w-96">
                <input
                  type="text"
                  name="email"
                  id="products-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5    "
                  placeholder="Buscar"
                  value={searchTerm}
                  onChange={onSearchChange}
                />
              </div>
            </form>
            <div className="flex items-center w-full sm:justify-end">
              <div className="flex pl-2 space-x-1"></div>
            </div>
          </div>
          <button
            id="createCampaignButton"
            className="text-white bg-[#376543] hover:bg-[#1b7a2e] focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5   focus:outline-none "
            type="button"
            data-drawer-target="drawer-create-campaign-default"
            data-drawer-show="drawer-create-campaign-default"
            aria-controls="drawer-create-campaign-default"
            data-drawer-placement="right"
            onClick={() => setShowModal(true)}
          >
            Añadir Campaña
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
