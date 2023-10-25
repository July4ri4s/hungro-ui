import React from "react";

// Componente Card
const Card = ({ imageUrl }) => {
  const carita = "../../src/assets/caritaa.png";
  const corazon = "../../src/assets/corazon2.png";
  return (
    <section className="w-screen flex justify-center items-center p-4 relative md:top-[-11rem] z-10">
      <div className="w-full flex flex-col md:flex-row flex-wrap justify-center md:items-end items-center space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex flex-col items-center space-y-4">
          <div
            className="relative hidden md:block w-full md:w-64 h-64 md:h-96 mb-4 rounded-lg border overflow-hidden"
            style={{
              backgroundImage: `url('https://images.pexels.com/photos/6995015/pexels-photo-6995015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              clipPath:
                "polygon(30% 0%, 51% 0, 53% 4%, 100% 4%, 100% 100%, 20% 100%, 0 100%, 0 0)",
              maskSize: "cover",
            }}
          ></div>
          <div className=" bg-[#195527] w-[20rem] md:w-64  h-24 md:h-32 rounded-lg border overflow-hidden flex justify-around items-center">
            <img src={carita} className="w-16 h-16" alt="" />
            <h1 className="text-white text-xl font-semibold tracking-tight">
              Creando sonrisas
            </h1>
          </div>
        </div>

        <div
          className="relative hidden md:block w-[20rem] md:w-64  h-64 md:h-96 my-4 md:my-0 rounded-lg border overflow-hidden"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/9531944/pexels-photo-9531944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            clipPath:
              "polygon(30% 0%, 51% 0, 53% 4%, 100% 4%, 100% 100%, 20% 100%, 0 100%, 0 0)",
            maskSize: "cover",
          }}
        ></div>

        <div className=" w-full text-xl font-bold hidden md:flex md:flex-col justify-around items-center md:w-64 h-40 md:h-56 rounded-lg border overflow-hidden">
          <div></div>
          <div className=" text-2xl ">
            <p>Únete al cambio</p>
          </div>
          <div className=" text-white flex justify-around items-center text-xl font-semibold bg-[#195527] hover:bg-[#1b7a2e] p-2 rounded-lg">
            <a href="/inicio-sesion">Donar ahora</a>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{ fill: "white" }}
              >
                <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path>
              </svg>
            </div>
          </div>
        </div>

        <div
          className="relative  w-[20rem] md:w-64  h-96 my-4 md:my-0 rounded-lg border overflow-hidden"
          style={{
            backgroundImage: `url('${imageUrl}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            clipPath:
              "polygon(30% 0%, 51% 0, 53% 4%, 100% 4%, 100% 100%, 20% 100%, 0 100%, 0 0)",
            maskSize: "cover",
            transform: "scaleX(-1)",
          }}
        ></div>

        <div className="md:flex flex-col items-center space-y-4">
          <div
            className="relative hidden md:block md:items-end w-full md:w-64 h-64 md:h-96 mb-4 rounded-lg border overflow-hidden "
            style={{
              backgroundColor: "#C8E676",
              backgroundSize: "cover",
              backgroundImage: `url('https://images.pexels.com/photos/4846209/pexels-photo-4846209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
              backgroundPosition: "center",
              clipPath:
                "polygon(30% 0%, 51% 0, 53% 4%, 100% 4%, 100% 100%, 20% 100%, 0 100%, 0 0)",
              maskSize: "cover",
              transform: "scaleX(-1)",
            }}
          ></div>
          <div className=" bg-[#195527] w-[20rem] md:w-64 h-24 md:h-32 rounded-lg border overflow-hidden flex justify-around items-center">
            <img src={corazon} className="w-16 h-16" alt="" />
            <h1 className="text-white text-xl font-semibold tracking-tight">
              Tú lugar de ayuda
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
