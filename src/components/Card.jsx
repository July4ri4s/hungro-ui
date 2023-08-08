import React from "react";
import svg from "./Card.svg";

const Card = ({ imageUrl }) => {
  return (
    <section className="w-screen flex justify-center items-center">
      <div className="w-full flex-col lg:flex lg:flex-row items-center md:mt-[-11rem]">
        <div className="flex flex-col items-center mr-4">
          <div
            className="relative w-full lg:w-64 h-96 mb-4 rounded-lg border overflow-hidden"
            style={{
              backgroundColor: "green",
              backgroundSize: "cover",
              backgroundPosition: "center",
              clipPath:
                "polygon(30% 0%, 51% 0, 53% 4%, 100% 4%, 100% 100%, 20% 100%, 0 100%, 0 0)",
              maskImage: `url('${svg}')`,
              maskSize: "cover",
            }}
          ></div>
          <div className="w-full lg:w-64 h-32 rounded-lg border overflow-hidden"></div>
        </div>

        {/* Contenedor anterior a la derecha */}
        <div
          className="relative w-full lg:w-64 h-96 lg:mx-4 rounded-[2rem] border overflow-hidden"
          style={{
            backgroundImage: `url('${imageUrl}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            clipPath:
              "polygon(30% 0%, 51% 0, 53% 4%, 100% 4%, 100% 100%, 20% 100%, 0 100%, 0 0)",
            maskImage: `url('${svg}')`,
            maskSize: "cover",
          }}
        ></div>

        {/* Nuevo contenedor a la derecha con más altura */}
        <div className="w-full lg:w-64 h-56 rounded-lg border overflow-hidden"></div>

        <div
          className="relative w-full lg:w-64 h-96 lg:mx-4 rounded-[2rem] border overflow-hidden"
          style={{
            backgroundImage: `url('${imageUrl}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            clipPath:
              "polygon(30% 0%, 51% 0, 53% 4%, 100% 4%, 100% 100%, 20% 100%, 0 100%, 0 0)",
            maskImage: `url('${svg}')`,
            maskSize: "cover",
            transform: "scaleX(-1)",
          }}
        ></div>

        <div className="flex flex-col items-center lg:mx-4">
          <div
            className="relative w-full lg:w-64 h-96 mb-4 rounded-lg border overflow-hidden"
            style={{
              backgroundColor: "green",
              backgroundSize: "cover",
              backgroundPosition: "center",
              clipPath:
                "polygon(30% 0%, 51% 0, 53% 4%, 100% 4%, 100% 100%, 20% 100%, 0 100%, 0 0)",
              maskImage: `url('${svg}')`,
              maskSize: "cover",
              transform: "scaleX(-1)",
            }}
          ></div>
          <div className="w-full lg:w-64 h-32 rounded-lg border overflow-hidden"></div>
        </div>
      </div>
    </section>
  );
};

export default Card;
