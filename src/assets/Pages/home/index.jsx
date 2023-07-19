import React, { useState, useEffect } from "react";
import Nav_Bar from "../../components/Nav_bar";
import "./index.css";
import bell from "../../../public/bell.png";
import history from "../../../public/history.png";

const Home = () => {
  const [animationStep, setAnimationStep] = useState(1);
  const [animationStep2, setAnimationStep2] = useState(1);

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

  return (
    <div className="home-main-cont page-container">
      <header className="home-header">
        <h1 className="home-header-title">Música ya</h1>
        <div className="home-header-icons">
          <img src={history} alt="" className="home-header-icon" />
          <img src={bell} alt="" className="home-header-icon" />
        </div>
      </header>
      <main className="home-main">
        <a className="main-card">
          <div className={`main-card-img step-${animationStep}`}></div>
          <div className="main-card-text">
            <p className="main-card-text-title">Cupido Musical</p>
            <p className="main-card-text-text">Tus artistas favoritos nunca van a dejarte con el corazón roto.</p>
          </div>
        </a>
        <a className="main-card">
          <div className={`main-card-img2 step2-${animationStep2}`}></div>
          <div className="main-card-text">
            <p className="main-card-text-title">Música Contextual</p>
            <p className="main-card-text-text"> Creamos la playlist perfecta para cualquier situación.</p>
          </div>
        </a>
      </main>
      <Nav_Bar />
    </div>
  );
};

export default Home;
