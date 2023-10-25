import apreton from "../../../assets/apreton-de-manos.png"

const Donacion = () => {

    return(
        //[#195527db]
<div className="flex flex-col w-[90%]  pb-6  m-auto mt-24 text-white items-center md:justify-between bg-[#195527] p-18 md:p-28 md:m-20 rounded-xl md:h-[40rem]">
      <div className="text-center mb-4 text-4xl  tracking-tight mt-6">
        <h2 className="max-w-2xl mx-auto text-4xl font-semibold leading-tight text-center font-display text-white sm:text-5xl sm:leading-tight">
         Donación
        </h2>
      </div>

      <div className="flex flex-col md:flex-row justify-around text-center  w-full mt-10 ">
        <div className="flex flex-col justify-center items-center">
          

          <h2 className="my-4 font-semibold text-4xl">¿Para quien?</h2>
          <p className=" md:w-44 ">
           Para todo el que realmente necesite un bien. 
          </p>
        </div>

        <div className="flex flex-col justify-center items-center">
        <img src={apreton} alt="corazon" className="w-[120px] h-[120px]" />

          <h2 className="my-4 font-semibold text-4xl">¿Qué es una donación?</h2>
          <p className=" md:w-44 ">
          Acto dar un bien a otra persona de forma gratuita.

          </p>
        </div>

        <div className="flex flex-col justify-center items-center ">
          

          <h2 className="my-4 font-semibold text-4xl">¿Por qué?</h2>
          <p className=" md:w-44 ">
            Debido a que no todas las personas tenemos los mismos bienes.
          </p>
        </div>
      </div>
    </div>
     



    
    



    
    
    )
    
    }
    export default Donacion;





   