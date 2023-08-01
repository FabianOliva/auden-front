import React from "react";
import "./ControlesDeReproduccion.css";
import icon_left_placeholder from "../../../public/icon-left-placeholder.svg";
import shuffle from "../../../public/shuffle.svg";
import play from "../../../public/play-btn.svg";

const ControlesDeReproduccion = () => {
  return (
    <>
      <div className="controles-reproduccion-container">
        <div className="copy-ico-container">
          <img src={icon_left_placeholder} alt="" />
          <span>Crear Copia</span>
        </div>

        <div className="music-controls">
          <div className="repeat-box">
            <img src={shuffle} alt="" />
          </div>

          <div className="play-box">
            <img src={play} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ControlesDeReproduccion;
