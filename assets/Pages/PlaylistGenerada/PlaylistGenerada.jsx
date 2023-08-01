import React from "react";
import "./PlaylistGenerada.css";
import HeaderB from "../../components/HeaderB/HeaderB";

import BackgroundB from "../../components/BackgroundB/BackgroundB";
import AppFooterControls from "../../components/AppFooterControls/AppFooterControls";
import ControlesDeReproduccion from "../../components/ControlesDeReproduccion/ControlesDeReproduccion";
import SongRow from "../../components/SongRow/SongRow";
import Nav_Bar from "../../components/Nav_bar";

export const PlaylistGenerada = () => {
  return (
    <>
      <BackgroundB>
        <HeaderB
          subtitulo="Generada del Cupido Musical"
          tituloPrincipal="Playlist Generada"
        />

        <div className="dinamic-block-container"></div>

        <div className="cover-container">
          <div id="img-cover1" className="cover-1">
            <img src="src\public\bad-bunny-cover.png" alt="" />
          </div>
          <div id="img-cover2" className="cover-2">
            <img src="src\public\biza-cover.png" alt="" />
          </div>
          <div id="img-cover3" className="cover-3">
            <img src="src\public\eladio-cover.png" alt="" />
          </div>
          <div id="img-cover4" className="cover-4">
            <img src="src\public\duki-cover.png" alt="" />
          </div>
        </div>

        <div className="shared-time-container">
          <div className="mini-icons-container">
            <img src="src/public/logo-small.svg" alt="" />
          </div>
          <div className="mini-icons-container">
            <img src="src/public/verified.svg" alt="" />
          </div>
          <div className="mini-icons-container">
            <img src="src/public/share.svg" alt="" />
          </div>

          <div className="playlist-time">1h 17m</div>

          <div className="playlist-time-ico">
            <img src="src/public/time.svg" alt="" />
          </div>
        </div>
        <ControlesDeReproduccion />

        <div className="playlist-songs-container">
          <SongRow />
          <SongRow />
          <SongRow />
          <SongRow />
          <SongRow />
          <SongRow />
          <SongRow />
          <SongRow />
          <SongRow />
          <SongRow />
          <SongRow />
          <SongRow />
          <SongRow />
        </div>

        <Nav_Bar />
      </BackgroundB>
    </>
  );
};
