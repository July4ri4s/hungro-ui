import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

const Formulario = () => {
  const form = useRef();
  const [message, setMessage] = useState(null);

  const showMessage = () => {
    return (
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: "9999",
          backgroundColor: "#ffffff",
          padding: "20px",
          textAlign: "center",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          maxWidth: "90%",
          width: "400px",
        }}
      >
        <div className="container">
          <div className="content" id="popup">
            <p style={{ marginBottom: "1rem" }}>{message}</p>
          </div>
        </div>
      </div>
    );
  };

  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5lqmhxb",
        "template_xhwovc9",
        form.current,
        "ynFFgAoNX3fRc6cBI"
      )
      .then(
        (result) => {
          setMessage("Se ha enviado el correo satisfactoriamente");
          setTimeout(() => {
            navigate("/");
          }, 2000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="container my-24 mx-auto md:px-6">
      {message && showMessage()}
      <section className="mb-32 text-center">
        <div className="py-12 md:px-12">
          <div className="container mx-auto xl:px-32">
            <div className="grid items-center lg:grid-cols-2">
              <div className=" mb-10 md:mt-12 lg:mt-0 lg:mb-0">
                <div className="relative z-[1] block rounded-lg bg-white px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] md:px-12 lg:-mr-14">
                  <h2 className="mb-12 text-3xl font-bold text-[#195527db]">
                    Contáctanos
                  </h2>
                  <form ref={form} onSubmit={sendEmail}>
                    <div
                      className="relative mb-6 text-start"
                      data-te-input-wrapper-init
                    >
                      <label
                        className="pointer-events-none pt-[0.37rem] mb-2 leading-[1.6] text-[#195527db] transition-all duration-200 ease-out   "
                        htmlFor="exampleInput90"
                      >
                        Nombre
                      </label>
                      <input
                        name="to_name"
                        type="text"
                        className=" block min-h-[auto] w-full rounded border-2 border-[#195527db]  py-[0.32rem] px-3 "
                        id="exampleInput90"
                        placeholder=""
                      />
                    </div>
                    <div
                      className="relative mb-6 text-start"
                      data-te-input-wrapper-init
                    >
                      <label
                        className="pointer-events-none pt-[0.37rem] mb-2 leading-[1.6] text-[#195527db] transition-all duration-200 ease-out   "
                        htmlFor="exampleInput91"
                      >
                        Correo Electrónico
                      </label>
                      <input
                        name="from_name"
                        type="email"
                        className=" block min-h-[auto]  w-full rounded border-2 py-[0.32rem] px-3 border-[#195527db] "
                        id="exampleInput91"
                        placeholder=""
                      />
                    </div>
                    <div className="relative mb-6 text-start">
                      <label
                        htmlFor="exampleFormControlTextarea1"
                        className="pointer-events-none pt-[0.37rem] mb-2 leading-[1.6] text-[#195527db] transition-all duration-200 ease-out   "
                      >
                        Mensaje
                      </label>
                      <textarea
                        name="message"
                        className="peer block min-h-[auto] w-full rounded border-2  py-[0.32rem] px-3 l border-[#195527db] "
                        id="exampleFormControlTextarea1"
                        rows="3"
                        placeholder=""
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      value="Send"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                      className="inline-block w-full rounded bg-[#195527db] hover:bg-[#1b7a2e] px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white lg:mb-0"
                    >
                      Enviar
                    </button>
                  </form>
                </div>
              </div>
              <div className="md:mb-12 lg:mb-0">
                <div className="relative h-[700px] rounded-lg shadow-l">
                  <img
                    src="https://images.pexels.com/photos/6177610/pexels-photo-6177610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                    className=" h-"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Formulario;
