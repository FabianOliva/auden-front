import React from "react";
import "./CardPortadaMultiple.css";
import imgdefault from "../../../public/default.png";

const CardPortadaMultiple = ({ images, name, user }) => {
  const defaultImageUrl = imgdefault;

  while (images.length < 4) {
    images.push(defaultImageUrl);
  }

  if (images.every((image) => !image)) {
    images.fill(defaultImageUrl);
  }

  return (
    <>
      <div className="portada-playlist-multiple-container">
        <div id="portadaPlaylistmultiple" className="portada-playlist-multiple-cover">
          {images.slice(0, 4).map((image, index) => (
            <div key={index} className={`portadaMultipleCover${index + 1}`}>
              {image ? <img src={image} alt="" /> : <img src={defaultImageUrl} alt="" />}
            </div>
          ))}
        </div>
        <h4 id="nombrePlaylist">{name}</h4>
        <h5 id="usuariosPlaylist">{user}</h5>
      </div>
    </>
  );
};

export default CardPortadaMultiple;
