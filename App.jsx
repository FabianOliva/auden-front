import "./App.css";
import React from "react";
import "./index.css";
import logo from "../src/public/logo-large.png";
import { Link } from "react-router-dom";

import { Default_btn_Active, Default_btn_login } from "./assets/components/Default_btn";

import google from "../src/public/google-icon.png";
import apple from "../src/public/apple-icon.png";

function App() {
  return (
    <div className="app-main-cont">
      <div className="app-main-cont-bg-filter">
        <section className="start-logo-sect">
          <div className="start-logo-cont">
            <img src={logo} alt="logo" className="start-logo-img" />
            <h1 className="start-logo-h1">Música a medida</h1>
          </div>
        </section>
        <section className="start-btns-sect">
          <div className="start-btns-cont">
            <Link to="/register">
              <Default_btn_Active text="Registrarse Gratis" />
            </Link>
            <Default_btn_login text="Continuar con Google" img={google} />
            <Default_btn_login text="Continuar con Apple" img={apple} />
          </div>
          <div className="start-login">
            <Link to="/login">
              <a className="start-login-text">Iniciar Sesion</a>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
