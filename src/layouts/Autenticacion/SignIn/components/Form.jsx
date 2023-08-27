import React from "react";

const Form = () => {
  return (
    <div className="md:w-[30%] w-[100%] flex flex-col items-center">
      {/*  justify-center */}

      <div className="w-[80%]">
        <h2 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-[#406036]">
          Iniciar sesión
        </h2>
      </div>

      <div className="mt-10 w-[80%] md:w-full ">
        <form className="space-y-6 w-full" action="#" method="POST">
          <div>
            <div className="flex items-center justify-between ">
              <label
                htmlFor="email"
                className="font-semibold text-[#406036] hover:ring-green-500 "
              >
                Correo electrónico
              </label>
            </div>
            <div className="mt-2  ">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="ejemplo@ejemplo.com"
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mr-">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900 "
              >
                Contraseña
              </label>
            </div>
            <div className="mt-2">
              <input
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="•••••••••"
                required
              />
            </div>
            <div className="text-sm mt-2">
              <a
                href="#"
                className="font-semibold text-[#406036] hover:ring-green-500 "
              >
                ¿Olvidaste la contraseña?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-[#406036] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#4d7242] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
            >
              Iniciar Sesión
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
