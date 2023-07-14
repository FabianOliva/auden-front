import React, { useState, useEffect } from "react";
import Nav_Bar from "../../components/Nav_bar";
import "./index.css";
import bell from "../../../public/bell.png";
import history from "../../../public/history.png";
import angel from "../../../public/cherub.svg";
import headphones from "../../../public/headphones.svg";

const Home = () => {
  const [animationStep, setAnimationStep] = useState(1);

  const handleAnimationEnd = () => {
    if (animationStep < 6) {
      setAnimationStep(animationStep + 1);
    } else {
      setAnimationStep(1);
    }
  };

  return (
    <div className="home-main-cont">
      <header className="home-header">
        <h1 className="home-header-title">Música ya</h1>
        <div className="home-header-icons">
          <img src={history} alt="" className="home-header-icon" />
          <img src={bell} alt="" className="home-header-icon" />
        </div>
      </header>
      <main className="home-main">
        <a className="main-card">
          <div className="main-card-img">
            <img
              src={angel}
              alt=""
              className={`angel step-${animationStep}`}
              onAnimationEnd={handleAnimationEnd}
            />
            <img
              src={headphones}
              alt=""
              className={`headphones step-${animationStep}`}
              onAnimationEnd={handleAnimationEnd}
            />
          </div>
          <div className="main-card-text">
            <p className="main-card-text-title">Cupido Musical</p>
            <p className="main-card-text-text">
              Tus artistas favoritos nunca van a dejarte con el corazón roto.
            </p>
          </div>
        </a>
        <a className="main-card">
          <div className="main-card-img">
            <img src="" alt="" />
          </div>
          <div className="main-card-text">
            <p className="main-card-text-title">Música Contextual</p>
            <p className="main-card-text-text">
              {" "}
              Creamos la playlist perfecta para cualquier situación.
            </p>
          </div>
        </a>
      </main>
      <Nav_Bar
        homeOpacity="100%"
        searchOpacity="50%"
        accountOpacity="50%"
        friendsOpacity="50%"
      />
    </div>
  );
};

export default Home;
