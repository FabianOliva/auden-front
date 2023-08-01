import React from "react";
import "./SongRow.css";
import right_icon_placeholder from "../../../public/right-icon-placeholder.svg";

const SongRow = ({ name, artist, url }) => {
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
          <img src={right_icon_placeholder} alt="" />
        </div>
      </div>
    </>
  );
};

export default SongRow;
