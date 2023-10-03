import React from "react";
import vision from "../../../assets/canastita.png";

const Hero = () => {
  return (
    <>
      <section class="bg-white mt-[8rem]">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="flex flex-col items-center md:items-start mr-auto place-self-center lg:col-span-7">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-[#406036] text-center md:text-start">
              Creación de canasta de víveres
            </h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl  text-center md:text-start">
              Articulos que se han podido recolectar distribuidos según sus
              caracteristicas para mayor facilidad a la hora de crear canastas
              de víveres
            </p>
            <div>
              <a
                href="#"
                class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-[#406036]  focus:ring-4 focus:ring-primary-300 "
              >
                Crear carrito
                <svg
                  class="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                href="#"
                class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 "
              >
                Ver carrito
              </a>
            </div>
          </div>
          <div class=" mt-10 md:mt-0 lg:col-span-5 lg:flex">
            <img
              src={vision}
              alt="mockup"
              className="object-cover rounded-xl"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
