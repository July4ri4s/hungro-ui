import React from "react";

const Values = () => {
  return (
    <>
      <div className="w-[30rem] h-[50rem] bg-[#C8E676] rounded-lg m-auto overflow-x-hidden	flex flex-col items-center justify-evenly md:w-[84rem] md:h-[40rem] ">
        <div className="flex flex-col items-center justify-center+">
          <h1 className="text-5xl font-medium text-center">
            Valores que nos destacan
          </h1>
        </div>

        <div className="flex flex-col md:flex-row justify-evenly w-full">
          <div className="flex flex-col items-center">
            <img
              src="https://uxwing.com/wp-content/themes/uxwing/download/toys-childhood/baby-face-icon.png"
              className="w-16 h-16 my-2"
              alt=""
            />
            <h1 className="text-2xl font-medium my-2">Hola</h1>
            <p>Este sería el párrafo</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://uxwing.com/wp-content/themes/uxwing/download/toys-childhood/baby-face-icon.png"
              className="w-16 h-16 my-2"
              alt=""
            />
            <h1 className="text-2xl font-medium my-2">Hola</h1>
            <p>Este sería el párrafo</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://uxwing.com/wp-content/themes/uxwing/download/toys-childhood/baby-face-icon.png"
              className="w-16 h-16 my-2"
              alt=""
            />
            <h1 className="text-2xl font-medium my-2">Hola</h1>
            <p>Este sería el párrafo</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Values;
