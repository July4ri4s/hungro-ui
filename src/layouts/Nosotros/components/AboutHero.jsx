import mision from "../../../assets/Mision.png";
import vision from "../../../assets/Vision.png";
import july from "../../../assets/july.jpeg";
import bran from "../../../assets/bran.jpeg";
import ange from "../../../assets/ange.jpeg";
const AboutHero = () => {
  return (
    <section className="bg-white mt-24 ">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 ">
        <h1 className="mb-4 text-5xl font-extrabold tracking-tight leading-none text-gray-900 md:text-6xl lg:text-7xl dark:text-[#406036]">
          Acerca de nosotros
        </h1>
        <p className="mb-8 text-2xl font-normal text-gray-500 lg:text-x1 sm:px-16 xl:px-48 dark:text-gray-400">
          Esta es una herramienta de donaciones. Donde podrás donar a
          organizaciones como las Obras del Espíritu Santo, ayudando a personas
          en situaciones de riesgo.
        </p>
      </div>

      <section className="rounded-lg bg-white ">
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6 ">
          <div className="flex items-center justify-center ">
            <img className="w-[60%] block" src={mision} alt="dashboard image" />
          </div>

          <div className="mt-20 md:mt-0 flex flex-col items-center justify-center md:items-start ">
            <h2 className=" mb-8 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-[#406036]">
              Nuestra misión
            </h2>
            <p className="mb-8 w-[90%] text-center md:text-justify  text-2xl font-normal text-gray-500 md:text-xl dark:text-gray-400">
              Ayudar a personas de bajos recursos a adquirir alimentos según sus
              necesidades por medio de donaciones, las cuales ayudan a reducir
              el desperdicio de alimentos.
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col w-[90%]  pb-6  m-auto mt-24 text-black items-center md:justify-between bg-[#406036db] p-18 md:p-28 md:m-20 rounded-xl md:h-[40rem]">
        <div className="flex flex-col justify-center  items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6 ">
          <div className="mt-4 mb-9 md:mt-0 flex flex-col justify-center  items-center md:justify-start md:items-start">
            <h2 className=" mb-8 text-4xl  text-start font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              Nuestra visión
            </h2>
            <p className="mb-8 w-full md:w-[90%] text-center md:text-justify  text-2xl font-normal text-gray-500 md:text-xl dark:text-white">
              Minimizar la hambruna del país, evitar el desperdicio de
              alimentos, ayudar a la organización y distribución de alimentos
            </p>
          </div>
          <div className="flex items-center justify-center ">
            <img
              className="w-[80%] md:w-[60%] rounded-xl"
              src={vision}
              alt="dashboard image"
            />
          </div>
        </div>
      </section>

      <div className="py-20 bg-white-50">
        <div className="container mx-auto px-6 md:px-12 xl:px-32">
          <div className="mb-16 text-center">
            <h2 className=" mb-8 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-[#406036]">
              ¿Quiénes somos?
            </h2>
            <p className="mmmb-8 text-2xl font-normal text-gray-500 lg:w-8/12 lg:mx-auto dark:text-gray-400">
              Somos un grupo de jóvenes que desean facilitar el proceso de
              ayudar a las demás personas, por medio de esta herramienta que
              permite donar más fácilmente y que además distribuye los alimentos
              según las necesidades de los donatarios.
            </p>
          </div>
          <div className="grid gap-12 items-center md:grid-cols-3">
            <div className="space-y-4 text-center">
              <img
                className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
                src={july}
                alt="woman"
                loading="lazy"
                width="640"
                height="805"
              />
              <div>
                <h4 className="text-2xl">Juliana Arias López</h4>
                <span className="block text-sm text-gray-500">Estudiante</span>
              </div>
            </div>

            <div className="space-y-4 text-center">
              <img
                className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
                src={ange}
                alt="woman"
                loading="lazy"
                width="1000"
                height="667"
              />
              <div>
                <h4 className="text-2xl">Angélica Marín Vargas</h4>
                <span className="block text-sm text-gray-500">Estudiante</span>
              </div>
            </div>
            <div className="space-y-4 text-center">
              <img
                className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
                src={bran}
                alt="woman"
                loading="lazy"
                width="1000"
                height="667"
              />
              <div>
                <h4 className="text-2xl">Brandon Valverde Quirós</h4>
                <span className="block text-sm text-gray-500">Estudiante</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
