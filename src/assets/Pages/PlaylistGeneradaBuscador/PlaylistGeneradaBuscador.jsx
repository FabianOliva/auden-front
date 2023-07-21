import React from "react";
import "./PlaylistGeneradaBuscador.css";
import HeaderB from "../../components/HeaderB/HeaderB";
import BackgroundA from "../../components/BackgroundA/BackgroundA";
import BackgroundB from "../../components/BackgroundB/BackgroundB";
import ControlesDeReproduccion from "../../components/ControlesDeReproduccion/ControlesDeReproduccion";
import AppFooterControls from "../../components/AppFooterControls/AppFooterControls";
import SearchConFiltros from "../../components/SearchConFiltros/SearchConFiltros";
import SongRow from "../../components/SongRow/SongRow";
import Nav_Bar from "../../components/Nav_bar";

export const PlaylistGeneradaBuscador = () => {
  return (
    <>
      <BackgroundB>
        <HeaderB
          subtitulo="Generada del Cupido Musical"
          tituloPrincipal="Playlist Generada"
        />

        <SearchConFiltros />

        <ControlesDeReproduccion />

        <div className="playlist-songs-container-PGB">
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
