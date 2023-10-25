import singluten from "../../../assets/singluten.webp";
import sinazucar from "../../../assets/sinazucar.png";
import sinazucar2 from "../../../assets/sinazucar2.avif";
import arroz from "../../../assets/arroz.png"


const Productos2 = () => {

return(
    //[#195527db]
    <section className=" w-[90%] flex flex-wrap content-center m-auto mt-4 text-[#195527] md:justify-between bg-white p-8 md:p-28 md:m-20 rounded-xl md:h-[40rem] ">
   
    <div className=" bg-[#195527] h-[480px] w-80 rounded-xl md:mb-7 sm: mb-7">
      <div className="  ">
      <h2 className=" text-5xl text-center font-bold leading-tight px-2 pt-5 pb-2 text-white">
        Productos sin Gluten
        </h2>
        <p className=" text-xl text-center font-semibold leading-tight p-1 text-white">
          ¿Sabías que un 1,5% de la población de Costa Rica es intolerante al gluten?

        </p>
        <div  className=" " >
        <img className="w-[50%] block object-center mx-auto mt-2" src={arroz} alt="dashboard image" />
        </div>
       

      </div>
    </div>
    
    <div className=" bg-[#195527] h-[480px] w-80 rounded-xl md:mb-7 sm: mb-7">
      <div className="  ">
      <h2 className=" text-5xl text-center font-bold leading-tight px-2 pt-5 pb-2 text-white">
        Productos sin Lactosa
        </h2>
        <p className=" text-xl text-center font-semibold leading-tight px-7 p-1 text-white">
          Actualmente existen más de 10 tipos de leches alternativas a la de vaca. 

        </p>
        <div  className=" " >
        <img className="w-[30%] block object-center mx-auto mt-2 md:w-[40%] sm:w-[20%]" src={sinazucar2} alt="dashboard image" />
        </div>
       

      </div>
    </div>

    <div className=" bg-[#195527] h-[480px] w-80 rounded-xl md:mb-7 sm: mb-7">
      <div className="  ">
      <h2 className=" text-5xl text-center font-bold leading-tight px-2 pt-5 pb-2 text-white">
        Productos sin Azúcar 
        </h2>
        <p className=" text-xl text-center font-semibold leading-tight px-7 p-1 text-white">
          ¿Sabías que el exceso de azúcar causa  más de 15 enfermedades distintas?

        </p>
        <div  className=" " >
        <img className="w-[70%] block object-center mx-auto mt-2" src={sinazucar} alt="dashboard image" />
        </div>
       

      </div>
    </div>
  



  </section>



)

}
export default Productos2;