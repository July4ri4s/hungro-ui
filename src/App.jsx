import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "./layouts/landing";
Nosotros;
import Nosotros from "./layouts/nosotros";
import Donacion from "./layouts/donacion";
import Perfil from "./layouts/Perfil";
import SignIn from "./layouts/Autenticacion/SignIn";
import Contacto from "./layouts/Contacto";
import Carrito from "./layouts/carrito";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/donacion" element={<Donacion />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/inicio-sesion" element={<SignIn />} />
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
