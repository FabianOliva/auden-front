import React from "react";
import "./UserProfile.css";
import { Link } from "react-router-dom";
import BackgroundC from "../../components/BackgroundC/BackgroundC";

import CardPortadaSimple from "../../components/CardPortadaSimple/CardPortadaSimple";
import CardPortadaMultiple from "../../components/CardPortadaMultiple/CardPortadaMultiple";
import Nav_Bar from "../../components/Nav_bar";

export const UserProfile = () => {
  return (
    <>
      <BackgroundC>
        <div className="picture-name-container fade-in-left">
          <div className="picture-container">
            <div id="profile-photo" className="profile-photo">
              <img src="src/public/user-default.png" alt="" />
            </div>
          </div>

          <div className="name-container">
            <h2>Fulano de Tal</h2>
            <h5>@fulano_detal</h5>
            <Link to="/configuracion" className="gear-style">
              <span>
                <img src="src/public/gear.svg" alt="" />
              </span>
            </Link>
          </div>
        </div>

        <div className="playlist-user-controls">
          <span>
            <h5>Mis Playlist</h5>
          </span>
          <img src="src/public/divider.svg" alt="" />
          <div id="btn-crear-playlist" className="btn-crear-playlist">
            <a href="">Crear Playlist</a>
          </div>
        </div>

        <div className="playlist-box-container">
          <CardPortadaSimple />
          <CardPortadaMultiple />
          <CardPortadaSimple />
          <CardPortadaMultiple />
        </div>

        <Nav_Bar />
      </BackgroundC>
    </>
  );
};
