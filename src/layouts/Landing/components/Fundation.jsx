import React from "react";
import carita from "../../../assets/caritaa.png";
import corazon from "../../../assets/corazon2.png";
import corona from "../../../assets/corona2.png";

const Fundation = () => {
  return (
    <div className="flex flex-col w-[90%]  pb-6  m-auto mt-24 text-black items-center md:justify-between bg-[#406036db] p-18 md:p-28 md:m-20 rounded-xl md:h-[40rem]">
      <div className="text-center mb-4 text-4xl  tracking-tight mt-6">
        <h2 className="max-w-2xl mx-auto text-4xl font-semibold leading-tight text-center font-display text-slate-900 sm:text-5xl sm:leading-tight">
          Nuestros Valores
        </h2>
      </div>

      <div className="flex flex-col md:flex-row justify-around text-center  w-full mt-10 ">
        <div className="flex flex-col justify-center items-center md:m-0 mb-16 sm:m-0">
          <img src={carita} alt="carita" className="w-[120px] h-[120px]" />

          <h2 className="my-4 font-semibold text-2xl">Altruismo:</h2>
          <p className=" md:w-44 ">
            Tendencia a procurar el bien de las personas de manera interesada.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <img src={corazon} alt="corazon" className="w-[120px] h-[120px]" />

          <h2 className="my-4 font-semibold text-2xl">Ayuda:</h2>
          <p className=" md:w-44 ">
            Hacer un esfuerzo, poner los medios para el logro de algo.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center mt-16">
          <img src={corona} alt="corona" className="w-[120px] h-[120px]" />

          <h2 className="my-4 font-semibold text-2xl">Solidaridad:</h2>
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
