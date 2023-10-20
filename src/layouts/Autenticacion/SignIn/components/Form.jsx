import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_MUTATION } from "../../../../graphql/mutations";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [login, { loading, error }] = useMutation(LOGIN_MUTATION);

  // Use navigate to redirect user to sign in page
  const navigate = useNavigate();

  const [message, setMessage] = useState(null);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await login({ variables: { email, password } });

      localStorage.setItem("token", data.login.token);
      setIsAuthenticated(true);

      setMessage(`Autenticado correctamente. ¡Bienvenido!`);

      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } catch (err) {
      console.error("Error de inicio de sesión", err);
    }
  };

  return (
    <div className="md:w-[30%] w-[100%] flex flex-col items-center">
      <div className="w-[80%]">
        <h2 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-[#195527] md:text-5xl lg:text-6xl ">
          Iniciar sesión
        </h2>
      </div>

      {message && showMessage()}
      <div className="mt-10 w-[80%] md:w-full ">
        <form className="space-y-6 w-full" onSubmit={handleSubmit}>
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
            <div className="text-sm mt-2">
              <a
                href="#"
                className="font-semibold text-[#195527] hover:ring-green-500 "
              >
                ¿Olvidaste la contraseña?
              </a>
              <br />
              <br />
              <a
                href="/registrarse"
                className="font-semibold hover:ring-green-500 "
              >
                ¿No tienes una cuenta?
                <span className="text-[#195527] ml-2"> Regístrate </span>
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="flex w-full justify-center rounded-md bg-[#195527] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#1b7a2e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
            >
              Iniciar Sesión
            </button>
          </div>

          {error && <p className="mt-4 text-red-500">{error.message}</p>}
        </form>
      </div>
    </div>
  );
};

export default Form;
