import singluten from "../../../assets/singluten.webp";
import sinazucar from "../../../assets/sinazucar.png";
import sinazucar2 from "../../../assets/sinazucar2.avif";
import arroz from "../../../assets/arroz.png";

const Productos = () => {
  return (
    <section className=" w-[90%] flex flex-wrap content-center m-auto  text-[#195527] md:justify-between bg-[#195527db] p-18 md:p-28 md:m-20 rounded-xl md:h-[40rem]">
      <div className=" bg-white h-[480px] w-80 rounded-xl">
        <div className="  ">
          <h2 className=" text-5xl text-center font-bold leading-tight px-2 pt-5 pb-2 text-[#195527]">
            Productos sin Gluten
          </h2>
          <p className=" text-xl text-center font-semibold leading-tight p-1 text-[#195527]">
            ¿Sabías que un 1,5% de la población de Costa Rica es intolerante al
            gluten?
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

      <div className=" bg-white h-[480px] w-80 rounded-xl">
        <div className="  ">
          <h2 className=" text-5xl text-center font-bold leading-tight px-2 pt-5 pb-2 text-[#195527]">
            Productos sin Lactosa
          </h2>
          <p className=" text-xl text-center font-semibold leading-tight px-7 p-1 text-[#195527]">
            Actualmente existen más de 10 tipos de leches alternativas a la de
            vaca.
          </p>
          <div className=" ">
            <img
              className="w-[40%] block object-center mx-auto mt-2"
              src={sinazucar2}
              alt="dashboard image"
            />
          </div>
        </div>
      </div>

      <div className=" bg-white h-[480px] w-80 rounded-xl">
        <div className="  ">
          <h2 className=" text-5xl text-center font-bold leading-tight px-2 pt-5 pb-2 text-[#195527]">
            Productos sin Azúcar
          </h2>
          <p className=" text-xl text-center font-semibold leading-tight px-7 p-1 text-[#195527]">
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
  );
};
export default Productos;
