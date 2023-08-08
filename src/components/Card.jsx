import React from "react";

// Componente Card
const Card = ({ imageUrl }) => {
  return (
    <section className="w-screen flex justify-center items-center p-4">
      <div className="w-full flex flex-col md:flex-row flex-wrap justify-center md:items-end items-center space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex flex-col items-center space-y-4">
          <div
            className="relative hidden md:block w-full md:w-64 h-64 md:h-96 mb-4 rounded-lg border overflow-hidden"
            style={{
              backgroundColor: "green",
              backgroundSize: "cover",
              backgroundPosition: "center",
              clipPath:
                "polygon(30% 0%, 51% 0, 53% 4%, 100% 4%, 100% 100%, 20% 100%, 0 100%, 0 0)",
              maskSize: "cover",
            }}
          ></div>
          <div className="hidden md:block w-64 h-24 md:h-32 rounded-lg border overflow-hidden"></div>
        </div>

        <div
          className="relative hidden md:block w-full md:w-64 h-64 md:h-96 my-4 md:my-0 rounded-lg border overflow-hidden"
          style={{
            backgroundImage: `url('${imageUrl}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            clipPath:
              "polygon(30% 0%, 51% 0, 53% 4%, 100% 4%, 100% 100%, 20% 100%, 0 100%, 0 0)",
            maskSize: "cover",
          }}
        ></div>

        <div className="w-full hidden md:block  md:w-64 h-40 md:h-56 rounded-lg border overflow-hidden"></div>

        <div
          className="relative  w-64 h-96 my-4 md:my-0 rounded-lg border overflow-hidden"
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
            className="relative hidden md:block  w-full md:w-64 h-64 md:h-96 mb-4 rounded-lg border overflow-hidden"
            style={{
              backgroundColor: "green",
              backgroundSize: "cover",
              backgroundPosition: "center",
              clipPath:
                "polygon(30% 0%, 51% 0, 53% 4%, 100% 4%, 100% 100%, 20% 100%, 0 100%, 0 0)",
              maskSize: "cover",
              transform: "scaleX(-1)",
            }}
          ></div>
          <div className="w-64 h-24 md:h-32 rounded-lg border overflow-hidden"></div>
        </div>
      </div>
    </section>
  );
};

export default Card;
