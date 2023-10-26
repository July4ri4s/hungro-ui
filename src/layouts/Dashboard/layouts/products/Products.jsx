import React, { useState } from "react";
import SideBar from "../../components/SideBar";
import NavBar from "../../components/NavBar";
import Header from "./components/Header";
import ProductsTable from "./components/ProductsTable";
import AddProducModal from "./components/AddProducModal";
import { GET_PRODUCTS } from "../../../../graphql/queries";
import { useQuery } from "@apollo/client";
import { isAuth } from "../../../../utils/auth";

const Products = () => {
  isAuth();
  const [showModal, setShowModal] = useState(false);
  const { refetch } = useQuery(GET_PRODUCTS);

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
              <ProductsTable refetch={refetch} searchTerm={searchTerm} />

              {showModal ? (
                <AddProducModal
                  close={() => {
                    setShowModal(false);
                  }}
                  refetch={refetch}
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

export default Products;
