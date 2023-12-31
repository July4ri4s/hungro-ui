const Hero = () => {
  const imageUrl =
    "https://images.pexels.com/photos/4874451/pexels-photo-4874451.jpeg";

  return (
    <>
      <section className=" mt-24 z-30">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-[#195527] md:text-5xl lg:text-6xl ">
            Dona, colabora y sé parte del cambio
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 ">
            Bienvenidos a Hungro, plataforma en la que con un solo click podemos
            marcar la diferencia. Unimos manos y corazones para combatir el
            hambre y el desperdicio en nuestra comunidad.
          </p>
          <div className="flex flex-col mb-8 lg:mb-1 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a
              href="/nosotros"
              className="shadow-custom inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-[#195527] rounded-lg bg-primary-700 hover:bg-primary-800  "
            >
              Más información
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="/inicio-sesion"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-gray-300 hover: hover:bg-[#1b7a2e]    bg-[#195527]"
            >
              Donar
            </a>
          </div>

          <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4"></div>
        </div>
      </section>
    </>
  );
};

export default Hero;
