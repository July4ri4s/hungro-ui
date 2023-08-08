import Card from "../../components/Card";
import Menu from "../../components/menu";
import Hero from "./components/Hero";

const Landing = () => {
  const imageUrl =
    "https://images.pexels.com/photos/4874451/pexels-photo-4874451.jpeg";

  return (
    <>
      <Menu />
      <Hero />
      <div className="absolute md:top-[21rem] w-full">
        <Card imageUrl={imageUrl} />
      </div>{" "}
    </>
  );
};
export default Landing;
