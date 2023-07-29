import React from "react";
import "../PlaylistGenerada/PlaylistGenerada.css";
import HeaderA from "../../components/HeaderA/HeaderA";
import BackgroundB from "../../components/BackgroundB/BackgroundB";
import ControlesDeReproduccion from "../../components/ControlesDeReproduccion/ControlesDeReproduccion";
import SongRow from "../../components/SongRow/SongRow";
import Nav_Bar from "../../components/Nav_bar";
import { Routes, Route, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import logo_small from "../../../public/logo-small.svg";
import verified from "../../../public/verified.svg";
import share from "../../../public/share.svg";
import time from "../../../public/time.svg";
import { Link } from "react-router-dom";

export const Playlist = () => {
  const [playlistSongs, setPlaylistSongs] = useState([]);
  const [playlistData, setPlaylistData] = useState({});

  const { playlist_Id } = useParams();

  useEffect(() => {
    Promise.all([
      fetch(`http://localhost:3002/playlist/${playlist_Id}`).then((response) => response.json()),
      fetch(`http://localhost:3002/playlist/songs/${playlist_Id}`).then((response) => response.json()),
    ])
      .then(([playlistDataResponse, playlistSongsResponse]) => {
        setPlaylistData(playlistDataResponse[0]);
        setPlaylistSongs(playlistSongsResponse);
      })
      .catch((error) => console.error("Error en las solicitudes:", error));
  }, [playlist_Id]);

  return (
    <>
      <BackgroundB>
        <div className="playlist_main_cont">
          <HeaderA tituloPrincipal={playlistData.playlist_name} redirectUrl={"/user-profile"} />

          <div className="dinamic-block-container"></div>

          <div className="cover-container">
            {playlistSongs.slice(0, 4).map((song, index) => (
              <div key={index} className={`cover-${index + 1}`}>
                <img src={song.song_image_url} alt={`Portada ${index + 1}`} />
              </div>
            ))}
          </div>

          <div className="shared-time-container">
            <div className="mini-icons-container">
              <img src={logo_small} alt="" />
            </div>
            <div className="mini-icons-container">
              <img src={verified} alt="" />
            </div>
            <div className="mini-icons-container">
              <img src={share} alt="" />
            </div>

            <div className="playlist-time">1h 17m</div>

            <div className="playlist-time-ico">
              <img src={time} alt="" />
            </div>
          </div>
          <ControlesDeReproduccion />

          <div className="playlist-songs-container">
            {playlistSongs.map((song, index) => (
              <Link key={song.song_id} to={`/song/${song.song_id}`}>
                <SongRow name={song.song_name} artist={song.artist_name} url={song.song_image_url} />
              </Link>
            ))}
          </div>
          <Nav_Bar />
        </div>
      </BackgroundB>
    </>
  );
};
