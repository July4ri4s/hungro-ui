import React, { useState } from "react";
import SideBar from "../../components/SideBar";
import NavBar from "../../components/NavBar";
import Header from "./components/Header";
import AddProducModal from "./components/AddProducModal";
import DonationsTable from "./components/DonationsTable";
import { isAuth } from "../../../../utils/auth";

const DonorDonations = () => {
  isAuth();
  const [showModal, setShowModal] = useState(false);

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
                setShowModal={setShowModal}
                searchTerm={searchTerm}
                onSearchChange={handleSearchChange}
              />

              <DonationsTable searchTerm={searchTerm} />

              {showModal ? (
                <AddProducModal
                  close={() => {
                    setShowModal(false);
                  }}
                />
              ) : null}
            </div>
          </main>

          {/* Aquí iría el componente footer */}
        </div>
      </div>
    </>
  );
};

export default DonorDonations;
