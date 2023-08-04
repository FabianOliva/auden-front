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
import Amigos from "./assets/Pages/Amigos/Amigos.jsx";
import { Playlist } from "./assets/Pages/playlist/index.jsx";
import ErrorPage from "./assets/Pages/error/index.jsx";
import CrearPlaylist from "./assets/Pages/CrearPlaylist/CrearPlaylist.jsx";
import GestionarPlaylist from "./assets/Pages/GestionarPlaylist/GestionarPlaylist.jsx";
import AñadirCancionesAPlaylist from "./assets/Pages/AñadirCancionesAPlaylist/AñadirCancionesAPlaylist.jsx";

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
        <Route path="/crear-playlist" element={<CrearPlaylist />} />
        <Route path="/playlist-generada" element={<PlaylistGenerada />} />
        <Route path="/playlist-generada-buscador" element={<PlaylistGeneradaBuscador />} />
        <Route path="/playlist/:playlist_Id" element={<Playlist />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/configuracion" element={<Configuracion />} />
        <Route path="/amigos" element={<Amigos />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/crear-playlist" element={<CrearPlaylist />} />
        <Route path="/gestionar-playlist" element={<GestionarPlaylist />} />
        <Route path="/añadir-canciones" element={<AñadirCancionesAPlaylist />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
