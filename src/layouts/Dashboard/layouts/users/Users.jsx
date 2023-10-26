import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import SideBar from "../../components/SideBar";
import Header from "./components/Header";
import UsersTable from "./components/UsersTable";
import Pagination from "./components/Pagination";
import EditUserModal from "./components/EditUserModal";
import { isAuth } from "../../../../utils/auth";

const Users = () => {
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
          className="relative w-full h-full overflow-y-auto bg-gray-50 lg:ml-64"
        >
          <main>
            <div className="px-4 pt-6">
              <Header
                searchTerm={searchTerm}
                onSearchChange={handleSearchChange}
              />

              <UsersTable setShowModal={setShowModal} searchTerm={searchTerm} />

              {showModal ? (
                <EditUserModal
                  close={() => {
                    setShowModal(false);
                  }}
                />
              ) : null}

              <Pagination />
            </div>
          </main>

          {/* Aquí iría el componente footer */}
        </div>
      </div>
    </>
  );
};

export default Users;
