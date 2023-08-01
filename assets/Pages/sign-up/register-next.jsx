import React from "react";
import { Link } from "react-router-dom";

export const Registeruser = () => {
  return (
    <div className="login_container">
      <nav className="navbar_container">
        <Link to="/register">
          <img src="src\public\left-icon-placeholder.png" alt="<-" />
        </Link>
        <p>Crear Cuenta</p>
        <div className="relleno"></div>
      </nav>
      <form className="Registeruser_Form" action="">
        <p className="p_title">Ingresa un nombre de usuario y contraseña.</p>
        <div className="form_container_login">
          <div className="labels_input register">
            {/* --------------INPUT NAME--------------- */}
            <div className="labels_input name error">
              {/* ADD ERROR or OK */}
              <label className="label_p" htmlFor="">
                <p>Nombre de Usuario</p>
                <input type="text" />
                <span className="name_span error">
                  {/* ADD ERROR or OK */}
                  El nombre de usuario no está disponible
                </span>
                {/* --------------INPUT PASSWORD--------------- */}
              </label>{" "}
            </div>
            <div className="labels_input password ok">
              {/* ADD ERROR or OK */}
              <label htmlFor="">
                <p>Contraseña:</p>

                <input type="password" />

                <span className="password_span ok">
                  {/* ADD ERROR or OK */}
                  Deberá contener al menos 8 caracteres.
                </span>
                <div className="check">
                  <input type="checkbox" className="checkbox" name="" id="" />
                  <p className="terms">
                    He leído y acepto los <a href="">Términos</a> y <a href="">Condiciones</a>.
                  </p>
                </div>
              </label>
            </div>
          </div>
          <a className="Default_btn standar" href="">
            Continuar
          </a>
        </div>
      </form>
    </div>
  );
};

//
