import { useApolloClient } from "@apollo/client";
import React from "react";
import { useNavigate } from "react-router-dom";

const SignOutButton = () => {
  const navigate = useNavigate();
  const client = useApolloClient();

  const signOut = () => {
    localStorage.removeItem("token");
    client.clearStore();
    navigate("/inicio-sesion");
  };

  return (
    <button
      id="signOutButton"
      className="text-white bg-[#195527]	hover:bg-[#1b7a2e] focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-16 py-2.5 focus:outline-none"
      type="button"
      onClick={() => signOut()}
    >
      Cerrar sesión
    </button>
  );
};

export default SignOutButton;
