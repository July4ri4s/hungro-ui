import React, {useState} from "react";
import SideBar from "../../components/SideBar";
import NavBar from "../../components/NavBar";

import AddProducModal from "../products/components/AddProducModal";

import AddCampaignModal from "./components/AddCampaignModal";
import Header from "./components/Header";
import CampaignsTable from "./components/CampaignsTable";


const Campaigns = () => {
  const [showModal, setShowModal] = useState(false);

  // const { refetch } = useQuery(GET_PRODUCTS);
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
              <Header setShowModal={setShowModal}/>
              {/* <CampaignsTable refetch={refetch} /> */}

              {showModal ? (
                <AddCampaignModal
                  close={() => {
                    setShowModal(false);
                  }}
                  // refetch={refetch}
                  
                />
              ) : null}

              {/* {showModal ? (
              <EditUserModal
                close={() => {
                  setShowModal(false);
                }}
              />
            ) : null} */}

              {/* <Pagination /> */}
            </div>
          </main>

          {/* Aquí iría el componente footer */}
        </div>
      </div>
    </>
  );
};

export default Campaigns;
