import manos from "../../../assets/manos.jpg"

const Donacion = () => {

    return(
        //[#195527db]
        <section className=" w-[90%] flex flex-wrap content-center m-auto  text-[#195527] md:justify-between bg-[#195527] p-18 md:p-28 md:m-20 rounded-xl md:h-[40rem]">
   <div className="bg-white h-[120%] flex flex-wrap rounded-xl">
   <div className=" bg-white h-[480px] w-[38%] content-center items-center ml-3 my-auto rounded-xl">
          <div className="  m-auto  content-center ">
          
          <div  className="m-auto px-2 py-11 " >
        <img className="w-[100%] block object-center mx-auto mt-2" src={manos} alt="dashboard image" />
        </div>
           
           
    
          </div>



        </div>
        
        <div className=" bg-white h-[480px] w-[60%] content-center items-center ml-auto my-auto rounded-xl">
          <div className="  m-auto  content-center ">
          <h2 className=" text-7xl text-center m-auto font-bold leading-tight px-2 pt-5 pb-2 text-[#195527]">
          ¿Qué es una donación?
            </h2>
            <p className=" text-2xl text-center font-semibold leading-tight py-7 px-[150px] p-1 text-[#195527]">
              
              La donación en vida, es un acto por el que una persona entrega y transmite la propiedad 
              de un bien o dinero, normalmente de forma gratuita y sin nada a cambio, a otra persona, 
              que la acepta.
            </p>
           
           
    
          </div>



        </div>
   </div>
   

        
    
       
      
    
    
    
      </section>
    
    
    
    )
    
    }
    export default Donacion;