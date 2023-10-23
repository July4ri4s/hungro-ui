import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import {
  CREATE_DONOR_MUTATION,
  CREATE_ORGANIZATION_MUTATION,
} from "../../../../graphql/mutations";
import { useNavigate } from "react-router-dom";

const Form = () => {
  // Paso número 1, crear los estados.
  const [formType, setFormType] = useState("donor");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState();
  const [campus, setCampus] = useState([""]);

  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState(null);

  //Paso número 2, llamar a las mutaciones necesarias
  const [createDonor, { error }] = useMutation(CREATE_DONOR_MUTATION);
  const [createOrganization, { error: orgError }] = useMutation(
    CREATE_ORGANIZATION_MUTATION
  );

  const navigate = useNavigate();

  const [message, setMessage] = useState(null);

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

  const handleAddCampus = () => {
    setCampus([...campus, ""]);
  };

  const handleCampusChange = (index, value) => {
    const newCampus = [...campus];
    newCampus[index] = value;
    setCampus(newCampus);
  };

  //Paso número 2, crear la función para el submit.
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let input = { name, email, password, address };

      if (formType === "donor") {
        await createDonor({ variables: { input } });
      } else {
        input.campus = campus;
        await createOrganization({ variables: { input } });
      }

      setMessage(`Registrado correctamente. ¡Bienvenido!`);

      setTimeout(() => {
        navigate("/inicio-sesion");
      }, 2000);
    } catch (err) {
      console.error("Registration Error", err);
    }
  };

  return (
    <div className="md:w-[30%] w-[100%] flex flex-col items-center">
      <div className="w-[80%]">
        <h2 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl ">
          Registrarse
        </h2>
      </div>

      {message && showMessage()}
      <div className="mt-10 w-[80%] md:w-full ">
        <form className="space-y-6 w-full" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="userType"
              className="font-semibold text-[#195527] hover:ring-green-500 "
            >
              Tipo de Usuario
            </label>
            <select
              id="userType"
              value={formType}
              onChange={(e) => setFormType(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              <option value="donor">Donante</option>
              <option value="organization">Organización</option>
            </select>
          </div>

          <div>
            <div className="flex items-center justify-between ">
              <label
                htmlFor="email"
                className="font-semibold text-[#195527] hover:ring-green-500 "
              >
                Nombre
              </label>
            </div>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Pedro Picapiedra"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between ">
              <label
                htmlFor="email"
                className="font-semibold text-[#195527] hover:ring-green-500 "
              >
                Correo electrónico
              </label>
            </div>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="ejemplo@ejemplo.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900 "
              >
                Contraseña
              </label>
            </div>
            <div className="mt-2">
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="•••••••••"
                required
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium leading-6 text-gray-900 "
              >
                Confirmar Contraseña
              </label>
            </div>
            <div className="mt-2">
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="•••••••••"
                required
              />
            </div>
            {passwordError && (
              <p className="mt-2 text-red-500">{passwordError}</p>
            )}
          </div>

          {/* Address Input */}
          <div>
            <label
              htmlFor="address"
              className="font-semibold text-[#195527] hover:ring-green-500 "
            >
              Dirección
            </label>
            <input
              id="address"
              value={address}
              name="address"
              type="text"
              placeholder="San José, Costa Rica"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          {formType === "organization" ? (
            <div>
              <div className="flex items-center justify-between ">
                <label
                  htmlFor="campus"
                  className="font-semibold text-[#195527] hover:ring-green-500 "
                >
                  Sedes
                </label>
              </div>
              <div className="mt-2">
                {campus.map((value, index) => (
                  <div key={index} className="my-2">
                    <input
                      value={value}
                      onChange={(e) =>
                        handleCampusChange(index, e.target.value)
                      }
                      placeholder="Ingrese una sede"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    />
                  </div>
                ))}
                <button
                  type="button"
                  onClick={handleAddCampus}
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 my-2"
                >
                  Agregar otra sede
                </button>
              </div>
            </div>
          ) : (
            <></>
          )}

          <div>
            <button
              type="submit"
              // disabled={loading}
              className="flex w-full justify-center rounded-md bg-[#195527] hover:bg-[#1b7a2e] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
            >
              Registrarme
            </button>
          </div>

          {error ||
            (orgError && <p className="mt-4 text-red-500">{error.message}</p>)}
        </form>
      </div>
    </div>
  );
};

export default Form;
