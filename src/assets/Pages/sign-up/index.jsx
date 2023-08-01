import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <div className="login_container">
      <nav className="navbar_container">
        <Link to="/">
          <img src="src\public\left-icon-placeholder.png" alt="<-" />
        </Link>
        <p>Crear Cuenta</p>
        <div className="relleno"></div>
      </nav>
      <form action="">
        <p className="p_title">¿Cuál es tu correo electrónico ?</p>
        <div className="form_container_login">
          <div className="labels_input register">
            <label htmlFor="">
              <p>Correo electrónico:</p>
              <input type="text" />
              <div className="footer register">
                <p>Deberas poder confirmarlo luego</p>
              </div>
            </label>
          </div>
          <a className="Default_btn active register" href="http://localhost:5173/registeruser">
            Continuar
          </a>
        </div>
      </form>
    </div>
  );
};
