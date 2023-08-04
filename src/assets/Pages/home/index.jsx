import React, { useState, useEffect } from "react";
import Nav_Bar from "../../components/Nav_bar";
import "./index.css";
import bell from "../../../public/bell.png";
import history from "../../../public/history.png";
import angel from "../../../public/cherub.svg";
import headphones from "../../../public/headphones.svg";
import { NavLink } from "react-router-dom";
const Home = () => {
  const [animationStep, setAnimationStep] = useState(1);
  const [animationStep2, setAnimationStep2] = useState(1);
  const [hover, setHover] = useState(false);
  const [hover2, setHover2] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (animationStep < 6) {
        setAnimationStep(animationStep + 1);
      } else {
        setAnimationStep(1);
      }
    }, 700);

    return () => clearInterval(interval);
  }, [animationStep]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (animationStep2 < 6) {
        setAnimationStep2(animationStep2 + 1);
      } else {
        setAnimationStep2(1);
      }
    }, 700);

    return () => clearInterval(interval);
  }, [animationStep2]);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  const handleMouseEnter2 = () => {
    setHover2(true);
  };

  const handleMouseLeave2 = () => {
    setHover2(false);
  };

  return (
    <div className="home-main-cont page-container">
      <header className="home-header">
        <h1 className="home-header-title">Música ya</h1>
        <div className="home-header-icons">
          <img
            src={history}
            alt=""
            className={hover ? "home-header-icon rotate-center" : "home-header-icon"}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
          <img
            src={bell}
            alt=""
            className={hover2 ? "home-header-icon wobble-hor-top" : "home-header-icon"}
            onMouseEnter={handleMouseEnter2}
            onMouseLeave={handleMouseLeave2}
          />
        </div>
      </header>
      <main className="home-main">
        <div className="main-card fade-in-right">
          <div className={`main-card-img step-${animationStep}`}></div>
          <NavLink className="link_card" to="/cupido-musical">
            <div className="main-card-text">
              <p className="main-card-text-title">Cupido Musical</p>
              <p className="main-card-text-text">Tus artistas favoritos nunca van a dejarte con el corazón roto.</p>
            </div>
          </NavLink>
        </div>

        <div className="main-card fade-in-left">
          <div className={`main-card-img2 step2-${animationStep2}`}></div>{" "}
          <NavLink to="/musica-contextual">
            <div className="main-card-text">
              <p className="main-card-text-title">Música Contextual</p>
              <p className="main-card-text-text"> Creamos la playlist perfecta para cualquier situación.</p>
            </div>{" "}
          </NavLink>
        </div>
      </main>

      <Nav_Bar homeOpacity="100%" searchOpacity="50%" accountOpacity="50%" friendsOpacity="50%" />
    </div>
  );
};

export default Home;
