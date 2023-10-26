import React, { useState } from "react";
import SideBar from "../../components/SideBar";
import NavBar from "../../components/NavBar";
import Header from "./components/Header";
import DonationsTable from "./components/DonationsTable";
import { GET_DONATIONS } from "../../../../graphql/queries";
import { useQuery } from "@apollo/client";
import { isAuth } from "../../../../utils/auth";

const Donations = () => {
  isAuth();
  const { refetch } = useQuery(GET_DONATIONS);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
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
              <Header
                searchTerm={searchTerm}
                onSearchChange={handleSearchChange}
              />
              <DonationsTable refetch={refetch} searchTerm={searchTerm} />
            </div>
          </main>

          {/* Aquí iría el componente footer */}
        </div>
      </div>
    </>
  );
};

export default Donations;
