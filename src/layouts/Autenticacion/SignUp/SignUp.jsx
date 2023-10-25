import React from "react";
import Menu from "../../../components/Menu";
import Form from "./components/Form";
import FotoAuth from "./components/FotoAuth";
const SignUp = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Menu />
      <div className="flex items-center justify-center w-full">
        <Form />
        <FotoAuth />
      </div>
    </div>
  );
};

export default SignUp;
