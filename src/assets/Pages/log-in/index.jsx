
import React, { useState } from "react";
import "./index.css";

export const Login = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="login_container">
      <nav className="navbar_container">
        <a href="http://localhost:5173/">
          {" "}
          <img src="src\public\left-icon-placeholder.png" alt="<-" />
        </a>

        <p>Iniciar Sesión</p>
        <div className="relleno"></div>
      </nav>
      {/* FORM */}
      <form action="">
        <div className="form_container_login">
          {/* --------------INPUT NAME--------------- */}
          <div className="labels_input">
            {/* ADD OK  */}
            <label htmlFor="">
              <p>Nombre de Usuario o E-mail:</p>
              <input type="text" />
            </label>
          </div>
          {/* -------------INPUT PASSWORD------------- */}
          <div className="labels_input password ">
            {/* ADD ERROR or OK  */}
            <label htmlFor="">
              <p>Contraseña:</p>

              <div className="input_img">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={handlePasswordChange}
                />
                <img
                  src={
                    showPassword
                      ? "src/public/ojo.png"
                      : "src/public/ojo-cerrado.png"
                  }
                  alt="Toggle password visibility"
                  onClick={toggleShowPassword}
                />
              </div>

            </label>
          </div>
          {/*----------- BUTTON------------- */}
          <div className="footer">

            <a
              href="http://localhost:5173/home"
              className="Default_btn standar"
            >
              Iniciar Sesión
            </a>
            <a href="http://localhost:5173/recuperarcuenta">
              <p>¿Olvidaste tu contraseña?</p>
            </a>

          </div>
        </div>
      </form>
    </div>
  );
};
