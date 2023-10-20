const Donation = () => {
  return (
    <div className=" m-auto flex flex-col w-[90%] text-[#195527db] items-center md:justify-between bg-white rounded-xl md:h-[40rem]">
      <section className="mb-32 text-center">
        <div className=" md:px-12">
          <div className="flex flex-col m-auto bg-white px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] md:px-16 lg:-mr-14">
            <h2 className="mb-12 text-3xl font-bold text-[#195527db]">
              Dona aquí
            </h2>
            <form>
              <label>
                Elija un alimento:
                <select
                  name="selectedFruit"
                  className=" mt-4 block min-h-[auto] w-full rounded border-2 border-[#195527db]  py-[0.32rem] px-3 "
                >
                  <option value="apple">Leche</option>
                  <option value="banana">Arroz</option>
                  <option value="orange">Atun</option>
                  <option value="apple">Frijoles</option>
                  <option value="banana">Pasta</option>
                  <option value="orange">Arroz sin gluten</option>
                  <option value="apple">Leche deslactosada</option>
                  <option value="banana">Yogurt deslactosado</option>
                  <option value="orange">Lentejas</option>
                  <option value="apple">Garbanzos</option>
                  <option value="banana">Harina de yuca</option>
                </select>
              </label>
              <div
                className=" my-8 relative mb-6 text-start"
                data-te-input-wrapper-init
              >
                <label
                  className="pointer-events-none pt-[0.37rem] mb-2 leading-[1.6] text-[#195527db] transition-all duration-200 ease-out   "
                  htmlFor="exampleInput90"
                >
                  Marca del alimento
                </label>
                <input
                  type="text"
                  className=" block min-h-[auto] w-full rounded border-2 border-[#195527db]  py-[0.32rem] px-3 "
                  id="exampleInput90"
                  placeholder="Tio Pelón"
                />

                <label
                  className="pointer-events-none pt-[0.37rem] mb-2 leading-[1.6] text-[#195527db] transition-all duration-200 ease-out   "
                  htmlFor="exampleInput90"
                >
                  Fecha de vencimiento
                </label>
                <input
                  type="text"
                  className=" mb-4 block min-h-[auto] w-full rounded border-2 border-[#195527db]  py-[0.32rem] px-3 "
                  id="exampleInput90"
                  placeholder="22/01/2024"
                />
                <label>
                  Elija la capaña/lugar donde se entregará:
                  <select
                    name="selectedFruit"
                    className=" mt-4 block min-h-[auto] w-full rounded border-2 border-[#195527db]  py-[0.32rem] px-3 "
                  >
                    <option value="apple">Sede Cristo Rey </option>
                    <option value="banana">Perimercados Alajuela</option>
                    <option value="orange">Ekono Limón</option>
                    <option value="orange">Pequeño Mundo Los Lagos</option>
                    <option value="orange">Supercompro Jacó</option>
                  </select>
                </label>
              </div>

              <button
                type="button"
                data-te-ripple-init
                data-te-ripple-color="light"
                className=" my-8 inline-block w-full rounded bg-[#195527db] px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white  transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] lg:mb-0"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Donation;
