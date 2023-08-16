import React from "react";
import donacion from "../../../../../../img/donacion.jpg"

const Foto = () => {
    return (
      
        <div className="flex min-h-full flex-col  px-1 py-2 mr-800  lg:px-8 mt-20"  > 

        <div className="invisible sm:mx-right sm:w-full sm:max-w-sm flex md:visible ">
            <img src={donacion} alt="Donacion" className="mx-auto h-200 w-400 w-auto"  />
            {/*<div style={{ backgroundImage: `url(${donacion})` }}>*/}
            
        </div>
            
          </div>
      
    );
  };
  
  export default Foto;
  