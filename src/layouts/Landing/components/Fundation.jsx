import React from "react";
import carita from "../../../assets/caritaa.png";
import corazon from "../../../assets/corazon2.png";
import corona from "../../../assets/corona2.png";

const Fundation = () => {
  return (
    <div className="flex flex-col text-white items-center md:justify-between bg-[#406036] p-28 m-20 rounded-xl md:h-[40rem]">
      <div className="text-center mb-4 text-4xl font-extrabold tracking-tight">
        <h1>Nuestros Valores</h1>
      </div>

      <div className="flex flex-col md:flex-row justify-around text-center  w-full mt-10 ">
        <div className="flex flex-col justify-center items-center md:m-0 mb-16 sm:m-0">
          <img src={carita} alt="carita" className="w-[40%] h-[40%]" />

          <h2 className="my-4 font-semibold">Altruismo:</h2>
          <p className=" md:w-44 ">
            Tendencia a procurar el bien de las personas de manera
            desinteresada, incluso en contra del interés propio.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <img src={corazon} alt="corazon" className="w-[40%] h-[40%]" />

          <h2 className="my-4 font-semibold">Ayuda:</h2>
          <p className=" md:w-44 ">
            Hacer un esfuerzo, poner los medios para el logro de algo.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center mt-16">
          <img src={corona} alt="corona" className="w-[40%] h-[40%]" />

          <h2 className="my-4 font-semibold">Solidaridad:</h2>
          <p className=" md:w-44 ">
            Es un valor que se caracteriza por la colaboración mutua entre los
            individuos.
          </p>
        </div>
      </div>
    </div>

  );
};

export default Fundation;
