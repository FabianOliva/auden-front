import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";

import { CupidoMusical } from "./assets/components/CupidoMusical/CupidoMusical";
import { MusicaContextual } from "./assets/components/MusicaContextual/MusicaContextual";
import { PlaylistGenerada } from "./assets/components/PlaylistGenerada/PlaylistGenerada";
import { PlaylistGeneradaBuscador } from "./assets/components/PlaylistGeneradaBuscador/PlaylistGeneradaBuscador";
// import { InputStyled } from "./assets/components/InputStyled/InputStyled";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cupido-musical" element={<CupidoMusical />} />
        <Route path="/musica-contextual" element={<MusicaContextual />} />
        <Route path="/playlist-generada" element={<PlaylistGenerada />} />
        <Route path="/playlist-generada-buscador" element={<PlaylistGeneradaBuscador />} />
        {/* <Route path="/prueba" element={<InputStyled />} /> */}

 
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
