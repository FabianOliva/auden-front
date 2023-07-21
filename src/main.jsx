import React from "react";

import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./assets/Pages/log-in/index.jsx";

import "./index.css";
import Home from "./assets/Pages/home/index.jsx";
import { Register } from "./assets/Pages/sign-up/index.jsx";
import { Registeruser } from "./assets/Pages/sign-up/register-next.jsx";
import { Recuperarcuenta } from "./assets/Pages/rec-cuenta/index.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <Home />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/register",
    element: <Register />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/Registeruser",
    element: <Registeruser />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/recuperarcuenta",
    element: <Recuperarcuenta />,
    // errorElement: <ErrorPage />,
  },
]);


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
