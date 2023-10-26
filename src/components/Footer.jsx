import logo from "../assets/Logo.png";
const Footer = () => {
  return (
    <footer className=" bg-[#195527] m-2 .bg-white rounded-lg shadow md: ]">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 md: x-auto ">
        <div className="flex items-center justify-between">
          <div>
            <a
              href="https://Hungro.com/"
              className="flex items-center mb-4 sm:mb-0"
            >
              <span className=" text-white self-center text-2xl font-semibold whitespace-nowrap ">
                Hungro
              </span>
            </a>
          </div>

          <div>
            <a
              href="https://Hungro.com/"
              className="flex items-center mb-4 sm:mb-0"
            >
              <img src={logo} className="h-20" alt="Hungro Logo" />
            </a>
          </div>

          <div>
            <ul className="flex flex-col items-center mb-6 text-sm font-medium text-white sm:mb-0 md:flex-col md:space-y-2">
              <li>
                <a href="/" className="hover:underline ">
                  Inicio
                </a>
              </li>
              <li>
                <a href="/nosotros" className=" hover:underline">
                  Nosotros
                </a>
              </li>

              <li>
                <a href="/contacto" className="hover:underline">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-6 border-white sm:mx-auto  lg:my-8" />
        <span className="block text-sm text-white sm:text-center ">
          © 2023{" "}
          <a href="https://Hungro.com/" className="hover:underline">
            Hungro™
          </a>
          . Derechos Reservados.
        </span>
      </div>
    </footer>
  );
};
export default Footer;
