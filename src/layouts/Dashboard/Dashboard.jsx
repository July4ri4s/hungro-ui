import React, { useEffect, useState } from "react";
import SideBar from "./components/SideBar";
import NavBar from "./components/NavBar";
import { useQuery } from "@apollo/client";
import { GET_CAMPAIGNS, GET_DONATIONS, GET_ME } from "../../graphql/queries";
import DonorProducts from "./layouts/users/components/DonorProducts";
import { formatDateString } from "../../utils/FormatDate";
import useAuth from "../../utils/useAuth";
import { useNavigate } from "react-router-dom";
import { isAuth } from "../../utils/auth";

const Dashboard = () => {
  isAuth();
  const { data, loading, error } = useQuery(GET_ME, {
    context: {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    },
  });

  const {
    data: donationsData,
    loading: donationsLoading,
    error: donationsError,
  } = useQuery(GET_DONATIONS);

  const {
    data: campaignsData,
    loading: campaignsLoading,
    error: campaignsError,
  } = useQuery(GET_CAMPAIGNS);

  const campaigns = campaignsData?.getCampaigns;

  if (loading) return "Cargando...";
  if (error) return `Error: ${error.message}`;

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const user = data.getMe.donor || data.getMe.organization;

  const myId = data?.getMe?.organization?.id;

  const myDonations = donationsData?.getDonations.filter(
    (donation) => donation?.organization?.id === myId
  );

  const myDonorId = data?.getMe?.donor?.id;

  const myDonorDonations = donationsData?.getDonations.filter(
    (donation) => donation?.donor?.id === myDonorId
  );

  return (
    <>
      <NavBar />
      <div className="flex pt-16 overflow-hidden bg-gray-50 ">
        <SideBar />

        <div
          id="main-content"
          className="relative w-full h-full overflow-y-auto bg-gray-50 lg:ml-64 "
        >
          <main>
            {user.__typename === "Organization" ? (
              <div className="px-4 pt-6">
                <div className="grid gap-4 xl:grid-cols-2 2xl:grid-cols-3">
                  {/* <!-- Main widget --> */}
                  <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2  sm:p-6 ">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex-shrink-0">
                        <span className="text-xl font-bold leading-none text-gray-900 sm:text-2xl ">
                          {user.name}
                        </span>
                        {/* {data?.getDonors?.map((donor, index) => {
                          <>
                            <span className="text-xl font-bold leading-none text-gray-900 sm:text-2xl ">
                              {name}
                            </span>
                            <h1 key={index}>{donor.name}</h1>;
                          </>;
                        })} */}
                        <h3 className="text-base font-light text-gray-500 ">
                          Esta semana
                        </h3>
                      </div>
                    </div>
                    <div id="main-chart"></div>
                    {/* <!-- Card Footer --> */}
                    <div className="flex items-center justify-between pt-3 mt-4 border-t border-gray-200 sm:pt-6 ">
                      <div>
                        <button
                          className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 rounded-lg hover:text-gray-900  "
                          type="button"
                          data-dropdown-toggle="weekly-sales-dropdown"
                        >
                          Últimos 7 días{" "}
                          <svg
                            className="w-4 h-4 ml-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            ></path>
                          </svg>
                        </button>
                        {/* <!-- Dropdown menu --> */}
                        <div
                          className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow  "
                          id="weekly-sales-dropdown"
                        >
                          <div className="px-4 py-3" role="none">
                            <p
                              className="text-sm font-medium text-gray-900 truncate "
                              role="none"
                            >
                              Sep 16, 2021 - Sep 22, 2021
                            </p>
                          </div>
                          <ul className="py-1" role="none">
                            <li>
                              <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100   "
                                role="menuitem"
                              >
                                Yesterday
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100   "
                                role="menuitem"
                              >
                                Today
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100   "
                                role="menuitem"
                              >
                                Últimos 7 días
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100   "
                                role="menuitem"
                              >
                                Last 30 days
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100   "
                                role="menuitem"
                              >
                                Last 90 days
                              </a>
                            </li>
                          </ul>
                          <div className="py-1" role="none">
                            <a
                              href="#"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100   "
                              role="menuitem"
                            >
                              Custom...
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <a
                          href="#"
                          className="inline-flex items-center p-2 text-xs font-medium uppercase rounded-lg text-primary-700 sm:text-sm hover:bg-gray-100  "
                        >
                          Reporte
                          <svg
                            className="w-4 h-4 ml-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 5l7 7-7 7"
                            ></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* <!--Tabs widget --> */}
                  <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm  sm:p-6 ">
                    <h3 className="flex items-center mb-4 text-lg font-semibold text-gray-900 ">
                      Estadísticas de este mes
                      <button
                        data-popover-target="popover-description"
                        data-popover-placement="bottom-end"
                        type="button"
                      >
                        <svg
                          className="w-4 h-4 ml-2 text-gray-400 hover:text-gray-500"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span className="sr-only">Show information</span>
                      </button>
                    </h3>
                    <div
                      data-popover
                      id="popover-description"
                      role="tooltip"
                      className="absolute z-10 invisible inline-block text-sm font-light text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 w-72   "
                    >
                      <div className="p-3 space-y-2">
                        <h3 className="font-semibold text-gray-900 ">
                          Statistics
                        </h3>
                        <p>
                          Statistics is a branch of applied mathematics that
                          involves the collection, description, analysis, and
                          inference of conclusions from quantitative data.
                        </p>
                        <a
                          href="#"
                          className="flex items-center font-medium text-primary-600   hover:text-primary-700"
                        >
                          Read more{" "}
                          <svg
                            className="w-4 h-4 ml-1"
                            aria-hidden="true"
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
                        </a>
                      </div>
                      <div data-popper-arrow></div>
                    </div>
                    <div className="sm:hidden">
                      <label htmlFor="tabs" className="sr-only">
                        Select tab
                      </label>
                      <select
                        id="tabs"
                        className="bg-gray-50 border-0 border-b border-gray-200 text-gray-900 text-sm rounded-t-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5      "
                      >
                        <option>Statistics</option>
                        <option>Services</option>
                        <option>FAQ</option>
                      </select>
                    </div>
                    <ul
                      className="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex  "
                      id="fullWidthTab"
                      data-tabs-toggle="#fullWidthTabContent"
                      role="tablist"
                    >
                      <li className="w-full">
                        <button
                          id="faq-tab"
                          data-tabs-target="#faq"
                          type="button"
                          role="tab"
                          aria-controls="faq"
                          aria-selected="true"
                          className="inline-block w-full p-4 rounded-tl-lg bg-gray-50 hover:bg-gray-100 focus:outline-none  "
                        >
                          Producto más donados
                        </button>
                      </li>
                      <li className="w-full">
                        <button
                          id="about-tab"
                          data-tabs-target="#about"
                          type="button"
                          role="tab"
                          aria-controls="about"
                          aria-selected="false"
                          className="inline-block w-full p-4 rounded-tr-lg bg-gray-50 hover:bg-gray-100 focus:outline-none  "
                        >
                          Donaciones recibidas
                        </button>
                      </li>
                    </ul>
                    <div
                      id="fullWidthTabContent"
                      className="border-t border-gray-200 "
                    >
                      <div
                        className="hidden pt-4"
                        id="faq"
                        role="tabpanel"
                        aria-labelledby="faq-tab"
                      >
                        <ul role="list" className="divide-y divide-gray-200 ">
                          <li className="py-3 sm:py-4">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center min-w-0">
                                <img
                                  className="flex-shrink-0 w-10 h-10"
                                  src="/images/products/iphone.png"
                                  alt="imac image"
                                />
                                <div className="ml-3">
                                  <p className="font-medium text-gray-900 truncate ">
                                    iPhone 14 Pro
                                  </p>
                                  <div className="flex items-center justify-end flex-1 text-sm text-green-500 ">
                                    <svg
                                      className="w-4 h-4"
                                      fill="currentColor"
                                      viewBox="0 0 20 20"
                                      xmlns="http://www.w3.org/2000/svg"
                                      aria-hidden="true"
                                    >
                                      <path
                                        clipRule="evenodd"
                                        fillRule="evenodd"
                                        d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"
                                      ></path>
                                    </svg>
                                    2.5%
                                    <span className="ml-2 text-gray-500">
                                      vs last month
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
                                $445,467
                              </div>
                            </div>
                          </li>
                          <li className="py-3 sm:py-4">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center min-w-0">
                                <img
                                  className="flex-shrink-0 w-10 h-10"
                                  src="/images/products/imac.png"
                                  alt="imac image"
                                />
                                <div className="ml-3">
                                  <p className="font-medium text-gray-900 truncate ">
                                    Apple iMac 27"
                                  </p>
                                  <div className="flex items-center justify-end flex-1 text-sm text-green-500 ">
                                    <svg
                                      className="w-4 h-4"
                                      fill="currentColor"
                                      viewBox="0 0 20 20"
                                      xmlns="http://www.w3.org/2000/svg"
                                      aria-hidden="true"
                                    >
                                      <path
                                        clipRule="evenodd"
                                        fillRule="evenodd"
                                        d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"
                                      ></path>
                                    </svg>
                                    Usuario top
                                    <span className="ml-2 text-gray-500">
                                      vs last month
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
                                $256,982
                              </div>
                            </div>
                          </li>
                          <li className="py-3 sm:py-4">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center min-w-0">
                                <img
                                  className="flex-shrink-0 w-10 h-10"
                                  src="/images/products/watch.png"
                                  alt="watch image"
                                />
                                <div className="ml-3">
                                  <p className="font-medium text-gray-900 truncate ">
                                    Apple Watch SE
                                  </p>
                                  <div className="flex items-center justify-end flex-1 text-sm text-red-600 ">
                                    <svg
                                      className="w-4 h-4"
                                      fill="currentColor"
                                      viewBox="0 0 20 20"
                                      xmlns="http://www.w3.org/2000/svg"
                                      aria-hidden="true"
                                    >
                                      <path
                                        clipRule="evenodd"
                                        fillRule="evenodd"
                                        d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z"
                                      ></path>
                                    </svg>
                                    1.35%
                                    <span className="ml-2 text-gray-500">
                                      vs last month
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
                                $201,869
                              </div>
                            </div>
                          </li>
                          <li className="py-3 sm:py-4">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center min-w-0">
                                <img
                                  className="flex-shrink-0 w-10 h-10"
                                  src="/images/products/ipad.png"
                                  alt="ipad image"
                                />
                                <div className="ml-3">
                                  <p className="font-medium text-gray-900 truncate ">
                                    Apple iPad Air
                                  </p>
                                  <div className="flex items-center justify-end flex-1 text-sm text-green-500 ">
                                    <svg
                                      className="w-4 h-4"
                                      fill="currentColor"
                                      viewBox="0 0 20 20"
                                      xmlns="http://www.w3.org/2000/svg"
                                      aria-hidden="true"
                                    >
                                      <path
                                        clipRule="evenodd"
                                        fillRule="evenodd"
                                        d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"
                                      ></path>
                                    </svg>
                                    Usuario top
                                    <span className="ml-2 text-gray-500">
                                      vs last month
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
                                $103,967
                              </div>
                            </div>
                          </li>
                          <li className="py-3 sm:py-4">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center min-w-0">
                                <img
                                  className="flex-shrink-0 w-10 h-10"
                                  src="/images/products/imac.png"
                                  alt="imac image"
                                />
                                <div className="ml-3">
                                  <p className="font-medium text-gray-900 truncate ">
                                    Apple iMac 24"
                                  </p>
                                  <div className="flex items-center justify-end flex-1 text-sm text-red-600 ">
                                    <svg
                                      className="w-4 h-4"
                                      fill="currentColor"
                                      viewBox="0 0 20 20"
                                      xmlns="http://www.w3.org/2000/svg"
                                      aria-hidden="true"
                                    >
                                      <path
                                        clipRule="evenodd"
                                        fillRule="evenodd"
                                        d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z"
                                      ></path>
                                    </svg>
                                    2%
                                    <span className="ml-2 text-gray-500">
                                      vs last month
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
                                $98,543
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div
                        className="hidden pt-4"
                        id="about"
                        role="tabpanel"
                        aria-labelledby="about-tab"
                      >
                        <ul role="list" className="divide-y divide-gray-200 ">
                          <li className="py-3 sm:py-4">
                            <div className="flex items-center space-x-4">
                              <div className="flex-shrink-0">
                                <img
                                  className="w-8 h-8 rounded-full"
                                  src="/images/users/neil-sims.png"
                                  alt="Neil image"
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="font-medium text-gray-900 truncate ">
                                  Neil Sims
                                </p>
                                <p className="text-sm text-gray-500 truncate ">
                                  email@Hungro.com
                                </p>
                              </div>
                              <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
                                $3320
                              </div>
                            </div>
                          </li>
                          <li className="py-3 sm:py-4">
                            <div className="flex items-center space-x-4">
                              <div className="flex-shrink-0">
                                <img
                                  className="w-8 h-8 rounded-full"
                                  src=""
                                  alt="Neil image"
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="font-medium text-gray-900 truncate ">
                                  Bonnie Green
                                </p>
                                <p className="text-sm text-gray-500 truncate ">
                                  email@Hungro.com
                                </p>
                              </div>
                              <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
                                $2467
                              </div>
                            </div>
                          </li>
                          <li className="py-3 sm:py-4">
                            <div className="flex items-center space-x-4">
                              <div className="flex-shrink-0">
                                <img
                                  className="w-8 h-8 rounded-full"
                                  src="/images/users/michael-gough.png"
                                  alt="Neil image"
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="font-medium text-gray-900 truncate ">
                                  Michael Gough
                                </p>
                                <p className="text-sm text-gray-500 truncate ">
                                  email@Hungro.com
                                </p>
                              </div>
                              <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
                                $2235
                              </div>
                            </div>
                          </li>
                          <li className="py-3 sm:py-4">
                            <div className="flex items-center space-x-4">
                              <div className="flex-shrink-0">
                                <img
                                  className="w-8 h-8 rounded-full"
                                  src="/images/users/thomas-lean.png"
                                  alt="Neil image"
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="font-medium text-gray-900 truncate ">
                                  Thomes Lean
                                </p>
                                <p className="text-sm text-gray-500 truncate ">
                                  email@Hungro.com
                                </p>
                              </div>
                              <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
                                $1842
                              </div>
                            </div>
                          </li>
                          <li className="py-3 sm:py-4">
                            <div className="flex items-center space-x-4">
                              <div className="flex-shrink-0">
                                <img
                                  className="w-8 h-8 rounded-full"
                                  src="/images/users/lana-byrd.png"
                                  alt="Neil image"
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="font-medium text-gray-900 truncate ">
                                  Lana Byrd
                                </p>
                                <p className="text-sm text-gray-500 truncate ">
                                  email@Hungro.com
                                </p>
                              </div>
                              <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
                                $1044
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* <!-- Card Footer --> */}
                    <div className="flex items-center justify-between pt-3 mt-5 border-t border-gray-200 sm:pt-6 ">
                      <div>
                        <button
                          className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 rounded-lg hover:text-gray-900  "
                          type="button"
                          data-dropdown-toggle="stats-dropdown"
                        >
                          Últimos 7 días{" "}
                          <svg
                            className="w-4 h-4 ml-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            ></path>
                          </svg>
                        </button>
                        {/* <!-- Dropdown menu --> */}
                        <div
                          className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow  "
                          id="stats-dropdown"
                        >
                          <div className="px-4 py-3" role="none">
                            <p
                              className="text-sm font-medium text-gray-900 truncate "
                              role="none"
                            >
                              Sep 16, 2021 - Sep 22, 2021
                            </p>
                          </div>
                          <ul className="py-1" role="none">
                            <li>
                              <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100   "
                                role="menuitem"
                              >
                                Yesterday
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100   "
                                role="menuitem"
                              >
                                Today
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100   "
                                role="menuitem"
                              >
                                Últimos 7 días
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100   "
                                role="menuitem"
                              >
                                Last 30 days
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100   "
                                role="menuitem"
                              >
                                Last 90 days
                              </a>
                            </li>
                          </ul>
                          <div className="py-1" role="none">
                            <a
                              href="#"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100   "
                              role="menuitem"
                            >
                              Custom...
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <a
                          href="#"
                          className="inline-flex items-center p-2 text-xs font-medium uppercase rounded-lg text-primary-700 sm:text-sm hover:bg-gray-100  "
                        >
                          Reporte Completo
                          <svg
                            className="w-4 h-4 ml-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 5l7 7-7 7"
                            ></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid w-full grid-cols-1 gap-4 mt-4 xl:grid-cols-2 2xl:grid-cols-3">
                  <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex  sm:p-6 ">
                    <div className="w-full">
                      <h3 className="text-base font-normal text-gray-500 ">
                        Productos Activos
                      </h3>
                      <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl ">
                        17
                      </span>
                      <p className="flex items-center text-base font-normal text-gray-500 ">
                        <span className="flex items-center mr-1.5 text-sm text-green-500 ">
                          <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                          >
                            <path
                              clipRule="evenodd"
                              fillRule="evenodd"
                              d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"
                            ></path>
                          </svg>
                          2,8%
                        </span>
                        Desde el último mes
                      </p>
                    </div>
                    <div className="w-full" id="new-products-chart"></div>
                  </div>
                  <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex  sm:p-6 ">
                    <div className="w-full">
                      <h3 className="text-base font-normal text-gray-500 ">
                        Donantes
                      </h3>
                      <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl ">
                        17
                      </span>
                      <p className="flex items-center text-base font-normal text-gray-500 ">
                        <span className="flex items-center mr-1.5 text-sm text-green-500 ">
                          <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                          >
                            <path
                              clipRule="evenodd"
                              fillRule="evenodd"
                              d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"
                            ></path>
                          </svg>
                          3,4%
                        </span>
                        Desde el último mes
                      </p>
                    </div>
                    <div className="w-full" id="week-signups-chart"></div>
                  </div>
                </div>

                <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm  sm:p-6 mt-5">
                  {/* <!-- Card header --> */}
                  <div className="items-center justify-between lg:flex">
                    <div className="mb-4 lg:mb-0">
                      <h3 className="mb-2 text-xl font-bold text-gray-900 ">
                        Resumen de donaciones
                      </h3>
                      <span className="text-base font-normal text-gray-500 ">
                        Acá te mostramos una lista de tus últimas donaciones
                        recibidas
                      </span>
                    </div>
                    <div className="items-center sm:flex">
                      <div className="flex items-center">
                        <button
                          id="dropdownDefault"
                          data-dropdown-toggle="dropdown"
                          className="mb-4 sm:mb-0 mr-4 inline-flex items-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-4 py-2.5      "
                          type="button"
                        >
                          Filtar por
                          <svg
                            className="w-4 h-4 ml-2"
                            aria-hidden="true"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            ></path>
                          </svg>
                        </button>
                        {/* <!-- Dropdown menu --> */}
                        <div
                          id="dropdown"
                          className="z-10 hidden w-56 p-3 bg-white rounded-lg shadow "
                        >
                          <h6 className="mb-3 text-sm font-medium text-gray-900 ">
                            Category
                          </h6>
                          <ul
                            className="space-y-2 text-sm"
                            aria-labelledby="dropdownDefault"
                          >
                            <li className="flex items-center">
                              <input
                                id="apple"
                                type="checkbox"
                                value=""
                                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500  focus:ring-2  "
                              />

                              <label
                                htmlFor="apple"
                                className="ml-2 text-sm font-medium text-gray-900 "
                              >
                                Completado (56)
                              </label>
                            </li>

                            <li className="flex items-center">
                              <input
                                id="fitbit"
                                type="checkbox"
                                value=""
                                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500  focus:ring-2  "
                              />

                              <label
                                htmlFor="fitbit"
                                className="ml-2 text-sm font-medium text-gray-900 "
                              >
                                Cancelado (56)
                              </label>
                            </li>

                            <li className="flex items-center">
                              <input
                                id="dell"
                                type="checkbox"
                                value=""
                                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500  focus:ring-2  "
                              />

                              <label
                                htmlFor="dell"
                                className="ml-2 text-sm font-medium text-gray-900 "
                              >
                                En camino (56)
                              </label>
                            </li>

                            <li className="flex items-center">
                              <input
                                id="asus"
                                type="checkbox"
                                value=""
                                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500  focus:ring-2  "
                              />

                              <label
                                htmlFor="asus"
                                className="ml-2 text-sm font-medium text-gray-900 "
                              >
                                En revisión (97)
                              </label>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg
                              className="w-5 h-5 text-gray-500 "
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                            >
                              <path d="M5.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H6a.75.75 0 01-.75-.75V12zM6 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H6zM7.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H8a.75.75 0 01-.75-.75V12zM8 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H8zM9.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V10zM10 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H10zM9.25 14a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V14zM12 9.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V10a.75.75 0 00-.75-.75H12zM11.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H12a.75.75 0 01-.75-.75V12zM12 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H12zM13.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H14a.75.75 0 01-.75-.75V10zM14 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H14z"></path>
                              <path
                                clipRule="evenodd"
                                fillRule="evenodd"
                                d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z"
                              ></path>
                            </svg>
                          </div>
                          <input
                            name="start"
                            type="text"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5       "
                            placeholder="Desde"
                          />
                        </div>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg
                              className="w-5 h-5 text-gray-500 "
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                            >
                              <path d="M5.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H6a.75.75 0 01-.75-.75V12zM6 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H6zM7.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H8a.75.75 0 01-.75-.75V12zM8 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H8zM9.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V10zM10 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H10zM9.25 14a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V14zM12 9.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V10a.75.75 0 00-.75-.75H12zM11.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H12a.75.75 0 01-.75-.75V12zM12 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H12zM13.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H14a.75.75 0 01-.75-.75V10zM14 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H14z"></path>
                              <path
                                clipRule="evenodd"
                                fillRule="evenodd"
                                d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z"
                              ></path>
                            </svg>
                          </div>
                          <input
                            name="end"
                            type="text"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5       "
                            placeholder="Hasta"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Table --> */}
                  <div className="flex flex-col mt-6">
                    <div className="overflow-x-auto rounded-lg">
                      <div className="inline-block min-w-full align-middle">
                        <div className="overflow-hidden shadow sm:rounded-lg">
                          <table className="min-w-full divide-y divide-gray-200 ">
                            <thead className="bg-gray-50 ">
                              <tr>
                                <th
                                  scope="col"
                                  className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase "
                                >
                                  Donante
                                </th>
                                <th
                                  scope="col"
                                  className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase "
                                >
                                  Fecha donado
                                </th>
                                <th
                                  scope="col"
                                  className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase "
                                >
                                  Producto
                                </th>
                                <th
                                  scope="col"
                                  className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase "
                                >
                                  Cantidad
                                </th>

                                <th
                                  scope="col"
                                  className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase "
                                >
                                  Método de entrega
                                </th>
                              </tr>
                            </thead>

                            {myDonations &&
                              myDonations?.map((donation) => (
                                <tbody className="bg-white ">
                                  <tr>
                                    <td className="p-4 text-sm font-normal text-gray-900 whitespace-nowrap ">
                                      {donation?.donor?.name}
                                    </td>
                                    <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap ">
                                      {formatDateString(donation?.donationDate)}
                                    </td>
                                    <td className="p-4 text-sm font-semibold text-gray-900 whitespace-nowrap ">
                                      {donation?.product?.name}
                                    </td>
                                    <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap ">
                                      {donation?.quantity}
                                    </td>
                                    {donation.deliveryMethod === "Personal" ? (
                                      <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap ">
                                        {donation.organizationCampus}
                                      </td>
                                    ) : (
                                      <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap ">
                                        {donation.address}
                                      </td>
                                    )}

                                    {/* <td className="p-4 whitespace-nowrap">
                                      <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md   border border-green-100 ">
                                        Completado
                                      </span>
                                    </td> */}
                                  </tr>
                                </tbody>
                              ))}
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Card Footer --> */}
                  <div className="flex items-center justify-between pt-3 sm:pt-6">
                    <div>
                      <button
                        className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 rounded-lg hover:text-gray-900  "
                        type="button"
                        data-dropdown-toggle="transactions-dropdown"
                      >
                        Últimos 7 días{" "}
                        <svg
                          className="w-4 h-4 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          ></path>
                        </svg>
                      </button>
                      {/* <!-- Dropdown menu --> */}
                      <div
                        className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow  "
                        id="transactions-dropdown"
                      >
                        <div className="px-4 py-3" role="none">
                          <p
                            className="text-sm font-medium text-gray-900 truncate "
                            role="none"
                          >
                            Sep 16, 2021 - Sep 22, 2021
                          </p>
                        </div>
                        <ul className="py-1" role="none">
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100   "
                              role="menuitem"
                            >
                              Yesterday
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100   "
                              role="menuitem"
                            >
                              Today
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100   "
                              role="menuitem"
                            >
                              Últimos 7 días
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100   "
                              role="menuitem"
                            >
                              Last 30 days
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100   "
                              role="menuitem"
                            >
                              Last 90 days
                            </a>
                          </li>
                        </ul>
                        <div className="py-1" role="none">
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100   "
                            role="menuitem"
                          >
                            Custom...
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <a
                        href="#"
                        className="inline-flex items-center p-2 text-xs font-medium uppercase rounded-lg text-primary-700 sm:text-sm hover:bg-gray-100  "
                      >
                        Resumen de donaciones
                        <svg
                          className="w-4 h-4 ml-1 sm:w-5 sm:h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="px-4 pt-6">
                <div className="grid gap-4 xl:grid-cols-2 2xl:grid-cols-3">
                  {/* <!-- Main widget --> */}
                  <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2  sm:p-6 ">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex-shrink-0">
                        <span className="text-xl font-bold leading-none text-gray-900 sm:text-2xl ">
                          Hola, {user.name} !
                        </span>
                      </div>
                      <div className="flex items-center justify-end flex-1 text-base font-medium text-green-500 ">
                        Usuario top
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div id="main-chart"></div>
                    {/* <!-- Card Footer --> */}
                    <div className="flex items-center justify-between pt-3 mt-4 border-t border-gray-200 sm:pt-6 ">
                      <div>
                        <button
                          className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 rounded-lg hover:text-gray-900  "
                          type="button"
                          data-dropdown-toggle="weekly-sales-dropdown"
                        >
                          Últimos 7 días{" "}
                          <svg
                            className="w-4 h-4 ml-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            ></path>
                          </svg>
                        </button>
                        {/* <!-- Dropdown menu --> */}
                        <div
                          className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow  "
                          id="weekly-sales-dropdown"
                        >
                          <div className="px-4 py-3" role="none">
                            <p
                              className="text-sm font-medium text-gray-900 truncate "
                              role="none"
                            >
                              Sep 16, 2021 - Sep 22, 2021
                            </p>
                          </div>
                          <ul className="py-1" role="none">
                            <li>
                              <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100   "
                                role="menuitem"
                              >
                                Ayer
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100   "
                                role="menuitem"
                              >
                                Hoy
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100   "
                                role="menuitem"
                              >
                                Últimos 7 días
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100   "
                                role="menuitem"
                              >
                                Últimos 30 días
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100   "
                                role="menuitem"
                              >
                                Últimos 90 días
                              </a>
                            </li>
                          </ul>
                          <div className="py-1" role="none">
                            <a
                              href="#"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100   "
                              role="menuitem"
                            >
                              Custom...
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <a
                          href="#"
                          className="inline-flex items-center p-2 text-xs font-medium uppercase rounded-lg text-primary-700 sm:text-sm hover:bg-gray-100  "
                        >
                          Reporte
                          <svg
                            className="w-4 h-4 ml-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 5l7 7-7 7"
                            ></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* <!--Tabs widget --> */}
                  <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm  sm:p-6 ">
                    <h3 className="flex items-center mb-4 text-lg font-semibold text-gray-900 ">
                      Mis donaciones de este mes
                      <button
                        data-popover-target="popover-description"
                        data-popover-placement="bottom-end"
                        type="button"
                      >
                        <svg
                          className="w-4 h-4 ml-2 text-gray-400 hover:text-gray-500"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span className="sr-only">Ver más información</span>
                      </button>
                    </h3>
                    <div
                      data-popover
                      id="popover-description"
                      role="tooltip"
                      className="absolute z-10 invisible inline-block text-sm font-light text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 w-72   "
                    >
                      <div className="p-3 space-y-2">
                        <h3 className="font-semibold text-gray-900 ">
                          Donaciones
                        </h3>
                        <p>
                          Statistics is a branch of applied mathematics that
                          involves the collection, description, analysis, and
                          inference of conclusions from quantitative data.
                        </p>
                        <a
                          href="#"
                          className="flex items-center font-medium text-primary-600   hover:text-primary-700"
                        >
                          Read more{" "}
                          <svg
                            className="w-4 h-4 ml-1"
                            aria-hidden="true"
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
                        </a>
                      </div>
                      <div data-popper-arrow></div>
                    </div>
                    <div className="sm:hidden">
                      <label htmlFor="tabs" className="sr-only">
                        Select tab
                      </label>
                      <select
                        id="tabs"
                        className="bg-gray-50 border-0 border-b border-gray-200 text-gray-900 text-sm rounded-t-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5      "
                      >
                        <option>Statistics</option>
                        <option>Services</option>
                        <option>FAQ</option>
                      </select>
                    </div>
                    <ul
                      className="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex  "
                      id="fullWidthTab"
                      data-tabs-toggle="#fullWidthTabContent"
                      role="tablist"
                    >
                      <li className="w-full">
                        <button
                          id="faq-tab"
                          data-tabs-target="#faq"
                          type="button"
                          role="tab"
                          aria-controls="faq"
                          aria-selected="true"
                          className="inline-block w-full p-4 rounded-tl-lg bg-gray-50 hover:bg-gray-100 focus:outline-none  "
                        >
                          Productos
                        </button>
                      </li>
                      <li className="w-full">
                        <button
                          id="about-tab"
                          data-tabs-target="#about"
                          type="button"
                          role="tab"
                          aria-controls="about"
                          aria-selected="false"
                          className="inline-block w-full p-4 rounded-tr-lg bg-gray-50 hover:bg-gray-100 focus:outline-none  "
                        >
                          Organizaciones
                        </button>
                      </li>
                    </ul>
                    <div
                      id="fullWidthTabContent"
                      className="border-t border-gray-200 "
                    >
                      <div
                        className="hidden pt-4"
                        id="faq"
                        role="tabpanel"
                        aria-labelledby="faq-tab"
                      >
                        <ul role="list" className="divide-y divide-gray-200 ">
                          <li className="py-3 sm:py-4">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center min-w-0">
                                <img
                                  className="flex-shrink-0 w-10 h-10"
                                  src="/images/products/iphone.png"
                                  alt="imac image"
                                />
                                <div className="ml-3">
                                  <p className="font-medium text-gray-900 truncate ">
                                    iPhone 14 Pro
                                  </p>
                                  <div className="flex items-center justify-end flex-1 text-sm text-green-500 ">
                                    <svg
                                      className="w-4 h-4"
                                      fill="currentColor"
                                      viewBox="0 0 20 20"
                                      xmlns="http://www.w3.org/2000/svg"
                                      aria-hidden="true"
                                    >
                                      <path
                                        clipRule="evenodd"
                                        fillRule="evenodd"
                                        d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"
                                      ></path>
                                    </svg>
                                    2.5%
                                    <span className="ml-2 text-gray-500">
                                      vs last month
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
                                $445,467
                              </div>
                            </div>
                          </li>
                          <li className="py-3 sm:py-4">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center min-w-0">
                                <img
                                  className="flex-shrink-0 w-10 h-10"
                                  src="/images/products/imac.png"
                                  alt="imac image"
                                />
                                <div className="ml-3">
                                  <p className="font-medium text-gray-900 truncate ">
                                    Apple iMac 27"
                                  </p>
                                  <div className="flex items-center justify-end flex-1 text-sm text-green-500 ">
                                    <svg
                                      className="w-4 h-4"
                                      fill="currentColor"
                                      viewBox="0 0 20 20"
                                      xmlns="http://www.w3.org/2000/svg"
                                      aria-hidden="true"
                                    >
                                      <path
                                        clipRule="evenodd"
                                        fillRule="evenodd"
                                        d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"
                                      ></path>
                                    </svg>
                                    Usuario top
                                    <span className="ml-2 text-gray-500">
                                      vs last month
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
                                $256,982
                              </div>
                            </div>
                          </li>
                          <li className="py-3 sm:py-4">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center min-w-0">
                                <img
                                  className="flex-shrink-0 w-10 h-10"
                                  src="/images/products/watch.png"
                                  alt="watch image"
                                />
                                <div className="ml-3">
                                  <p className="font-medium text-gray-900 truncate ">
                                    Apple Watch SE
                                  </p>
                                  <div className="flex items-center justify-end flex-1 text-sm text-red-600 ">
                                    <svg
                                      className="w-4 h-4"
                                      fill="currentColor"
                                      viewBox="0 0 20 20"
                                      xmlns="http://www.w3.org/2000/svg"
                                      aria-hidden="true"
                                    >
                                      <path
                                        clipRule="evenodd"
                                        fillRule="evenodd"
                                        d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z"
                                      ></path>
                                    </svg>
                                    1.35%
                                    <span className="ml-2 text-gray-500">
                                      vs last month
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
                                $201,869
                              </div>
                            </div>
                          </li>
                          <li className="py-3 sm:py-4">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center min-w-0">
                                <img
                                  className="flex-shrink-0 w-10 h-10"
                                  src="/images/products/ipad.png"
                                  alt="ipad image"
                                />
                                <div className="ml-3">
                                  <p className="font-medium text-gray-900 truncate ">
                                    Apple iPad Air
                                  </p>
                                  <div className="flex items-center justify-end flex-1 text-sm text-green-500 ">
                                    <svg
                                      className="w-4 h-4"
                                      fill="currentColor"
                                      viewBox="0 0 20 20"
                                      xmlns="http://www.w3.org/2000/svg"
                                      aria-hidden="true"
                                    >
                                      <path
                                        clipRule="evenodd"
                                        fillRule="evenodd"
                                        d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"
                                      ></path>
                                    </svg>
                                    Usuario top
                                    <span className="ml-2 text-gray-500">
                                      vs last month
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
                                $103,967
                              </div>
                            </div>
                          </li>
                          <li className="py-3 sm:py-4">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center min-w-0">
                                <img
                                  className="flex-shrink-0 w-10 h-10"
                                  src="/images/products/imac.png"
                                  alt="imac image"
                                />
                                <div className="ml-3">
                                  <p className="font-medium text-gray-900 truncate ">
                                    Apple iMac 24"
                                  </p>
                                  <div className="flex items-center justify-end flex-1 text-sm text-red-600 ">
                                    <svg
                                      className="w-4 h-4"
                                      fill="currentColor"
                                      viewBox="0 0 20 20"
                                      xmlns="http://www.w3.org/2000/svg"
                                      aria-hidden="true"
                                    >
                                      <path
                                        clipRule="evenodd"
                                        fillRule="evenodd"
                                        d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z"
                                      ></path>
                                    </svg>
                                    2%
                                    <span className="ml-2 text-gray-500">
                                      vs last month
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
                                $98,543
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div
                        className="hidden pt-4"
                        id="about"
                        role="tabpanel"
                        aria-labelledby="about-tab"
                      >
                        <ul role="list" className="divide-y divide-gray-200 ">
                          <li className="py-3 sm:py-4">
                            <div className="flex items-center space-x-4">
                              <div className="flex-shrink-0">
                                <img
                                  className="w-8 h-8 rounded-full"
                                  src="/images/users/neil-sims.png"
                                  alt="Neil image"
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="font-medium text-gray-900 truncate ">
                                  Neil Sims
                                </p>
                                <p className="text-sm text-gray-500 truncate ">
                                  email@Hungro.com
                                </p>
                              </div>
                              <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
                                $3320
                              </div>
                            </div>
                          </li>
                          <li className="py-3 sm:py-4">
                            <div className="flex items-center space-x-4">
                              <div className="flex-shrink-0">
                                <img
                                  className="w-8 h-8 rounded-full"
                                  src=""
                                  alt="Neil image"
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="font-medium text-gray-900 truncate ">
                                  Bonnie Green
                                </p>
                                <p className="text-sm text-gray-500 truncate ">
                                  email@Hungro.com
                                </p>
                              </div>
                              <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
                                $2467
                              </div>
                            </div>
                          </li>
                          <li className="py-3 sm:py-4">
                            <div className="flex items-center space-x-4">
                              <div className="flex-shrink-0">
                                <img
                                  className="w-8 h-8 rounded-full"
                                  src="/images/users/michael-gough.png"
                                  alt="Neil image"
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="font-medium text-gray-900 truncate ">
                                  Michael Gough
                                </p>
                                <p className="text-sm text-gray-500 truncate ">
                                  email@Hungro.com
                                </p>
                              </div>
                              <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
                                $2235
                              </div>
                            </div>
                          </li>
                          <li className="py-3 sm:py-4">
                            <div className="flex items-center space-x-4">
                              <div className="flex-shrink-0">
                                <img
                                  className="w-8 h-8 rounded-full"
                                  src="/images/users/thomas-lean.png"
                                  alt="Neil image"
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="font-medium text-gray-900 truncate ">
                                  Thomes Lean
                                </p>
                                <p className="text-sm text-gray-500 truncate ">
                                  email@Hungro.com
                                </p>
                              </div>
                              <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
                                $1842
                              </div>
                            </div>
                          </li>
                          <li className="py-3 sm:py-4">
                            <div className="flex items-center space-x-4">
                              <div className="flex-shrink-0">
                                <img
                                  className="w-8 h-8 rounded-full"
                                  src="/images/users/lana-byrd.png"
                                  alt="Neil image"
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="font-medium text-gray-900 truncate ">
                                  Lana Byrd
                                </p>
                                <p className="text-sm text-gray-500 truncate ">
                                  email@Hungro.com
                                </p>
                              </div>
                              <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
                                $1044
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* <!-- Card Footer --> */}
                    <div className="flex items-center justify-between pt-3 mt-5 border-t border-gray-200 sm:pt-6 ">
                      <div>
                        <button
                          className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 rounded-lg hover:text-gray-900  "
                          type="button"
                          data-dropdown-toggle="stats-dropdown"
                        >
                          Últimos 7 días{" "}
                          <svg
                            className="w-4 h-4 ml-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            ></path>
                          </svg>
                        </button>
                        {/* <!-- Dropdown menu --> */}
                        <div
                          className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow  "
                          id="stats-dropdown"
                        >
                          <div className="px-4 py-3" role="none">
                            <p
                              className="text-sm font-medium text-gray-900 truncate "
                              role="none"
                            >
                              Octubre 17, 2023 - Octubre 22, 2023
                            </p>
                          </div>
                          <ul className="py-1" role="none">
                            <li>
                              <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100   "
                                role="menuitem"
                              >
                                Ayer
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100   "
                                role="menuitem"
                              >
                                Hoy
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100   "
                                role="menuitem"
                              >
                                Últimos 7 días
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100   "
                                role="menuitem"
                              >
                                Last 30 days
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100   "
                                role="menuitem"
                              >
                                Last 90 days
                              </a>
                            </li>
                          </ul>
                          <div className="py-1" role="none">
                            <a
                              href="#"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100   "
                              role="menuitem"
                            >
                              Custom...
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <a
                          href="#"
                          className="inline-flex items-center p-2 text-xs font-medium uppercase rounded-lg text-primary-700 sm:text-sm hover:bg-gray-100  "
                        >
                          Última donación
                          <svg
                            className="w-4 h-4 ml-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 5l7 7-7 7"
                            ></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Campañas a las que puedes aportar */}
                <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm  sm:p-6 mt-5">
                  {/* <!-- Card header --> */}
                  <div className="items-center justify-between lg:flex-col">
                    <div className="mb-4 lg:mb-0">
                      <h3 className="mb-2 text-xl font-bold text-gray-900 ">
                        Campañas a las que puedes apoyar
                      </h3>
                      <span className="text-base font-normal text-gray-500 ">
                        Elegí una campaña y sé parte del cambio
                      </span>
                    </div>

                    <div className="mt-10 flex flex-wrap -mx-1 lg:-mx-4 ">
                      {campaigns &&
                        campaigns?.map((campaign) => (
                          <div className="relative flex m-4 flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
                            <div className="rounded-xl relative">
                              <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                                <p className="font-bold text-2xl px-2 pt-4">
                                  {campaign.name}{" "}
                                </p>
                                <p className="px-2">{campaign.name}</p>


                              </div>
                              <img
                                className="max-h-[160px]  md:max-h-[200px] w-full object-cover rounded-xl"
                                src="https://images.pexels.com/photos/8078423/pexels-photo-8078423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                alt="/"
                              />
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
                {/* <div className="grid w-full grid-cols-1 gap-4 mt-4 xl:grid-cols-2 2xl:grid-cols-3">
                  {campaigns &&
                    campaigns?.map((campaign) => (
                      <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex  sm:p-6 ">
                        <div className="w-full">
                          <h3 className="text-base font-normal text-gray-500 ">
                            Campaña: {campaign.name}
                          </h3>
                          <span className="text-xl font-bold leading-none text-gray-900 sm:text-2xl ">
                            {campaign.organization.name}
                          </span>
                          <p className="flex items-center text-base font-normal text-gray-500 ">
                            <span className="flex items-center mr-1.5 text-sm text-green-500 ">
                              Usuario top
                            </span>
                          </p>
                          <p className="flex items-center text-base font-normal text-gray-500 ">
                            Desde el último mes
                          </p>
                        </div>
                        <div className="w-full" id="new-products-chart"></div>
                      </div>
                    ))}
                </div> */}

                {/* Productos */}
                <DonorProducts />
                <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm  sm:p-6 mt-5">
                  {/* <!-- Card header --> */}
                  <div className="items-center justify-between lg:flex">
                    <div className="mb-4 lg:mb-0">
                      <h3 className="mb-2 text-xl font-bold text-gray-900 ">
                        Resumen de donaciones
                      </h3>
                      <span className="text-base font-normal text-gray-500 ">
                        Acá te mostramos una lista de tus últimas donaciones
                      </span>
                    </div>
                    <div className="items-center sm:flex">
                      <div className="flex items-center">
                        <button
                          id="dropdownDefault"
                          data-dropdown-toggle="dropdown"
                          className="mb-4 sm:mb-0 mr-4 inline-flex items-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-4 py-2.5      "
                          type="button"
                        >
                          Filtar por
                          <svg
                            className="w-4 h-4 ml-2"
                            aria-hidden="true"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            ></path>
                          </svg>
                        </button>
                        {/* <!-- Dropdown menu --> */}
                        <div
                          id="dropdown"
                          className="z-10 hidden w-56 p-3 bg-white rounded-lg shadow "
                        >
                          <h6 className="mb-3 text-sm font-medium text-gray-900 ">
                            Category
                          </h6>
                          <ul
                            className="space-y-2 text-sm"
                            aria-labelledby="dropdownDefault"
                          >
                            <li className="flex items-center">
                              <input
                                id="apple"
                                type="checkbox"
                                value=""
                                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500  focus:ring-2  "
                              />

                              <label
                                htmlFor="apple"
                                className="ml-2 text-sm font-medium text-gray-900 "
                              >
                                Completado (56)
                              </label>
                            </li>

                            <li className="flex items-center">
                              <input
                                id="fitbit"
                                type="checkbox"
                                value=""
                                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500  focus:ring-2  "
                              />

                              <label
                                htmlFor="fitbit"
                                className="ml-2 text-sm font-medium text-gray-900 "
                              >
                                Cancelado (56)
                              </label>
                            </li>

                            <li className="flex items-center">
                              <input
                                id="dell"
                                type="checkbox"
                                value=""
                                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500  focus:ring-2  "
                              />

                              <label
                                htmlFor="dell"
                                className="ml-2 text-sm font-medium text-gray-900 "
                              >
                                En camino (56)
                              </label>
                            </li>

                            <li className="flex items-center">
                              <input
                                id="asus"
                                type="checkbox"
                                value=""
                                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500  focus:ring-2  "
                              />

                              <label
                                htmlFor="asus"
                                className="ml-2 text-sm font-medium text-gray-900 "
                              >
                                En revisión (97)
                              </label>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg
                              className="w-5 h-5 text-gray-500 "
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                            >
                              <path d="M5.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H6a.75.75 0 01-.75-.75V12zM6 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H6zM7.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H8a.75.75 0 01-.75-.75V12zM8 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H8zM9.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V10zM10 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H10zM9.25 14a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V14zM12 9.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V10a.75.75 0 00-.75-.75H12zM11.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H12a.75.75 0 01-.75-.75V12zM12 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H12zM13.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H14a.75.75 0 01-.75-.75V10zM14 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H14z"></path>
                              <path
                                clipRule="evenodd"
                                fillRule="evenodd"
                                d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z"
                              ></path>
                            </svg>
                          </div>
                          <input
                            name="start"
                            type="text"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5       "
                            placeholder="Desde"
                          />
                        </div>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg
                              className="w-5 h-5 text-gray-500 "
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                            >
                              <path d="M5.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H6a.75.75 0 01-.75-.75V12zM6 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H6zM7.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H8a.75.75 0 01-.75-.75V12zM8 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H8zM9.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V10zM10 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H10zM9.25 14a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V14zM12 9.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V10a.75.75 0 00-.75-.75H12zM11.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H12a.75.75 0 01-.75-.75V12zM12 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H12zM13.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H14a.75.75 0 01-.75-.75V10zM14 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H14z"></path>
                              <path
                                clipRule="evenodd"
                                fillRule="evenodd"
                                d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z"
                              ></path>
                            </svg>
                          </div>
                          <input
                            name="end"
                            type="text"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5       "
                            placeholder="Hasta"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Table --> */}
                  <div className="flex flex-col mt-6">
                    <div className="overflow-x-auto rounded-lg">
                      <div className="inline-block min-w-full align-middle">
                        <div className="overflow-hidden shadow sm:rounded-lg">
                          <table className="min-w-full divide-y divide-gray-200 ">
                            <thead className="bg-gray-50 ">
                              <tr>
                                <th
                                  scope="col"
                                  className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase "
                                >
                                  Producto
                                </th>
                                <th
                                  scope="col"
                                  className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase "
                                >
                                  Fecha
                                </th>
                                <th
                                  scope="col"
                                  className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase "
                                >
                                  Cantidad
                                </th>

                              </tr>
                            </thead>

                            {myDonorDonations &&
                              myDonorDonations?.map((donation) => (
                                <tbody className="bg-white ">
                                  <tr>
                                    <td className="p-4 text-sm font-normal text-gray-900 whitespace-nowrap ">
                                      {donation?.product?.name}
                                    </td>
                                    <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap ">
                                      {formatDateString(donation?.donationDate)}
                                    </td>
                                    <td className="p-4 text-sm font-semibold text-gray-900 whitespace-nowrap ">
                                      {donation?.quantity}
                                    </td>

                                    {/* <td className="p-4 whitespace-nowrap">
                                      <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md   border border-green-100 ">
                                        Completado
                                      </span>
                                    </td> */}
                                  </tr>
                                </tbody>
                              ))}
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Card Footer --> */}
                  <div className="flex items-center justify-between pt-3 sm:pt-6">
                    <div>
                      <button
                        className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 rounded-lg hover:text-gray-900  "
                        type="button"
                        data-dropdown-toggle="transactions-dropdown"
                      >
                        Últimos 7 días{" "}
                        <svg
                          className="w-4 h-4 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          ></path>
                        </svg>
                      </button>
                      {/* <!-- Dropdown menu --> */}
                      <div
                        className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow  "
                        id="transactions-dropdown"
                      >
                        <div className="px-4 py-3" role="none">
                          <p
                            className="text-sm font-medium text-gray-900 truncate "
                            role="none"
                          >
                            Sep 16, 2021 - Sep 22, 2021
                          </p>
                        </div>
                        <ul className="py-1" role="none">
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100   "
                              role="menuitem"
                            >
                              Yesterday
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100   "
                              role="menuitem"
                            >
                              Today
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100   "
                              role="menuitem"
                            >
                              Últimos 7 días
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100   "
                              role="menuitem"
                            >
                              Last 30 days
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100   "
                              role="menuitem"
                            >
                              Last 90 days
                            </a>
                          </li>
                        </ul>
                        <div className="py-1" role="none">
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100   "
                            role="menuitem"
                          >
                            Custom...
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <a
                        href="#"
                        className="inline-flex items-center p-2 text-xs font-medium uppercase rounded-lg text-primary-700 sm:text-sm hover:bg-gray-100  "
                      >
                        Resumen de donaciones
                        <svg
                          className="w-4 h-4 ml-1 sm:w-5 sm:h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
