import React from "react";
// import donacion from "../../../../../../img/donacion.jpg";

const Foto = () => {
  return (
    <div className="relative hidden md:flex px-52 py-64  rounded-md  bg-slate-500 ml-9">
      <img
        src="https://images.pexels.com/photos/6995235/pexels-photo-6995235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Donacion"
        className="absolute inset-0  rounded-md object-cover w-full h-full hidden md:block"
      />
    </div>
  );
};

export default Foto;
