import React, { useEffect, useState } from "react";
//import EditUserModal from "";
import { useMutation, useQuery } from "@apollo/client";
import { GET_ME } from "../../../../graphql/queries";
import { UPDATE_DONOR_MUTATION } from "../../../../graphql/mutations";

const ProfileCard = () => {
  const [message, setMessage] = useState(null);

  const { data, loading, error } = useQuery(GET_ME);
  const [updateDonor] = useMutation(UPDATE_DONOR_MUTATION);
  const [isEditing, setIsEditing] = useState({
    name: false,
    email: false,
    address: false,
  });

  const myData = data?.getMe?.donor;

  console.log(myData);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  useEffect(() => {
    if (myData) {
      setFormData({
        name: myData.name,
        email: myData.email,
        address: myData.address,
      });
    }
  }, [myData]);

  const showMessage = () => {
    return (
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: "9999",
          backgroundColor: "#ffffff",
          padding: "20px",
          textAlign: "center",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          maxWidth: "90%",
          width: "400px",
        }}
      >
        <div className="container">
          <div className="content" id="popup">
            <p style={{ marginBottom: "1rem" }}>{message}</p>
          </div>
        </div>
      </div>
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDoubleClick = (field) => {
    console.log(`Double click detected on ${field}`);
    setIsEditing((prevState) => ({
      ...prevState,
      [field]: true,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const updatedData = {};
    for (let field in isEditing) {
      if (isEditing[field]) {
        updatedData[field] = formData[field];
      }
    }
    if (Object.keys(updatedData).length > 0) {
      try {
        await updateDonor({
          variables: { updateDonorId: myData.id, input: updatedData },
        });

        setMessage(`Se ha actualizado correctamente`);

        setMessage(`Se ha actualizado correctamente`);

        setTimeout(() => {
          setMessage(null);
        }, 2000);
      } catch (error) {
        console.error("Error updating donor:", error);
      }
    }
    setIsEditing({
      name: false,
      email: false,
      address: false,
    });
  };

  console.log(isEditing);
  return (
    <>
      <div className="grid grid-cols-1 px-4 pt-6 xl:grid-cols-3 xl:gap-4 ">
        {message && showMessage()}
        <div className="col-span-2">
          <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2  sm:p-6 ">
            <h3 className="mb-4 text-xl font-semibold ">Información general</h3>
            <div className="mb-4 text-sm text-gray-500 ">
              Da doble click al campo que quieras editar para habilitar la
              edición
            </div>
            <form action="#" onSubmit={handleFormSubmit}>
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5    "
                    placeholder="Bonnie"
                    readOnly={!isEditing.name}
                    onDoubleClick={() => handleDoubleClick("name")}
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5    "
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Bonnie"
                    required
                    readOnly={!isEditing.email}
                    onDoubleClick={() => handleDoubleClick("email")}
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="address"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Dirección
                  </label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5    "
                    placeholder="Bonnie"
                    readOnly={!isEditing.address}
                    onDoubleClick={() => handleDoubleClick("address")}
                  />
                </div>

                <div className="col-span-6 sm:col-full">
                  <button
                    onClick={handleFormSubmit}
                    type="submit"
                    id="updateProductButton"
                    data-drawer-target="drawer-update-basket-default"
                    data-drawer-show="drawer-update-basket-default"
                    aria-controls="drawer-update-basket-default"
                    data-drawer-placement="right"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-[#376543] hover:bg-[#1b7a2e] focus:ring-4 focus:ring-primary-300   "
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path>
                      <path
                        fillRule="evenodd"
                        d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Actualizar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
