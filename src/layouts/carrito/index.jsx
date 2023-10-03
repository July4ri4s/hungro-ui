import Footer from "../../components/Footer";
import SliderCard from "../carrito/components/SliderCard";
import Menu from "../../components/Menu";
import Hero from "./components/Hero";
import Cart from "./components/carrito";
const imageUrl =
  "https://images.pexels.com/photos/4874451/pexels-photo-4874451.jpeg";
const Carrito = () => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Menu />
      <Hero />
      <SliderCard />
      <Cart />
      <Footer />
    </div>
  );
};
export default Carrito;
