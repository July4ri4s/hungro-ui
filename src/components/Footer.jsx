const Footer = () => {
  return (
    <footer className=" bg-[#406036] m-2 .bg-white rounded-lg shadow md: md:dark:bg-[#406036]">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 md: x-auto ">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://flowbite.com/"
            className="flex items-center mb-4 sm:mb-0"
          >
            {/*<img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8 mr-3"
              alt="Flowbite Logo"
            />*/}
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Hungro
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 dark:text-white">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                Inicio
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Nosotros
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                Donar
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Contacto
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-white sm:mx-auto dark:border-white lg:my-8" />
        <span className="block text-sm text-white sm:text-center dark:text-white">
          © 2023{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Hungro™
          </a>
          . Derechos Reservados.
        </span>
      </div>
    </footer>
  );
};
export default Footer;
