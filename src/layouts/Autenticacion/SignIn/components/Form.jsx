import React from "react";

const Form = () => {
  return (
    <div className="flex min-h-full flex-col  px-3 py-6 mr-800  lg:px-8 mt-20 ">
      {/*  justify-center */}
      
      <div className="sm:mx-right sm:w-full sm:max-w-sm">
        {/* <img className="mx-auto h-10 w-auto" src="" alt="Hungro" /> */}
        <h2 className=" w-600mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Iniciar sesión en tu cuenta
        </h2>
      </div>

      <div className="mt-10 sm:mx-right sm:w-full sm:max-w-sm ">
        <form className="space-y-6" action="#" method="POST">
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
                required
                className=" block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6 "
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
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-[#406036] hover:ring-green-500 "
                >
                  ¿Olvidaste la contraseña?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6"
              />
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
