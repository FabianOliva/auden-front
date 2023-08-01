import React from "react";
import "./SongRowAñadir.css";


const SongRowAñadir = ({ name, artist, url }) => {
  return (
    <>
      <div className="songs-row">
        <div className="song-cover">
          <img src={url} alt="" />
        </div>
        <div className="song-info-container">
          <div className="song-name">{name}</div>
          <div className="song-artist">{artist}</div>
        </div>
        <div className="song-options">
           <img id="agregarCancion" src="src\public\agregar.svg" alt="" />
        </div>
      </div>
    </>
  );
};

export default SongRowAñadir;
