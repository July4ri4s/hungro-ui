import Menu from "../../../components/Menu";
import Form from "./components/Form";
import Foto from "./components/foto";

const SignIn = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Menu />
      <div className="flex items-center justify-center w-full">
        <Form />
        <Foto />
      </div>
    </div>
  );
};
export default SignIn;
