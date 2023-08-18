import Card from "../../components/Card";
import Footer from "../../components/Footer";
import SliderCard from "../../components/SliderCard";
import Menu from "../../components/menu";
import Fundation from "./components/Fundation";
import Hero from "./components/Hero";

const Landing = () => {
  const imageUrl =
    "https://images.pexels.com/photos/4874451/pexels-photo-4874451.jpeg";

  return (
    <div className="flex flex-col min-h-screen relative">
      <Menu />
      <Hero />
      <Card imageUrl={imageUrl} />
      <Fundation />
      <SliderCard />
      <Footer />
    </div>
  );
};
export default Landing;
