import React, { useEffect, useState } from "react";
import DonorRoutes from "./DonorRoutes";
import OrganizationRoutes from "./OrganizationRoutes";
import SignOutButton from "./SignOutButton";
import { useQuery } from "@apollo/client";
import { GET_ME } from "../../../graphql/queries";

const SideBar = ({ isOpen, setIsOpen, closeMenu }) => {
  const { data, loading, error } = useQuery(GET_ME);

  if (loading) return "Cargando...";
  if (error) return `Error: ${error.message}`;

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const user = data.getMe.donor || data.getMe.organization;

  const sidebarClass = isOpen
    ? "fixed top-0 left-0 z-20 flex flex-col flex-shrink-0 w-64 h-full pt-16 font-normal transition-width"
    : "fixed top-0 left-0 z-20 flex flex-col flex-shrink-0 lg:flex hidden w-64 h-full pt-16 font-normal transition-width";

  return (
    <>
      <aside id="sidebar" className={sidebarClass} aria-label="Sidebar">
        <div className="relative flex flex-col flex-1 min-h-0 pt-0 bg-white border-r border-gray-200 ">
          <div className="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">
            <button className="lg:hidden" onClick={closeMenu}>
              Cerrar
            </button>
            <div className="flex-1 px-3 space-y-1 bg-white divide-y divide-gray-200">
              <ul className="pb-2 space-y-2">
                {user.__typename === "Donor" ? (
                  <DonorRoutes />
                ) : (
                  <OrganizationRoutes />
                )}
              </ul>
              <div className="fixed bottom-4 m-auto">
                <SignOutButton />
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
