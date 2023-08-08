import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "./layouts/landing";
import Nosotros from "./layouts/nosotros";
import Donacion from "./layouts/donacion";
import Perfil from "./layouts/Perfil";
import SignIn from "./layouts/Autenticacion/SignIn";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/donacion" element={<Donacion />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/iniciosesion" element={<SignIn />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
