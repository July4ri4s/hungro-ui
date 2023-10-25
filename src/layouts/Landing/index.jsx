import Card from "../../components/Card";
import Footer from "../../components/Footer";
import SliderCard from "../../components/SliderCard";
import Menu from "../../components/menu";
import Hero from "./components/Hero";
import Values from "./components/Values";
import Productos from "./components/Productos";
import Productos2 from "./components/Productos2";
import Donacion from "./components/donations";

const Landing = () => {
  const imageUrl =
    "https://images.pexels.com/photos/4874451/pexels-photo-4874451.jpeg";

  return (
    <div className="flex flex-col min-h-screen relative">
      <Menu />
      <Hero />
      <Card imageUrl={imageUrl} />
      <Donacion/>
      <Productos2/>
      <Values />
      <SliderCard />
      <Footer />
    </div>
  );
};
export default Landing;
