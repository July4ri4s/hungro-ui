import singluten from "../../../assets/singluten.webp";
import sinazucar from "../../../assets/sinazucar.png";
import sinazucar2 from "../../../assets/sinazucar2.avif";
import arroz from "../../../assets/arroz.png";

const Productos2 = () => {
  return (
    <>
      <h2 className="max-w-2xl mx-auto text-4xl font-semibold leading-tight text-center font-display text-slate-900 sm:text-5xl sm:leading-tight">
        {/* Highlighted word in section headline */}
        <span className="relative whitespace-nowrap">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="249"
            height="22"
            viewBox="0 0 249 22"
            fill="currentColor"
            className="absolute top-2/3 left-0 h-[0.6em] w-full fill-[#1955274f]"
          >
            <path d="M247.564 18.5808C241.772 13.3568 232.473 12.7526 225.225 11.4427C217.124 9.97398 208.996 8.57034 200.846 7.46096C186.542 5.51305 172.169 4.08857 157.79 3.01565C126.033 0.645858 94.0929 0.0338786 62.3387 2.36982C42.1785 3.85419 22.008 5.90888 2.32917 10.8464C-0.0155171 11.4349 0.207047 14.6719 2.6889 14.7084C22.0261 14.9896 41.3866 12.6406 60.7109 11.8568C79.9471 11.0808 99.2274 10.6719 118.484 10.9558C142.604 11.3125 166.719 12.8334 190.722 15.5156C199.956 16.5469 209.195 17.6016 218.411 18.8255C227.864 20.0808 237.259 22 246.767 20.7422C247.709 20.6198 248.426 19.3568 247.564 18.5808Z" />
          </svg>
          <span className="relative ">Sugerencias </span>
        </span>
        <br />
        de alimentos a donar
      </h2>

      <section className=" w-[90%] flex flex-wrap content-center m-auto mt-4 text-[#195527] md:justify-between bg-white p-8 md:p-28 md:m-20 rounded-xl md:h-[40rem] ">
        <div className=" bg-[#195527] h-[480px] w-80 rounded-xl md:mb-7 sm: mb-7">
          <div className="  ">
            <h2 className=" text-2xl text-center font-bold leading-tight px-2 pt-5 pb-2 text-white">
              Productos sin gluten
            </h2>
            <p className=" text-xl text-center font-semibold leading-tight p-1 text-white">
              ¿Sabías que un 1,5% de la población de Costa Rica es intolerante
              al gluten?
            </p>
            <div className=" ">
              <img
                className="w-[50%] block object-center mx-auto mt-2"
                src={arroz}
                alt="dashboard image"
              />
            </div>
          </div>
        </div>

        <div className=" bg-[#195527] h-[480px] w-80 rounded-xl md:mb-7 sm: mb-7">
          <div className="  ">
            <h2 className=" text-2xl text-center font-bold leading-tight px-2 pt-5 pb-2 text-white">
              Productos sin Lactosa
            </h2>
            <p className=" text-xl text-center  leading-tight px-7 p-1 text-white">
              Actualmente existen más de 10 tipos de leches alternativas a la de
              vaca.
            </p>
            <div className=" ">
              <img
                className="w-[30%] block object-center mx-auto mt-2 md:w-[40%] sm:w-[20%]"
                src={sinazucar2}
                alt="dashboard image"
              />
            </div>
          </div>
        </div>

        <div className=" bg-[#195527] h-[480px] w-80 rounded-xl md:mb-7 sm: mb-7">
          <div className="  ">
            <h2 className=" text-2xl text-center font-bold leading-tight px-2 pt-5 pb-2 text-white">
              Productos sin Azúcar
            </h2>
            <p className=" text-xl text-center  leading-tight px-7 p-1 text-white">
              ¿Sabías que el exceso de azúcar causa más de 15 enfermedades
              distintas?
            </p>
            <div className=" ">
              <img
                className="w-[70%] block object-center mx-auto mt-2"
                src={sinazucar}
                alt="dashboard image"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Productos2;
