import React from "react";
// import donacion from "../../../../../../img/donacion.jpg";

const Foto = () => {
  return (
    <div className="relative flex px-52 py-64  rounded-md  bg-slate-500 ml-9">
      <img
        src="https://images.pexels.com/photos/12420469/pexels-photo-12420469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="Donacion"
        className="absolute inset-0  rounded-md object-cover w-full h-full hidden md:block"
      />
    </div>
  );
};

export default Foto;
