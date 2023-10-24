import React, { useState } from "react";
import SideBar from "../../components/SideBar";
import NavBar from "../../components/NavBar";

import AddProducModal from "../products/components/AddProducModal";
import { GET_BASKETS, GET_PRODUCTS } from "../../../../graphql/queries";
import { useQuery } from "@apollo/client";

import Header from "./components/Header";
import AddCampaignModal from "../campaigns/components/AddCampaignModal";
import AddBasketModal from "./components/AddBasketModal";
import BasketsTable from "./components/BasketsTable";

const Baskets = () => {
  const [showModal, setShowModal] = useState(false);
  const { refetch } = useQuery(GET_BASKETS);

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
              <Header setShowModal={setShowModal} />
              <BasketsTable refetch={refetch} />

              {showModal ? (
                <AddBasketModal
                  close={() => {
                    setShowModal(false);
                  }}
                  refetch={refetch}
                />
              ) : null}

              {/* <Pagination /> */}
            </div>
          </main>

          {/* Aquí iría el componente footer */}
        </div>
      </div>
    </>
  );
};

export default Baskets;

// import React, {useState} from "react";
// import SideBar from "../../components/SideBar";
// import NavBar from "../../components/NavBar";
// import Header from "../campaigns/components/Header";
// import ProductsSelect from "./components/GetMyProducts";
// import CreateBasketForm from "./components/CreateBasketForm";
// import AddCampaignModal from "../campaigns/components/AddCampaignModal";

// const Baskets = () => {
//   const [showModal, setShowModal] = useState(false);

//   return (
//     <>
//       {/* Aquí va el component NavBar */}
//       <NavBar />

//       <div className="flex pt-16 overflow-hidden bg-gray-50 ">
//         {/* Aquí va el component SideBar */}
//         <SideBar />
//         <div
//           id="main-content"
//           className="relative w-full h-full overflow-y-auto bg-gray-50 lg:ml-64"
//         >
//           <main>
//             <div className="px-4 pt-6">
//               <Header />

//               <CreateBasketForm />

//               {showModal ? (
//                 <AddCampaignModal
//                   close={() => {
//                     setShowModal(false);
//                   }}

//                 />
//               ) : null}

//               {/* <UsersTable setShowModal={setShowModal} /> */}

//               {/* {showModal ? (
//               <EditUserModal
//                 close={() => {
//                   setShowModal(false);
//                 }}
//               />
//             ) : null} */}

//               {/* <Pagination /> */}
//             </div>
//           </main>

//           {/* Aquí iría el componente footer */}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Baskets;
