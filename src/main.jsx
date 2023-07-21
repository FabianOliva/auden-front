import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";


import { CupidoMusical } from "./assets/Pages/CupidoMusical/CupidoMusical";
import { MusicaContextual } from "./assets/Pages/MusicaContextual/MusicaContextual";
import { PlaylistGeneradaBuscador } from "./assets/Pages/PlaylistGeneradaBuscador/PlaylistGeneradaBuscador";
import { UserProfile } from "./assets/Pages/UserProfile/UserProfile";
import Configuracion from "./assets/Pages/Configuracion/Configuracion";
import { PlaylistGenerada } from "./assets/Pages/PlaylistGenerada/PlaylistGenerada";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cupido-musical" element={<CupidoMusical/>} />
        <Route path="/musica-contextual" element={<MusicaContextual />} />
        <Route path="/playlist-generada" element={<PlaylistGenerada />} />
        <Route path="/playlist-generada-buscador" element={<PlaylistGeneradaBuscador />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/configuracion" element={<Configuracion />} />
        

 
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
