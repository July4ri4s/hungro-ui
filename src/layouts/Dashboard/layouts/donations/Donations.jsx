import React, { useState } from "react";
import SideBar from "../../components/SideBar";
import NavBar from "../../components/NavBar";
import Header from "./components/Header";
import DonationsTable from "./components/DonationsTable";
import { GET_DONATIONS } from "../../../../graphql/queries";
import { useQuery } from "@apollo/client";

const Donations = () => {
  const { refetch } = useQuery(GET_DONATIONS);

  return (
    <>
      {/* Aquí va el component NavBar */}
      <NavBar />

      <div className="flex pt-16 overflow-hidden bg-gray-50 ">
        {/* Aquí va el component SideBar */}
        <SideBar />
        <div
          id="main-content"
          className="relative w-full h-full overflow-y-auto bg-gray-50 lg:ml-64 "
        >
          <main>
            <div className="px-4 pt-6">
              <Header />
              <DonationsTable refetch={refetch} />
            </div>
          </main>

          {/* Aquí iría el componente footer */}
        </div>
      </div>
    </>
  );
};

export default Donations;
