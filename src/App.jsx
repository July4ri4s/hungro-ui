import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Landing from "./layouts/landing";
import Nosotros from "./layouts/nosotros";
import Donacion from "./layouts/donacion";
import SignIn from "./layouts/Autenticacion/SignIn/SignIn";
import Contacto from "./layouts/Contacto";
import Carrito from "./layouts/carrito";
import Dashboard from "./layouts/Dashboard/Dashboard";
import Products from "./layouts/Dashboard/layouts/products/Products";
import Users from "./layouts/Dashboard/layouts/users/Users";
import SignUp from "./layouts/Autenticacion/SignUp/SignUp";
import Donations from "./layouts/Dashboard/layouts/donations/Donations";
import DonorDonations from "./layouts/Dashboard/layouts/donorDonations/DonorDonations";
import { useQuery } from "@apollo/client";
import { GET_ME } from "./graphql/queries";
import Campaigns from "./layouts/Dashboard/layouts/campaigns/Campaigns";
import Baskets from "./layouts/Dashboard/layouts/baskets/Baskets";
import Profile from "./layouts/Dashboard/layouts/profile/profile";

function App() {
  const { data, loading, error } = useQuery(GET_ME);
  const [userType, setUserType] = useState(null);

  useEffect(() => {
    if (data && data.getMe) {
      if (data.getMe.donor) {
        setUserType("Donor");
      } else if (data.getMe.organization) {
        setUserType("Organization");
      }
    }
  }, [data]);

  if (loading) return "Cargando...";

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/donacion" element={<Donacion />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/inicio-sesion" element={<SignIn />} />
        <Route path="/registrarse" element={<SignUp />} />
        <Route path="/carrito" element={<Carrito />} />

        {userType === "Donor" ? (
          <>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/perfil" element={<Profile />} />
            <Route path="/mis-donaciones" element={<DonorDonations />} />
          </>
        ) : (
          <>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
            <Route path="/users" element={<Users />} />
            <Route path="/donations" element={<Donations />} />
            <Route path="/campaigns" element={<Campaigns />} />
            <Route path="/baskets" element={<Baskets />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
