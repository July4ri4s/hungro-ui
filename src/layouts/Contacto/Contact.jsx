import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import Formulario from "./components/form";

const Contacto = () => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Menu />
      <Formulario />
      <Footer />
    </div>
  );
};
export default Contacto;
