import React, { useState } from "react";
import imagen from "../assets/react.svg";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  console.log("cerrado", isOpen);

  const openMenu = () => {
    setIsOpen(!isOpen);
    console.log("abierto", isOpen);
  };

  return (
    <nav className="bg-white fixed w-full top-0 left-0 border-b border-neutral-100 z-50">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl  mx-auto p-4">
        {/*aca va la imagen*/}
        <a
          href="/"
          className="
        flex items-center "
        >
          {/*  <img src={imagen} className="h-8 mr-4" alt="" /> */}
          <span className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-2xl lg:text-3xl dark:text-[#406036]">
            Hungro
          </span>
        </a>

        {/*aca va el boton*/}
        <div className="flex md:order-2">
          <button
            type="button"
            className="bg-[#406036]	hover:bg-[#587E4C] rounded-lg text-sm mr-3 md:mr-0 font-medium px-4 py-2 text-center text-white hove"
          >
            Registrarse
          </button>

          {/*boton del menu en celulares y tablets*/}
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-[#406036] focus:outline-none focus:ring-2 focus:ring-white dark:text-gray-400 dark:hover:bg-[#406036] dark:focus:ring-[#406036]"
            aria-controls="navbar-sticky"
            aria-expanded="false"
            onClick={openMenu}
          >
            <span className="sr-only">Abrir menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/*aca va el menu*/}
        <div
          className={`w-full justify-between ${
            isOpen ? "block" : "hidden"
          } items-center  md:flex md:w-auto md:order-1`}
        >
          <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-500 md:flex-row md:space-x-8 md:border-0">
            <li>
              <a
                href="/"
                className="block py-2 pl-3 pr-4 text-white bg-[#86A97A] rounded md:bg-transparent md:text-gray-500 md:p-0 md:dark:text-gray-500"
              >
                Incio
              </a>
            </li>
            <li>
              <a
                href="/nosotros"
                className="block py-2 pl-3 pr-4 text-white bg-[#86A97A] rounded md:bg-transparent md:text-gray-500 md:p-0 md:dark:text-gray-500"
              >
                Nosotros
              </a>
            </li>
            <li>
              <a
                href="/cuenta"
                className="block py-2 pl-3 pr-4 text-white bg-[#86A97A] rounded md:bg-transparent md:text-gray-500 md:p-0 md:dark:text-gray-500"
              >
                Donar
              </a>
            </li>
            <li>
              <a
                href="/cuenta"
                className="block py-2 pl-3 pr-4 text-white bg-[#86A97A] rounded md:bg-transparent md:text-gray-500 md:p-0 md:dark:text-gray-500"
              >
                Contacto
              </a>
            </li>
            <li>
              <a
                href="/cuenta"
                className="block py-2 pl-3 pr-4 text-white bg-[#86A97A] rounded md:bg-transparent md:text-gray-500 md:p-0 md:dark:text-gray-500"
              >
                Iniciar Sesión
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Menu;
