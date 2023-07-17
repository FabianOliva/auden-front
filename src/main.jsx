import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";

import { CupidoMusical } from "./assets/components/CupidoMusical/CupidoMusical";
import { MusicaContextual } from "./assets/components/MusicaContextual/MusicaContextual";
import { PlaylistGenerada } from "./assets/components/PlaylistGenerada/PlaylistGenerada";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cupido-musical" element={<CupidoMusical />} />
        <Route path="/musica-contextual" element={<MusicaContextual />} />
        <Route path="/playlist-generada" element={<PlaylistGenerada />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
