import "./App.css";
import { useState } from "react";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import logo from "../src/public/logo-large.png";
import { Default_btn_Active, Default_btn_login, Default_btn_Inactive } from "./assets/components/Default_btn";
import google from "../src/public/google-icon.png";
import apple from "../src/public/apple-icon.png";

function App() {
  return (
    <>
      <section className="start-logo-sect">
        <div className="start-logo-cont">
          <img src={logo} alt="logo" className="start-logo-img" />
          <h1 className="start-logo-h1">Música a medida</h1>
        </div>
      </section>
      <section className="start-btns-sect">
        <div className="start-btns-cont">
          <Default_btn_Active text="Registrarse Gratis" />
          <Default_btn_login text="Continuar con Google" img={google} />
          <Default_btn_login text="Continuar con Apple" img={apple} />
        </div>
        <div className="start-login">
          <a className="start-login-text" href="">
            Iniciar Sesion
          </a>
        </div>
      </section>
    </>
  );
}

export default App;
