import HeaderA from "../../components/HeaderA/HeaderA";
import React from "react";
import "./Amigos.css";
import BackgroundC from "../../components/BackgroundC/BackgroundC";
import Nav_Bar from "../../components/Nav_bar";

const Amigos = () => {
  // LE DICE A LA FLECHITA A QUE VENTANA TIENE QUE IR
  // const irAHome = "/home";
  //_________________________________________________
  return (
    <>
      <BackgroundC>
        {/* <HeaderA tituloPrincipal="Configuración" redirectUrl={irAHome} /> */}
        <div className="amigos-box-titulo fade-in-right">
          <h3>
            Compartí tu <span className="letraslocas fade-in-left">perfil</span> y tu <span className="letraslocas fade-in-right">musica</span> con
            quien desees
          </h3>
        </div>
        <div className="qr-box fade-in-left">
          <img src="src/public/qr-code.png" />
        </div>
        <img className="qr-barraseparadora" src="src/public/divider.svg" alt="" />
        <Nav_Bar />
      </BackgroundC>
    </>
  );
};

export default Amigos;
