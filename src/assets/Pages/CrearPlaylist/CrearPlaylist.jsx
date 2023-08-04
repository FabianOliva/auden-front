import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CrearPlaylist.css";
import BackgroundB from "../../components/BackgroundB/BackgroundB";
import HeaderA from "../../components/HeaderA/HeaderA";
import BotonesDaniNaranja from "../../components/BotonesDani/BotonesDaniNaranja";
import BotonesDaniGris from "../../components/BotonesDani/BotonesDaniGris";

const CrearPlaylist = () => {
  const [playlistName, setPlaylistName] = useState("");

  localStorage.setItem("playlistName", playlistName);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setPlaylistName(inputValue);
  };

  return (
    <>
      <BackgroundB>
        <HeaderA tituloPrincipal="Crear Playlist" redirectUrl="/home" />
        <div className="crear-playlist-container">
          <span className="cpc-tituloA fade-in-right">
            <h3>Como se llamará tu playlist?</h3>
          </span>
          <span className="cpc-subtituloB fade-in-left">
            <h5>Nombre de la playlist:</h5>
          </span>
          <div className="cpc-input-playlist fade-in-right">
            <input id="userCreatePlaylist" type="text" onChange={handleInputChange} />
          </div>
        </div>
        <div className="cpc-crearplaylist-footer fade-in-left">
          <Link to="/gestionar-playlist">
            <BotonesDaniGris opcion="Continuar" />
          </Link>
        </div>
      </BackgroundB>
    </>
  );
};

export default CrearPlaylist;
