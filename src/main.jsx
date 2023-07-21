import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App.jsx";
import Search from "./assets/Pages/search/index.jsx";
import { Login } from "./assets/Pages/log-in/index.jsx";
import Home from "./assets/Pages/home/index.jsx";
import { Register } from "./assets/Pages/sign-up/index.jsx";
import { Registeruser } from "./assets/Pages/sign-up/register-next.jsx";
import { Recuperarcuenta } from "./assets/Pages/rec-cuenta/index.jsx";
import { CupidoMusical } from "./assets/Pages/CupidoMusical/CupidoMusical";
import { MusicaContextual } from "./assets/Pages/MusicaContextual/MusicaContextual";
import { PlaylistGeneradaBuscador } from "./assets/Pages/PlaylistGeneradaBuscador/PlaylistGeneradaBuscador";
import { UserProfile } from "./assets/Pages/UserProfile/UserProfile";
import { PlaylistGenerada } from "./assets/Pages/PlaylistGenerada/PlaylistGenerada.jsx";
import Configuracion from "./assets/Pages/Configuracion/Configuracion";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Registeruser" element={<Registeruser />} />
        <Route path="/recuperarcuenta" element={<Recuperarcuenta />} />
        <Route path="/cupido-musical" element={<CupidoMusical />} />
        <Route path="/musica-contextual" element={<MusicaContextual />} />
        <Route path="/playlist-generada" element={<PlaylistGenerada />} />
        <Route
          path="/playlist-generada-buscador"
          element={<PlaylistGeneradaBuscador />}
        />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/configuracion" element={<Configuracion />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
