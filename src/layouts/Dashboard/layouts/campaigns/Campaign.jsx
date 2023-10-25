import React, { useState } from "react";
import SideBar from "../../components/SideBar";
import NavBar from "../../components/NavBar";
import Headerc from "./components/Header";
import AddCampaignModal from "./components/AddCampaignModal";





const Campaign = () => {
  const [showModal, setShowModal] = useState(false);
 

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
              <Headerc setShowModal={setShowModal} />
                
              {showModal ? (
                <AddCampaignModal
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

export default Campaign;
