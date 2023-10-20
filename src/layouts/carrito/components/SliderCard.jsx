import React, { useState } from "react";

const data = [
  {
    id: "1",
    image:
      "https://images.pexels.com/photos/8478063/pexels-photo-8478063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Leche",
    description: "Leche dos pinos",
    hecho: "25-04-2023",
    vence: "27-11-2023",
    category: "Lácteo",
  },

  {
    id: "2",
    image:
      "https://images.pexels.com/photos/3936881/pexels-photo-3936881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Pasta",
    description: "Pasta Roma",
    hecho: "25-04-2023",
    vence: "27-11-2023",
    category: "Carbohidratos",
  },
  {
    id: "3",
    image:
      "https://images.pexels.com/photos/6316671/pexels-photo-6316671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Frijoles",
    description: "Frijoles Don Pedro",
    hecho: "25-04-2023",
    vence: "27-11-2023",
    category: "Grano",
  },
  {
    id: "4",
    image:
      "https://www.tasteofhome.com/wp-content/uploads/2019/11/sugar-shutterstock_615908132.jpg?fit=700%2C800",
    title: "Azúcar",
    description: "Azúcar Maria",
    hecho: "25-04-2023",
    vence: "27-11-2023",
    category: "Azúcar",
  },
  {
    id: "5",
    image:
      "https://www.recetasnestlecam.com/sites/default/files/2023-03/diferentes-tipos-de-aceite-para-cocinar.jpg",
    title: "Aceite",
    description: " Aceite mazola",
    hecho: "25-04-2023",
    vence: "27-11-2023",
    category: "Grasas",
  },
  {
    id: "6",
    image:
      "https://static.guiainfantil.com/media/16341/c/recetas-faciles-con-atun-de-lata-md.jpg",
    title: "Atún",
    description: "Atun calvo",
    hecho: "25-04-2023",
    vence: "27-11-2023",
    category: "Proteina",
  },
  {
    id: "7",
    image:
      "https://nutrisnacks.net/wp-content/uploads/2018/08/RosquillaCheddarFrente30g.jpg",
    title: "Snack",
    description: "Nutri snacks",
    hecho: "25-04-2023",
    vence: "27-11-2023",
    category: "Sin gluten",
  },
  {
    id: "8",
    image:
      "https://chedrauimx.vtexassets.com/arquivos/ids/18992900/7501040091896_00.jpg?v=638302174594470000",
    title: "Yogurt",
    description: "Yogurt Yoplait",
    hecho: "25-04-2023",
    vence: "27-11-2023",
    category: "Deslactosados",
  },
  {
    id: "9",
    image:
      "https://walmartcr.vtexassets.com/arquivos/ids/246570/Arroz-Tio-Pelon-Entero-99-4000gr-1-30097.jpg?v=637707946096430000",
    title: "Arroz",
    description: "Arroz Tio Pelón",
    hecho: "25-04-2023",
    vence: "27-11-2023",
    category: "Grano",
  },
];

const SliderCard = () => {
  const [item, setItem] = useState(data);
  const [, setSelected] = useState("todos");

  const menuItems = [...new Set(data.map((Val) => Val.category))];

  const filterItem = (product) => {
    const newItem = data.filter((newVal) => {
      return newVal.category === product;
    });
    setItem(newItem);
    setSelected(product);
  };

  return (
    <section className="py-16 overflow-hidden bg-white sm:pt-24 lg:pt-28 top-20">
      {/* Container */}

      <div className="max-w-screen-xl px-5 mx-auto sm:px-6 lg:px-8 top-20">
        <button
          className="inline-flex justify-center m-2 items-center py-2 px-5 text-base font-medium text-center text-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100   bg-[#195527]"
          onClick={() => {
            setItem(data);
            setSelected("todos");
          }}
        >
          Todos
        </button>
        {menuItems.map((Val, id) => {
          return (
            <button
              className="inline-flex justify-center m-2 items-center py-2 px-5 text-base font-medium text-center text-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100   bg-[#195527]"
              key={id}
              onClick={() => filterItem(Val)}
            >
              {Val}
            </button>
          );
        })}

        <div className="relative flex flex-row flex-nowrap overflow-x-auto max-w-full mx-auto mt-14 sm:mt-16  ">
          {item.map((data, index) => (
            <div
              key={index}
              className="max-w-xs h-fit w-full bg-white border border-gray-200 rounded-lg shadow  mx-2 flex-shrink-0"
            >
              <div className="relative rounded-t-lg overflow-hidden h-60 m-4 ">
                <img
                  className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  src={data.image}
                  alt=""
                />
              </div>
              <div className="p-5">
                <a href="#">
                  <h5 className=" mb-2 text-2xl font-semibold font-serif tracking-tight text-gray-900 ">
                    {data.title}
                  </h5>
                </a>
                <p className="mb-3 text-sm text-gray-700 ">
                  {data.description}
                </p>
                <p className="mb-3 text-sm text-gray-700 ">{data.vence}</p>
              </div>

              <a
                href="#"
                className="flex m-2  justify-center items-center py-2 px-8 text-base font-medium text-center text-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100   bg-[#195527]"
              >
                Agregar a la canasta
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SliderCard;
