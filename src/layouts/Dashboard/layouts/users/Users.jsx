import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import SideBar from "../../components/SideBar";
import Header from "./components/Header";
import UsersTable from "./components/UsersTable";
import Pagination from "./components/Pagination";
import EditUserModal from "./components/EditUserModal";

const Users = () => {
  const [showModal, setShowModal] = useState(false);
  console.log(showModal);
  return (
    <>
      {/* Aquí va el component NavBar */}
      <NavBar />

      <div className="flex pt-16 overflow-hidden bg-gray-50 dark:bg-gray-900">
        {/* Aquí va el component SideBar */}
        <SideBar />
        <div
          id="main-content"
          className="relative w-full h-full overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900"
        >
          <main>
            <div className="px-4 pt-6">
              <Header />
              <UsersTable />
              <button onClick={() => setShowModal(true)}>Click me</button>
              {showModal ? <EditUserModal /> : null}
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
