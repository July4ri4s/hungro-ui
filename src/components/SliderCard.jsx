import React from "react";

const data = [
  {
    image:
      "https://images.pexels.com/photos/2286776/pexels-photo-2286776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Papa",
    description: "La meta es llegar a 1000 papas",
    amount: "150",
    goal: "1000",
  },
  {
    image:
      "https://images.pexels.com/photos/4110256/pexels-photo-4110256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Arroz",
    description: "La meta es llegar a 1000 bolsas de arroz",
    amount: "200",
    goal: "1000",
  },
  {
    image:
      "https://images.pexels.com/photos/6316671/pexels-photo-6316671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Frijoles",
    description: "La meta es llegar a 850 bolsas de frijoles",
    amount: "20",
    goal: "850",
  },
  {
    image:
      "https://static.guiainfantil.com/media/16341/c/recetas-faciles-con-atun-de-lata-md.jpg",
    title: "Atún",
    description: "La meta es llegar a 500 latas de atún",
    amount: "2",
    goal: "500",
  },
];

const SliderCard = () => {
  return (
    <section className="py-16  bg-white sm:pt-24 lg:pt-28">
      {/* Container */}
      <div className="max-w-screen-xl px-5 mx-auto sm:px-6 lg:px-8">
        <h2 className="max-w-2xl mx-auto text-4xl font-semibold leading-tight text-center font-display text-slate-900 sm:text-5xl sm:leading-tight">
          {/* Highlighted word in section headline */}
          <span className="relative whitespace-nowrap">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="249"
              height="22"
              viewBox="0 0 249 22"
              fill="currentColor"
              className="absolute top-2/3 left-0 h-[0.6em] w-full fill-[#4060364f]"
            >
              <path d="M247.564 18.5808C241.772 13.3568 232.473 12.7526 225.225 11.4427C217.124 9.97398 208.996 8.57034 200.846 7.46096C186.542 5.51305 172.169 4.08857 157.79 3.01565C126.033 0.645858 94.0929 0.0338786 62.3387 2.36982C42.1785 3.85419 22.008 5.90888 2.32917 10.8464C-0.0155171 11.4349 0.207047 14.6719 2.6889 14.7084C22.0261 14.9896 41.3866 12.6406 60.7109 11.8568C79.9471 11.0808 99.2274 10.6719 118.484 10.9558C142.604 11.3125 166.719 12.8334 190.722 15.5156C199.956 16.5469 209.195 17.6016 218.411 18.8255C227.864 20.0808 237.259 22 246.767 20.7422C247.709 20.6198 248.426 19.3568 247.564 18.5808Z" />
            </svg>
            <span className="relative ">Alimentos </span>
          </span>
          <br />
          más necesitados
        </h2>

        <div className="relative flex flex-row flex-nowrap overflow-x-auto max-w-full mx-auto mt-14 sm:mt-16  ">
          {data.map((data, index) => (
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
                  <h5 className="mb-2 text-2xl font-bold font-serif tracking-tight text-gray-900 ">
                    {data.title}
                  </h5>
                </a>
                <p className="mb-3 text-sm text-gray-700 ">
                  {data.description}
                </p>
                <p className="mb-3 text-sm text-gray-700 ">{data.amount}</p>
              </div>

              <a
                href="#"
                className="flex m-2  justify-center items-center py-2 px-8 text-base font-medium text-center text-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:hover:bg-[#587E4C] bg-[#406036]"
              >
                Donar
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SliderCard;
