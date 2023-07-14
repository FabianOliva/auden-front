import React from "react";
import "./index.css";

export const Login = () => {
  return (
    <div className="login_container">
      <nav className="navbar_container">
        <img src="src\public\left-icon-placeholder.png" alt="<-" />
        <p>Iniciar Sesión</p>
        <div className="relleno"></div>
      </nav>
      <form action="">
        <div className="form_container_login">
          <div className="labels_input">
            <label htmlFor="">
              <p>Nombre de Usuario o E-mail:</p>
              <input type="text" />
            </label>
          </div>
          <div className="labels_input password">
            <label htmlFor="">
              <p>Contraseña:</p>
              <input type="text" />
            </label>
          </div>
          <div className="footer">
            <a className="Default_btn active" href="">
              Iniciar Sesión
            </a>
            <p>¿Olvidaste tu contraseña?</p>
          </div>
        </div>
      </form>
    </div>
  );
};
