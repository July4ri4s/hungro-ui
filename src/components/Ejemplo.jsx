import React from "react";

const Ejemplo = () => {
  return (
    <div className="bg-green-500 p-40 m-10 rounded-lg flex flex-col items-center">
      {/* Este es el título */}
      <div>
        <h1>Este el texto princpal</h1>
      </div>

      {/* Este es el padre de los cuadritos */}
      <div className="flex justify-around">
        {/* Acá van cuadritos */}
        <div>
          <img
            src="https://uxwing.com/wp-content/themes/uxwing/download/toys-childhood/baby-face-icon.png"
            className="w-16 h-16"
            alt=""
          />
          <h1>Hola</h1>
          <p>Este sería el párrafo</p>
        </div>

        <div>
          <img
            src="https://uxwing.com/wp-content/themes/uxwing/download/toys-childhood/baby-face-icon.png"
            className="w-16 h-16"
            alt=""
          />
          <h1>Hola</h1>
          <p>Este sería el párrafo</p>
        </div>
        <div>
          <img
            src="https://uxwing.com/wp-content/themes/uxwing/download/toys-childhood/baby-face-icon.png"
            className="w-16 h-16"
            alt=""
          />
          <h1>Hola</h1>
          <p>Este sería el párrafo</p>
        </div>
      </div>
    </div>
  );
};

export default Ejemplo;
