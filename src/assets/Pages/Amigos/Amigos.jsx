import HeaderA from "../../components/HeaderA/HeaderA";
import React from "react";
import "./Amigos.css";
import BackgroundC from "../../components/BackgroundC/BackgroundC";
import Nav_Bar from "../../components/Nav_bar";

const Amigos = () => {
  return (
    <>
      <BackgroundC>
        <div className="amigos-box-titulo">
          <h3>
            Compartí tu <span className="letraslocas">perfil</span> y tu <span className="letraslocas">musica</span> con
            quien desees
          </h3>
        </div>
        <div className="qr-box">
          <img src="src/public/qr-code.png" />
        </div>
        <img className="qr-barraseparadora" src="src/public/divider.svg" alt="" />
        <Nav_Bar />
      </BackgroundC>
    </>
  );
};

export default Amigos;
