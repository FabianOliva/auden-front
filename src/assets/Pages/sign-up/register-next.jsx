import React from "react";

export const Registeruser = () => {
  return (
    <div className="login_container">
      <nav className="navbar_container">
        <img src="src\public\left-icon-placeholder.png" alt="<-" />
        <p>Crear Cuenta</p>
        <div className="relleno"></div>
      </nav>
      <form action="">
        <p className="p_title">Ingresa un nombre de usuario y contraseña.</p>
        <div className="form_container_login">
          <div className="labels_input register">
            <label htmlFor="">
              <p>Nombre de Usuario</p>
              <input type="text" />
              <div className="footer register"></div>
            </label>
            <label htmlFor="">
              <p>Contraseña:</p>
              <input type="text" />
              <div className="footer register">
                <p>Deberá contener al menos 8 caracteres.</p>
              </div>
              <div className="check">
                <input type="checkbox" name="" id="" />
                <p className="terms">
                  He leído y acepto los <a href="">Términos</a> y{" "}
                  <a href="">Condiciones</a>.
                </p>
              </div>
            </label>
          </div>
          <a className="Default_btn active register" href="">
            Continuar
          </a>
        </div>
      </form>
    </div>
  );
};

//
