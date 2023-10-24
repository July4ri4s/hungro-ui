import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import SideBar from "../../components/SideBar";
import Header from "./Header";
import Pagination from "./pagination";
import ProfileCard from "./profileCard";
import UsersTable from "../users/components/UsersTable";






const Profile = () => {
    //const [showModal, setShowModal] = useState(false);
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
              <Header/>
            <div>
            <ProfileCard/>
            </div>
              


              <Pagination/>
            </div>
          </main>

          {/* Aquí iría el componente footer */}
        </div>
      </div>
    </>
  );
};

export default Profile;
